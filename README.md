# Flask + React (Bun bundler)

This project integrates a Flask backend (Jinja2 templates, static files) with a React frontend bundled by Bun.

## Prerequisites
- Python 3
- Bun (https://bun.sh)

## Install dependencies
```bash
bun install
```

## Development
Run three processes in parallel (or use two terminals if you combine the first two):

Terminal A (bundle React into Flask static/ with watch):
```bash
bun dev
```
This watches `src/frontend.tsx` and outputs ESM bundles to `static/assets/` (e.g., `frontend.js`).

Terminal B (Tailwind CSS in watch mode):
```bash
bun run css:dev
```
This compiles `static/css/tailwind.css` to `static/css/tw.css` and watches for changes. DaisyUI is included via the `@plugin "daisyui"` directive.

Terminal C (start Flask):
```bash
python3 app.py
```
Open http://127.0.0.1:5000/ and you should see the React app mounting into `templates/index.html`. The template also loads `/static/css/tw.css`.

## Production build
Generate production assets:
```bash
bun build
bun run css:build
```
Then run Flask normally (e.g., `python3 app.py` or via your WSGI server). The template loads `/static/assets/frontend.js` and `/static/css/tw.css`.

## Notes
- React entry: `src/frontend.tsx`
- Tailwind entry: `static/css/tailwind.css` -> output: `static/css/tw.css`
- DaisyUI enabled via `@plugin "daisyui"` in `tailwind.css`; change theme by setting `data-theme` on `<html>`.
- Flask template: `templates/index.html` loads `/static/assets/frontend.js` and `/static/css/tw.css`
- Static assets served by Flask from `/static`


## Troubleshooting
- Images not loading: Ensure you have restarted the Bun watcher after the recent change. Stop any running `bun dev` process and run it again so bundles are rebuilt with `--public-path=/static/assets`. The compiled JS should reference `/static/assets/<hash>.svg` rather than `./<hash>.svg`.
- Verify you are running all three processes during development:
  - Terminal A: `bun dev`
  - Terminal B: `bun run css:dev`
  - Terminal C: `python3 app.py`

## Google Maps Setup
To use Google Maps instead of Apple Maps in the Map component:

1. Create a Google Maps JavaScript API key in Google Cloud Console and restrict it to your site origins (e.g., http://127.0.0.1:5000 and http://localhost:5000) and the Maps JavaScript API.
2. Put the key in your `.env` file:
```
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_JS_API_KEY
```
3. Restart Flask. The template injects the key into `window.__GMAPS_API_KEY`, and the React component dynamically loads the Maps script.
4. Open the site and check the console for any `[GoogleMaps]` messages if it doesn’t render.

## Apple MapKit JS Setup
To render Apple Maps in the React Map component, you must supply credentials and a private key file:

1. Create a key in Apple Developer (Maps Identifiers) and download the AuthKey_XXXXXX.p8.
2. Set environment variables (e.g., in a `.env` or your shell):
   - `APPLE_TEAM_ID=YOUR_TEAM_ID`
   - `APPLE_MAPS_KEY_ID=YOUR_MAPS_KEY_ID`
   - `APPLE_MAPS_KEY_PATH=/absolute/path/to/AuthKey_XXXXXX.p8`
   - Optional: `APPLE_MAPS_ORIGINS` (comma-separated) if you want to lock origins; by default, the server also includes `http://localhost:5000`, `http://127.0.0.1:5000`, and the current request origin.

Note: For local development, this project will auto-load a `.env` file if you install `python-dotenv`:
```bash
pip install python-dotenv
```
Example `.env` file:
```
APPLE_TEAM_ID=YOUR_TEAM_ID
APPLE_MAPS_KEY_ID=YOUR_MAPS_KEY_ID
APPLE_MAPS_KEY_PATH=/absolute/path/to/AuthKey_XXXXXX.p8
APPLE_MAPS_ORIGINS=http://127.0.0.1:5000,http://localhost:5000
```

3. Start Flask and open the site at http://127.0.0.1:5000/ or http://localhost:5000/.

If the map does not render, open the browser console:
- Look for `[MapKit] JWT fetch/init error:` messages. The `/services/jwt` endpoint returns plain-text errors if configuration is missing or the .p8 file is not found.
- Ensure the origin you are using matches one of the allowed origins in the token (the server now includes the current request origin automatically).
