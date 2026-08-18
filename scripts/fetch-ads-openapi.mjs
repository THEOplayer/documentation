import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const DEFAULT_SPEC_URL = 'https://us.ads.optiview.dolby.com/api/v1/docs/json';
const OUTPUT_PATH = resolve('.docusaurus/openapi/ads-v2/openapi.json');

const specUrl = process.env.ADS_OPENAPI_SPEC_URL ?? DEFAULT_SPEC_URL;

const headers = {
  Accept: 'application/json',
  'User-Agent': 'optiview-docs-openapi-fetcher',
};

const source = specUrl.startsWith('file://') || specUrl.startsWith('/') ? await readFile(specUrl.replace(/^file:\/\//, ''), 'utf8') : undefined;

const spec = source
  ? JSON.parse(source)
  : await (async () => {
      const response = await fetch(specUrl, { headers });

      if (!response.ok) {
        throw new Error(`Failed to fetch Ads OpenAPI spec from ${specUrl}: ${response.status} ${response.statusText}`);
      }

      return response.json();
    })();

if (spec.openapi !== '3.0.3' || !spec.paths || !spec.components) {
  throw new Error(`Fetched Ads OpenAPI spec from ${specUrl} is not the expected OpenAPI 3.0.3 document.`);
}

function removeExcludedFields(value) {
  if (Array.isArray(value)) {
    for (let index = value.length - 1; index >= 0; index -= 1) {
      if (value[index] === 'adPrefetchMs') {
        value.splice(index, 1);
      }
    }
    value.forEach(removeExcludedFields);
    return;
  }

  if (value && typeof value === 'object') {
    delete value.adPrefetchMs;
    Object.values(value).forEach(removeExcludedFields);
  }
}

removeExcludedFields(spec);

// The API generates random UUID defaults on every request; pin them so regeneration is deterministic.
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const PLACEHOLDER_UUID = '00000000-0000-0000-0000-000000000000';

function pinRandomUuidDefaults(value) {
  if (Array.isArray(value)) {
    value.forEach(pinRandomUuidDefaults);
    return;
  }

  if (value && typeof value === 'object') {
    if (typeof value.default === 'string' && UUID_PATTERN.test(value.default)) {
      value.default = PLACEHOLDER_UUID;
    }
    Object.values(value).forEach(pinRandomUuidDefaults);
  }
}

pinRandomUuidDefaults(spec);

const httpMethods = new Set(['get', 'put', 'post', 'delete', 'patch', 'options', 'head', 'trace']);
const titleCase = (value) =>
  value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ');
const operationName = (method, path) =>
  `${method}-${path
    .replace(/^\/api\/v1\//, '')
    .replace(/[{}]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`;
const tagForPath = (path) => {
  const segments = path.split('/').filter(Boolean);
  const resource = segments[2] === 'channels' && segments[4] ? segments[4] : segments[2];

  return titleCase(resource ?? 'Ads');
};

for (const [path, pathItem] of Object.entries(spec.paths)) {
  for (const [method, operation] of Object.entries(pathItem)) {
    if (!httpMethods.has(method)) {
      continue;
    }

    operation.operationId ??= operationName(method, path);
    operation.summary ??= `${titleCase(method)} ${path.replace(/^\/api\/v1/, '') || '/'}`;
    operation.tags ??= [tagForPath(path)];
  }
}

await mkdir(dirname(OUTPUT_PATH), { recursive: true });
await rm('ads/api/reference', { recursive: true, force: true });
await writeFile(OUTPUT_PATH, `${JSON.stringify(spec, null, 2)}\n`);

console.log(`Fetched Ads OpenAPI spec from ${specUrl} into ${OUTPUT_PATH}`);
