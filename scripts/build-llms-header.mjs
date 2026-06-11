#!/usr/bin/env node
/**
 * Replaces the auto-generated header of build/llms.txt (everything before the
 * first "## " section) with the hand-curated content in static/llms.txt.
 *
 * Keeps the curated intro (title, rebranding table, products, getting started,
 * frameworks, connectors) as the editable source of truth while letting the
 * @signalwire/docusaurus-plugin-llms-txt plugin own the per-product sections.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const headerPath = path.join(root, 'static', 'llms.txt');
const generatedPath = path.join(root, 'build', 'llms.txt');

if (!fs.existsSync(headerPath)) {
  console.error(`[build-llms-header] Missing curated header: ${headerPath}`);
  process.exit(1);
}
if (!fs.existsSync(generatedPath)) {
  console.error(`[build-llms-header] Missing generated file: ${generatedPath}`);
  process.exit(1);
}

const header = fs.readFileSync(headerPath, 'utf8').replace(/\s+$/, '');
const generated = fs.readFileSync(generatedPath, 'utf8');

const firstSection = generated.search(/^## /m);
const sections = firstSection >= 0 ? generated.slice(firstSection) : generated;

const combined = `${header}\n\n${sections}`;
fs.writeFileSync(generatedPath, combined);

console.log(`[build-llms-header] Wrote ${generatedPath} (${combined.length} bytes, header ${header.length} + sections ${sections.length})`);
