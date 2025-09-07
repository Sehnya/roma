import "../../static/css/tw.css";
import { NavBar } from "@/components/NavBar.tsx";

const menuItems = [
  {
    id: 1,
    name: "Black Truffle Risotto",
    description: "Carnaroli rice finished with aged Parmigiano-Reggiano, shaved black truffle, and chive oil",
    price: "$48",
    image: "/static/images/food1.jpg",
    category: "Signature Dishes"
  },
  {
    id: 2,
    name: "Seared Day-Boat Scallops",
    description: "Sweet corn velouté, crispy pancetta, lemon beurre blanc, and micro herbs",
    price: "$42",
    image: "/static/images/food2.jpg",
    category: "Seafood"
  },
  {
    id: 3,
    name: "Herb-Crusted Lamb Loin",
    description: "Rosemary jus, pomme purée, charred baby carrots, and minted gremolata",
    price: "$52",
    image: "/static/images/food3.jpg",
    category: "Prime Cuts"
  },
  {
    id: 4,
    name: "Wild Mushroom Tagliatelle",
    description: "Hand-cut pasta, porcini cream, aged pecorino, and white wine shallots",
    price: "$38",
    image: "/static/images/food4.jpg",
    category: "Pasta"
  }
];

export const Menu = () => (
  <div className="w-dvw min-h-dvh bg-black text-white font-serif antialiased overflow-x-hidden">
    <NavBar />

    {/* Spacer for fixed navbar */}
    <div className="h-16" />

    {/* Header / Hero */}
    <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-24">
      {/* Top border for continuity with home */}
      <img src="/static/images/border.png" alt="decorative border" className="w-full max-w-md mx-auto pb-8 opacity-90" />

      {/* Decorative herb (subtle) */}
      <div className="pointer-events-none select-none absolute inset-x-0 -top-6 flex justify-center z-0 opacity-70">
        <img src="/static/images/thyme.png" alt="decorative thyme" className="h-auto w-[600px] sm:w-[800px] max-w-[90vw] rotate-180" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide mb-6">Culinary Excellence</h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          A curated selection of seasonal entrées crafted with the finest ingredients and presented with elegance.
          Each dish tells a story of tradition, innovation, and uncompromising quality.
        </p>
      </div>
    </section>

    {/* Menu Grid */}
    <section className="relative w-full py-6 px-4 sm:px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {menuItems.map((item) => (
            <article key={item.id} className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-300">
                    {item.category}
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl sm:text-2xl font-light leading-tight">{item.name}</h3>
                      <span className="text-lg sm:text-xl font-light text-amber-300 ml-4">{item.price}</span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Wine Pairing Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide mb-6">Wine Pairings</h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Our sommelier has carefully selected wines to complement each dish, creating perfect harmony between food and wine.
            Ask your server about our curated pairings.
          </p>
          <button className="bg-white/10 backdrop-blur-lg border border-white/30 text-white font-serif font-light px-8 py-3 rounded-md hover:bg-white/20 transition-all duration-300">
            View Wine List
          </button>
        </div>
      </div>

      {/* Bottom border and decorative herb for balance */}
      <div className="mt-16 sm:mt-20">
        <img src="/static/images/border.png" alt="decorative border" className="w-full max-w-md mx-auto pt-6 opacity-90" />
      </div>
      <div className="pointer-events-none select-none relative flex justify-center -mb-10 opacity-80">
        <img src="/static/images/oregano.png" alt="decorative oregano" className="h-auto w-[600px] sm:w-[800px] max-w-[90vw]" />
      </div>
    </section>
  </div>
);

export default Menu;