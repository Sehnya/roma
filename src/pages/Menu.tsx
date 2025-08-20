import "static/css/tw.css";
import { NavBar } from "@/components/NavBar.tsx";

export const Menu = () => (
  <div className="w-dvw min-h-dvh bg-black text-white font-serif antialiased overflow-x-hidden">
    <NavBar />

    {/* Spacer for fixed navbar */}
    <div className="h-16" />

    {/* Header / Hero */}
    <section className="relative w-full py-16 px-6 lg:px-24">
      {/* Top border for continuity with home */}
      <img src="/static/images/border.png" alt="border" className="w-150 mx-auto pb-10 opacity-90" />

      {/* Decorative herb (subtle) */}
      <div className="pointer-events-none select-none absolute inset-x-0 -top-10 flex justify-center z-0 opacity-70">
        <img src="/static/images/thyme.png" alt="decorative thyme" className="h-auto w-[800px] max-w-[90vw] rotate-180" />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl lg:text-5xl font-light tracking-wide">This Week’s Menu</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          A curated selection of seasonal entrées crafted with the finest ingredients and presented with elegance.
        </p>
      </div>
    </section>

    {/* Menu Grid */}
    <section className="relative w-full py-6 px-6 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Card 1 */}
        <article className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/static/images/food1.jpg"
              alt="Black Truffle Risotto"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-light">Black Truffle Risotto</h3>
            <p className="text-gray-300 mt-2">
              Carnaroli rice finished with Parmigiano-Reggiano, shaved black truffle, and chive oil.
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/static/images/food2.jpg"
              alt="Seared Day-Boat Scallops"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-light">Seared Day-Boat Scallops</h3>
            <p className="text-gray-300 mt-2">
              Sweet corn velouté, crispy pancetta, lemon beurre blanc, and micro herbs.
            </p>
          </div>
        </article>

        {/* Card 3 */}
        <article className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/static/images/food3.jpg"
              alt="Herb-Crusted Lamb Loin"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-light">Herb-Crusted Lamb Loin</h3>
            <p className="text-gray-300 mt-2">
              Rosemary jus, pomme purée, charred baby carrots, and minted gremolata.
            </p>
          </div>
        </article>

        {/* Card 4 */}
        <article className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src="/static/images/food4.jpg"
              alt="Wild Mushroom Tagliatelle"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-light">Wild Mushroom Tagliatelle</h3>
            <p className="text-gray-300 mt-2">
              Hand-cut pasta, porcini cream, pecorino, and white wine shallots.
            </p>
          </div>
        </article>
      </div>

      {/* Bottom border and decorative herb for balance */}
      <div className="mt-16">
        <img src="/static/images/border.png" alt="border" className="w-150 mx-auto pt-6 opacity-90" />
      </div>
      <div className="pointer-events-none select-none relative flex justify-center -mb-10 opacity-80">
        <img src="/static/images/oregano.png" alt="decorative oregano" className="h-auto w-[800px] max-w-[90vw]" />
      </div>
    </section>
  </div>
);

export default Menu;
