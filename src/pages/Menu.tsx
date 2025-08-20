export const Menu = () => (

    <div className="px-8 py-16 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Our Menu</h2>

      <section className="mb-16" id={ "breakfast"}>
        <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Breakfast</h3>
        <ul className="space-y-4 text-lg">
          <li className="flex justify-between"><span>Avocado Toast</span><span>$12</span></li>
          <li className="flex justify-between"><span>Classic Omelette</span><span>$10</span></li>
          <li className="flex justify-between"><span>Fresh Pastries</span><span>$8</span></li>
        </ul>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Lunch</h3>
        <ul className="space-y-4 text-lg">
          <li className="flex justify-between"><span>Caprese Salad</span><span>$14</span></li>
          <li className="flex justify-between"><span>Margherita Pizza</span><span>$16</span></li>
          <li className="flex justify-between"><span>Seafood Risotto</span><span>$22</span></li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Dinner</h3>
        <ul className="space-y-4 text-lg">
          <li className="flex justify-between"><span>Filet Mignon</span><span>$38</span></li>
          <li className="flex justify-between"><span>Lobster Ravioli</span><span>$34</span></li>
          <li className="flex justify-between"><span>Truffle Gnocchi</span><span>$28</span></li>
        </ul>
      </section>
    </div>


)

