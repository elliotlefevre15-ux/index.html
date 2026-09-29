#!/usr/bin/env sh
cd "$(dirname "$0")"
echo "WILDHEARTH sur http://localhost:8000  (Ctrl+C pour arrêter)"
python3 -m http.server 8000
