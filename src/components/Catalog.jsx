function Catalog() {
  const products = [
    { id: 1, name: 'Basmati Rice 5kg', price: 499, discount: 12, image: 'https://images.unsplash.com/photo-1705147289789-6df2593f1b1e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYXNtYXRpJTIwUmljZSUyMDVrZ3xlbnwwfDB8fHwxNzYyNDk3NDUxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { id: 2, name: 'Sunflower Oil 1L', price: 155, discount: 8, image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, name: 'Whole Wheat Atta 5kg', price: 269, discount: 10, image: 'https://images.unsplash.com/photo-1705147289789-6df2593f1b1e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYXNtYXRpJTIwUmljZSUyMDVrZ3xlbnwwfDB8fHwxNzYyNDk3NDUxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { id: 4, name: 'Toor Dal 1kg', price: 145, discount: 7, image: 'https://images.unsplash.com/photo-1705147289789-6df2593f1b1e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYXNtYXRpJTIwUmljZSUyMDVrZ3xlbnwwfDB8fHwxNzYyNDk3NDUxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ];

  return (
    <section id="catalog" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Popular essentials</h2>
            <p className="text-slate-600 mt-1">Best value picks with subscription discounts</p>
          </div>
          <a href="#" className="text-sm text-slate-700 hover:text-slate-900">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-slate-900 line-clamp-1">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-semibold text-slate-900">₹{p.price}</div>
                    <div className="text-xs text-emerald-600">Save {p.discount}%</div>
                  </div>
                  <button className="rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
