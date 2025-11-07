import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const sampleProducts = [
  { id: 1, name: 'Organic Apples', price: 180, discount: 10, stock: 24, image: 'https://images.unsplash.com/photo-1664066344258-57ba7ba7115a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmdhbmljJTIwQXBwbGVzfGVufDB8MHx8fDE3NjI0OTgzMDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Whole Wheat Bread', price: 60, discount: 0, stock: 12, image: 'https://images.unsplash.com/photo-1664066344258-57ba7ba7115a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmdhbmljJTIwQXBwbGVzfGVufDB8MHx8fDE3NjI0OTgzMDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Arabica Coffee', price: 420, discount: 15, stock: 8, image: 'https://images.unsplash.com/photo-1664066344258-57ba7ba7115a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmdhbmljJTIwQXBwbGVzfGVufDB8MHx8fDE3NjI0OTgzMDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 4, name: 'Detergent Pack', price: 320, discount: 5, stock: 30, image: 'https://images.unsplash.com/photo-1664066344258-57ba7ba7115a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmdhbmljJTIwQXBwbGVzfGVufDB8MHx8fDE3NjI0OTgzMDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

export default function Catalog() {
  const [products, setProducts] = useState(sampleProducts);

  useEffect(() => {
    // Hook up to backend later; using curated sample data for now
  }, []);

  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Popular products</h2>
            <p className="text-gray-600">Transparent pricing with instant discounts applied.</p>
          </div>
          <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">View all</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => {
            const discounted = p.discount ? Math.round(p.price * (1 - p.discount / 100)) : p.price;
            return (
              <div key={p.id} className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium text-gray-900 line-clamp-2">{p.name}</h3>
                    <span className="inline-flex items-center gap-1 text-xs text-yellow-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> 4.8
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    {p.discount > 0 && (
                      <>
                        <span className="text-lg font-semibold text-gray-900">₹{discounted}</span>
                        <span className="text-sm text-gray-500 line-through">₹{p.price}</span>
                        <span className="text-xs text-green-700 bg-green-100 rounded px-2 py-0.5">-{p.discount}%</span>
                      </>
                    )}
                    {p.discount === 0 && (
                      <span className="text-lg font-semibold text-gray-900">₹{p.price}</span>
                    )}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className={`text-xs font-medium ${p.stock > 10 ? 'text-green-700' : 'text-amber-700'} bg-gray-50 rounded px-2 py-0.5`}>{p.stock} in stock</span>
                    <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700">Add</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
