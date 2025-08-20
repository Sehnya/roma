export const Events = () => (

    <div className="px-8 py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2">Wine Tasting Evening</h3>
          <p className="text-gray-600 mb-4">August 30, 2025 · 7:00 PM</p>
          <p className="mb-4">Join us for an exclusive evening featuring fine Italian wines paired with gourmet hors d'oeuvres.</p>
          <button className="text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
            Reserve Now
          </button>
        </div>

        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold mb-2">Chef’s Table Experience</h3>
          <p className="text-gray-600 mb-4">September 15, 2025 · 8:00 PM</p>
          <p className="mb-4">Experience a curated multi-course dinner by our head chef, featuring seasonal ingredients.</p>
          <button className="text-black border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
            Reserve Now
          </button>
        </div>
      </div>
    </div>

)