// Définition des objets du jeu. Les libellés sont en français.
export const ITEMS = {
  wood:   { name: 'BOIS',    icon: 'wood',   cat: 'res' },
  stone:  { name: 'PIERRE',  icon: 'stone',  cat: 'res' },
  fiber:  { name: 'FIBRE',   icon: 'fiber',  cat: 'res' },
  hide:   { name: 'PEAU',    icon: 'hide',   cat: 'res' },
  bone:   { name: 'OS',      icon: 'bone',   cat: 'res' },
  meat:   { name: 'VIANDE CRUE',   icon: 'meat', cat: 'food', food: 12, water: 0, hurt: 6 },
  cooked: { name: 'VIANDE CUITE',  icon: 'cooked', cat: 'food', food: 40, water: 0, heal: 6 },
  berry:  { name: 'BAIES',   icon: 'berry',  cat: 'food', food: 8, water: 6 },
  trophy_deer:  { name: 'Bois du Cerf géant', icon: 'trophy', cat: 'trophy', rare: 'Trophée rare', mount: 'deer' },
  trophy_bison: { name: 'Crâne de bison',     icon: 'trophy', cat: 'trophy', rare: 'Trophée', mount: 'bison' },
  trophy_ibex:  { name: 'Cornes de bouquetin', icon: 'trophy', cat: 'trophy', rare: 'Trophée', mount: 'ibex' },
};

export const RES_ORDER = ['wood', 'stone', 'fiber', 'meat', 'cooked', 'berry', 'hide', 'bone'];

// Armes : la lance est l'arme principale.
export const WEAPONS = {
  spear:       { name: 'Lance en bois',   melee: 20, throw: 46, range: 2.7 },
  stone_spear: { name: 'Lance à pointe de pierre', melee: 32, throw: 72, range: 2.9 },
};

// Recettes. bench: nécessite un établi à proximité.
export const RECIPES = [
  { id: 'spear', name: 'Lance de chasse', desc: 'Pour lancer sur le gibier (elle se ramasse).', cost: { wood: 3, stone: 1, fiber: 1 }, give: { item: 'spear', n: 1 }, bench: false },
  { id: 'stone_spear', name: 'Lance à pointe de pierre', desc: 'Dégâts +60 %. Remplace ta lance.', cost: { wood: 4, stone: 4, fiber: 3, bone: 1 }, give: { weapon: 'stone_spear' }, bench: true },
  { id: 'bag2', name: 'Sac en peau', desc: 'Capacité par ressource : 60.', cost: { hide: 3, fiber: 6 }, give: { bag: 2 }, bench: true },
  { id: 'bag3', name: 'Grand sac de chasseur', desc: 'Capacité par ressource : 120.', cost: { hide: 8, fiber: 10, bone: 4 }, give: { bag: 3 }, bench: true },
];

export const BAG_CAPS = [0, 30, 60, 120];
