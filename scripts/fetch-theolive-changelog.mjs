import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = 'https://engine-changelog.s3.eu-west-3.amazonaws.com/CHANGELOG.md';
const outputPath = path.join(__dirname, '..', 'theolive', 'changelog.md');

try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch changelog: ${response.status} ${response.statusText}`);
  }
  const content = await response.text();
  fs.writeFileSync(outputPath, content);
  console.log('Fetched THEOlive engine changelog.');
} catch (error) {
  console.warn(`Warning: Could not fetch THEOlive engine changelog: ${error.message}`);
  if (!fs.existsSync(outputPath)) {
    fs.writeFileSync(outputPath, '# Changelog\n\nChangelog could not be fetched.\n');
  }
}
