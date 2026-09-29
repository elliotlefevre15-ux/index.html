// Empaquette src/ + three.js en un seul fichier (dist/wildhearth.js) : le jeu se lance alors par double-clic sur index.html,
// sans serveur local. Usage : npm i && npm run build   (les sources restent modifiables : index.dev.html les charge en direct)
import { build } from 'esbuild';

await build({
  entryPoints: ['src/main.js'],
  bundle: true, minify: true, format: 'iife', target: 'es2020', legalComments: 'none',
  outfile: 'dist/wildhearth.js',
  alias: { three: './lib/three.module.js', BufferGeometryUtils: './lib/BufferGeometryUtils.js' },
});
console.log('OK → dist/wildhearth.js');
