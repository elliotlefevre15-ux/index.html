# WILDHEARTH — vertical slice (Cro-Magnon)

Petit open-world en 3ᵉ personne : **explorer → collecter → chasser → construire → améliorer → explorer plus loin.**
Prototype web jouable (Three.js), format **9:16** dans un téléphone virtuel, pensé pour être porté au tactile.

## Lancer

**Le plus simple : double-clic sur `index.html`** (à la racine du dépôt ou dans `game/`) → s'ouvre dans Chrome, aucun serveur, aucune installation, hors ligne.
Le jeu est livré déjà empaqueté (`game/dist/wildhearth.js`, Three.js inclus).

Pour **modifier le code** (les sources sont dans `game/src/`, modules ES) :

```bash
cd game
python3 -m http.server 8000      # puis ouvrir http://localhost:8000/index.dev.html  (charge src/ en direct)
# ou :  npm run dev   /   lancer.sh   /   lancer.bat
npm i && npm run build           # régénère dist/wildhearth.js après tes modifications
```

## Contrôles

| Explorer | |
|---|---|
| **W A S D** (ZQSD en AZERTY : touches par position physique) | se déplacer |
| Souris | caméra (clic sur le jeu pour capturer la souris, Échap pour la libérer) |
| Maj / C / Espace | courir / s'accroupir / sauter |
| **E** | interagir : couper, casser, cueillir, dépecer, boire, cuire, dormir, coffre, établi |
| Clic gauche | coup de lance |
| Clic droit maintenu + clic gauche | viser et **lancer** la lance (elle se ramasse) |
| **Q** maintenu | *observer* : zoom, traces qui brillent, état des animaux (calme / alerte / fuite) |
| F · I · M · H · N | manger · sac/fabrication · carte · aide · son |

| Construction (**B**) | |
|---|---|
| Clic gauche / clic droit | poser / annuler (clic droit glissé : tourner la caméra) |
| R · G · Suppr | pivoter · déplacer une pièce visée · supprimer (ressources rendues) |
| T | aimant on/off (placement libre) |
| Molette · PgUp/PgDn · 1-9 | zoom · hauteur · choisir une pièce |
| Échap | quitter le mode construction |

## Ce qu'il y a dedans

* **Monde** (~200 m) : forêt, clairières, rivière, zone rocheuse, montagne, sentiers, cycle jour/nuit, brouillard, ombres, herbe animée, particules, ambiance sonore procédurale.
* **Animaux** : troupeau de **bisons** (chargent s'ils sont blessés), **Cerf géant** rare (pistes, lits, sang ; actif à l'aube/au crépuscule), **bouquetins** de montagne (bondissent, fuient vers les crêtes).
* **Chasse par observation** : chaque animal a une jauge de *conscience* (bruit selon marche/course/accroupi, vue, obscurité, couvert des arbres). Il broute → s'alerte → fuit. Un animal blessé saigne et laisse une piste.
* **Construction libre** façon Planet Zoo : fondation, sol, mur, demi-mur, poutre, toit, porte, fenêtre, escalier ; feu, lit, coffre, table, siège, établi ; trophées, ossements, râtelier, torche, étendard, tapis, cairn. Aimant souple (grille locale calée sur tes pièces, y compris étages/escaliers) ou placement libre, remplacement (mur → porte), déplacement, suppression.
* **Progression** : niveaux de camp 1→5 (abri, cabane, grande cabane, camp organisé, base avancée) qui *n'imposent aucune forme* ; fabrication (lance à pointe de pierre, sacs plus grands) à l'établi ; trophées exposables (mur ou pied).
* **Persistance** : le camp, l'inventaire, la carte découverte, l'heure et la progression sont sauvegardés (localStorage) — auto toutes les 15 s et à chaque construction.

## Architecture

```
game/
  index.html (jeu empaqueté) · index.dev.html (modules, pour développer) · dist/ · css/style.css · lib/ (three.js) · build.mjs
  src/
    main.js               boucle de jeu, assemblage des systèmes
    systems/              input (actions abstraites), audio, jour/nuit, particules, sauvegarde, objectifs, bruit, géométrie
    world/                config (carte), terrain, eau, végétation instanciée par chunks, colliders
    player/               modèle Cro-Magnon procédural, physique/survie/armes, caméra, interactions
    animals/              modèles, IA (Animal), gestionnaire (troupeaux, carcasses, butin), traces
    building/             catalogue de pièces, Camp (persistant, collisions, lumières), Builder (fantôme, snap)
    inventory/            objets, recettes, inventaire
    ui/                   HUD DOM, carte + brouillard, vignettes de construction, icônes SVG
    eras.js               points d'extension : Romain, Grec, Militaire moderne
```

* Le jeu ne lit que des **actions** (`input.move`, `pressed('interact')`…) : brancher un joystick tactile = remplacer `Input`.
* L'interface est en DOM, dimensionnée en `cqw` (unités relatives à l'écran 9:16), donc déjà adaptée au téléphone.
* Nouvelle époque = nouveau catalogue de pièces (`building/pieces.js`), nouveaux modèles de personnage et de butin ; voir `eras.js`.
* Débogage : `window.__game` expose tout l'état ; `__step(n)` avance la simulation pas à pas.
