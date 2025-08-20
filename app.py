from flask import Flask, render_template, send_from_directory
import os

GOOGLE_MAPS_API_KEY = os.getenv("GOOGLE_MAPS_API_KEY") or ""
GOOGLE_MAPS_MAP_ID = os.getenv("GOOGLE_MAPS_MAP_ID") or ""

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def index():
    return render_template(
        'index.html',
        gmaps_api_key=GOOGLE_MAPS_API_KEY,
        gmaps_map_id=GOOGLE_MAPS_MAP_ID
    )
    
@app.route('/<path:path>')
def catch_all(path):
    # if the path matches a file in /static, serve it
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)

    # otherwise always return index.html so React Router can handle routing
    return render_template(
        'index.html',
        gmaps_api_key=GOOGLE_MAPS_API_KEY,
        gmaps_map_id=GOOGLE_MAPS_MAP_ID
    )    

if __name__ == "__main__":
    # Use 0.0.0.0 so Railway can expose the correct port
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
