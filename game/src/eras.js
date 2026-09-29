// Époques jouables. Pour la V1 seul Cro-Magnon est actif ; les autres sont décrites pour brancher la suite.
// Une époque = { vêtements/modèle de personnage, armes, ressources, catalogue de pièces, mobilier, style, évolutions }.
import { PIECES, CATEGORIES } from './building/pieces.js';

export const ERAS = {
  cromagnon: {
    id: 'cromagnon', name: 'Cro-Magnon', active: true,
    materials: ['peau', 'fourrure', 'bois', 'os', 'pierre'],
    start: { weapons: ['couteau rudimentaire', 'lance primitive'], bag: 'sac très simple' },
    catalogue: PIECES, categories: CATEGORIES,
    levels: ['Abri rudimentaire', 'Cabane en bois', 'Grande cabane', 'Camp organisé', 'Base avancée'],
  },
  romain: {
    id: 'romain', name: 'Romain', active: false,
    materials: ['cuir', 'bronze', 'métal', 'bois', 'pierre'],
    build: ['tente', 'camp', 'murs', 'bâtiments en pierre', 'mobilier romain'],
  },
  grec: {
    id: 'grec', name: 'Grec', active: false,
    materials: ['pierre blanche', 'bronze', 'bois', 'tissus'],
    build: ['maison', 'colonnes', 'murs', 'statues', 'mobilier'],
  },
  militaire: {
    id: 'militaire', name: 'Militaire moderne', active: false,
    materials: ['camouflage', 'métal', 'toile', 'bois', 'équipement moderne'],
    build: ['tente', 'poste avancé', 'bunker léger', 'base'],
  },
};
export const currentEra = ERAS.cromagnon;
