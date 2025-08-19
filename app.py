from flask import Flask, render_template
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

if __name__ == "__main__":
    # Use 0.0.0.0 so Railway can expose the correct port
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
