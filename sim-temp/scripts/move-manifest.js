// scripts/move-manifest.js
import fs from 'fs';
import path from 'path';
import pkg from '../package.json' with { type: 'json' };

// Build output directory
const outDir = path.resolve('dist', 'simulations', pkg.name);

const viteManifest = path.join(outDir, '.vite', 'manifest.json');
const target = path.join(outDir, 'manifest.json');

// Make sure the target folder exists
fs.mkdirSync(outDir, { recursive: true });

// Copy manifest to the same folder as index.html
fs.copyFileSync(viteManifest, target);
console.log(`Manifest copied to ${target}`);
