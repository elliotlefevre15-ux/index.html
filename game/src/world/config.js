// Constantes du monde. Un seul endroit pour ajuster la carte.
import { smooth } from '../systems/noise.js';

export const WORLD = { size: 200, half: 100, cells: 256 };
export const WATER_Y = -0.45;
export const RIVER_BED = -1.3;
export const CAMP = { x: -6, z: 22, h: 1.4, r: 12 };
export const BISON_MEADOW = { x: 20, z: -6, r: 17 };
export const ROCK_ZONE = { x: -58, z: -30, r: 26 };

export function riverX(z) {
  return 44 + 13 * Math.sin(z * 0.04 + 0.6) + 5 * Math.sin(z * 0.11 + 2);
}
export function riverStrength(z) { return smooth(-78, -55, z); }

// Sentiers naturels : polylignes (x,z)
export const PATHS = [
  [[-6, 22], [-16, 16], [-28, 10], [-38, 6], [-50, -6], [-58, -16]],
  [[-6, 22], [4, 14], [14, 8], [22, 6], [30, 8], [40, 10], [52, 8]],
  [[-6, 22], [-4, 6], [-2, -8], [-6, -22], [-12, -38], [-18, -52], [-22, -62]],
  [[-6, 22], [-2, 36], [6, 50], [20, 60], [34, 70]],
];

// Zones de repos / de passage du cerf géant (ordre = itinéraire probable)
export const DEER_ZONES = [
  { name: 'Fourré ouest', x: -64, z: -6, r: 9 },
  { name: 'Lisière des rochers', x: -44, z: -46, r: 8 },
  { name: 'Bois de l\'est', x: 72, z: -34, r: 9 },
  { name: 'Vallon sud', x: 62, z: 56, r: 9 },
];
// Le début de la piste, à portée du camp
export const DEER_TRAIL_START = { x: -33, z: 8 };

export const IBEX_ZONES = [
  { x: -52, z: -56, r: 12 },
  { x: -18, z: -66, r: 12 },
  { x: 12, z: -72, r: 12 },
];

export const POIS = [
  { id: 'camp', name: 'Camp', x: CAMP.x, z: CAMP.z, always: true, icon: 'camp' },
  { id: 'river', name: 'Rivière', x: 46, z: 24, icon: 'water' },
  { id: 'meadow', name: 'Clairière des bisons', x: BISON_MEADOW.x, z: BISON_MEADOW.z, icon: 'bison' },
  { id: 'rocks', name: 'Zone rocheuse', x: ROCK_ZONE.x, z: ROCK_ZONE.z, icon: 'rock' },
  { id: 'mountain', name: 'Montagne', x: -14, z: -68, icon: 'mountain' },
  { id: 'ibex', name: 'Crête des bouquetins', x: -18, z: -66, icon: 'ibex' },
  { id: 'forest', name: 'Forêt profonde', x: -42, z: 22, icon: 'tree' },
];
