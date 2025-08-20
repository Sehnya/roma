export default function Reservations() {
  return (
    <div className="px-8 py-16 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Reservations</h2>
      <form className="grid gap-6 text-lg">
        <input 
          type="text" 
          placeholder="Full Name" 
          className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
        <input 
          type="date" 
          className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
        <input 
          type="time" 
          className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
        <input 
          type="number" 
          placeholder="Number of Guests" 
          className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        />
        <textarea 
          placeholder="Special Requests" 
          className="border p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
        ></textarea>
        <button 
          type="submit" 
          className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          Book Table
        </button>
      </form>
    </div>
  );
}
