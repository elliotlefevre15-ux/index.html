#!/usr/bin/env sh
cd "$(dirname "$0")"
echo "WILDHEARTH sur http://localhost:8000/index.dev.html  (Ctrl+C pour arrêter)"
python3 -m http.server 8000
