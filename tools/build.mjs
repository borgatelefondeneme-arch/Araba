// Derleme: 1) claude.ai yayını için dosya klasörü (dist/artifact)  2) tek dosyalık çevrimdışı HTML (dist/turbo-koy.html)
// Kullanım: node tools/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { MeshoptDecoder } from 'meshoptimizer';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PUB = path.join(ROOT, 'public'), DIST = path.join(ROOT, 'dist');
fs.rmSync(DIST, { recursive: true, force: true });
const ls = (d) => fs.readdirSync(path.join(PUB, d)).filter(f => !f.startsWith('.'));
const b64 = (file) => fs.readFileSync(file).toString('base64');
const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg', '.glb': 'model/gltf-binary' };
const dataURL = (file) => `data:${MIME[path.extname(file)] || 'application/octet-stream'};base64,${b64(file)}`;

// GLB -> tek parça glTF JSON. claude.ai sayfasında WebAssembly'ye güvenmemek için meshopt sıkıştırması açılır.
await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder });
async function glbToJson(file) {
  const doc = await io.read(file);
  for (const e of doc.getRoot().listExtensionsUsed()) if (e.extensionName === 'EXT_meshopt_compression') e.dispose();
  const glb = Buffer.from(await io.writeBinary(doc));
  let off = 12, json = null, bin = null;
  while (off < glb.length) { const len = glb.readUInt32LE(off), type = glb.readUInt32LE(off + 4); const chunk = glb.subarray(off + 8, off + 8 + len); if (type === 0x4E4F534A) json = JSON.parse(chunk.toString('utf8')); else bin = chunk; off += 8 + len; }
  if (bin) json.buffers[0].uri = 'data:application/octet-stream;base64,' + bin.toString('base64');
  return JSON.stringify(json);
}

const bundle = await build({ entryPoints: [path.join(PUB, 'js/main.js')], bundle: true, format: 'esm', minify: true, write: false, target: 'es2020', legalComments: 'none' });
const js = bundle.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');

// ---- 1) claude.ai yayını ----
const ART = path.join(DIST, 'artifact');
const copy = (rel, to = rel) => { const d = path.join(ART, to); fs.mkdirSync(path.dirname(d), { recursive: true }); fs.copyFileSync(path.join(PUB, rel), d); };
fs.mkdirSync(path.join(ART, 'js'), { recursive: true });
fs.writeFileSync(path.join(ART, 'js/game.js'), bundle.outputFiles[0].text);
for (const d of ['css', 'img', 'sfx']) for (const f of ls(d)) copy(`${d}/${f}`);
fs.mkdirSync(path.join(ART, 'models'), { recursive: true });
for (const f of ls('models')) if (f.endsWith('.glb')) fs.writeFileSync(path.join(ART, 'models', f.replace(/\.glb$/, '.json')), await glbToJson(path.join(PUB, 'models', f)));
let html = fs.readFileSync(path.join(PUB, 'index.html'), 'utf8');
const body = html
  .replace(/<!doctype html>\s*<html[^>]*>\s*<head>\s*/i, '').replace(/<meta charset="utf-8">\n/, '').replace(/<meta name="viewport"[^>]*>\n/, '')
  .replace(/<\/head>\s*<body>\s*/, '').replace(/<\/body>\s*<\/html>\s*$/, '')
  .replace(/<script type="importmap">.*?<\/script>\n/s, '')
  .replace('<script type="module" src="js/main.js"></script>', '<script>window.TURBO_FMT = "json";</script>\n<script type="module" src="js/game.js"></script>');
const title = body.match(/<title>.*?<\/title>\n/)[0];
fs.writeFileSync(path.join(ART, 'index.html'), title + body.replace(title, ''));

// ---- 2) Tek dosya HTML (çevrimdışı) ----
const assets = {};
for (const f of ls('models')) assets['models/' + f] = dataURL(path.join(PUB, 'models', f));
for (const f of ls('sfx')) assets['sfx/' + f] = dataURL(path.join(PUB, 'sfx', f));
let css = fs.readFileSync(path.join(PUB, 'css/style.css'), 'utf8').replace(/url\(\.\.\/img\/([^)]+)\)/g, (_, f) => `url(${dataURL(path.join(PUB, 'img', f))})`);
let single = html
  .replace('<link rel="stylesheet" href="css/style.css">', () => `<style>${css}</style>`)
  .replace(/<link rel="manifest"[^>]*>\n/, '')
  .replace(/href="img\/([^"]+)"/g, (_, f) => `href="${dataURL(path.join(PUB, 'img', f))}"`)
  .replace(/<script type="importmap">.*?<\/script>\n/s, '')
  .replace('<script type="module" src="js/main.js"></script>', () =>
    `<script>window.TURBO_FMT = "glb"; window.TURBO_NET = (location.protocol === "file:" ? "none" : undefined); window.TURBO_ASSETS = ${JSON.stringify(assets)};</script>\n<script type="module">${js}</script>`);
fs.writeFileSync(path.join(DIST, 'turbo-koy.html'), single);
const mb = (f) => (fs.statSync(f).size / 1e6).toFixed(1) + ' MB';
console.log('dist/artifact hazır; dist/turbo-koy.html', mb(path.join(DIST, 'turbo-koy.html')));
