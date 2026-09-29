@echo off
cd /d "%~dp0"
where python >nul 2>nul && (start "" http://localhost:8000 & python -m http.server 8000) || (start "" http://localhost:3000 & npx --yes serve -l 3000 .)
