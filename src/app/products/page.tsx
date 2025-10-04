
'use client';

import { useMemo, useState } from 'react';
import ProductCard from '@/app/components/ProductCard';

type Category = 'engine' | 'gear' | 'hydraulic';

type Product = {
  id: string;
  imgSrc: string;
  title: string;
  api: string;
  desc: string;
  liters: string;
  category: Category;
};

const ALL_PRODUCTS: Product[] = [
  // --- Engine oils BUCKET
  {
    id: 'd17000',
    imgSrc: '/products/engine_oil/03.png',
    title: 'K.P.A.A D17000-20L',
    api: 'API CH-4 / SAE 20W-50',
    desc: 'Supercharged diesel engine oil for power and durability.',
    liters: "20L",
    category: 'engine',

  },
  
   {
    id: 'Alamoot-SAE-60-20L',
    imgSrc: '/products/engine_oil/08.png',
    title: 'Alamoot SAE 60',
    api: 'API CD / MIL-L-2104D',
    desc: 'High-viscosity monograde engine oil designed for older diesel and gasoline engines.',
    liters: "20L",
    category: 'engine',
  },
  {
  id: 'Alamoot-SAE-40-20l',
  imgSrc: '/products/engine_oil/11.png',
  title: 'Alamoot SAE 40',
  api: 'API SE/CC / MIL-L-46152A',
  desc: 'Durable SAE 40 monograde engine oil providing reliable protection for diesel engines.',
  liters: "20L",
  category: 'engine',
},
{
  id: 'Alamoot-SAE-50-20L',
  imgSrc: '/products/engine_oil/10.png',
  title: 'Alamoot SAE 50',
  api: 'MIL-L-2104D',
  desc: 'Heavy-duty SAE 50 monograde engine oil for diesel engines, offering reliable protection under high temperature conditions.',
  liters: "20L",
  category: 'engine',
}
,
  {
    id: 'absolute-vx20000-20L',
    imgSrc: '/products/engine_oil/05.png',
    title: 'Absolute VX 20000',
    api: 'API CI-4 / SAE 10W-40',
    desc: 'Reliable protection for turbocharged diesel engines.',
    liters: "20L",
    category: 'engine',
  },

  // -- ENGINE OILCANS
    {
  id: 'Alamoot SAE 10W-40 20L',
  imgSrc: '/products/engine_oil/02_blue.png',
  title: 'Alamoot SAE 10W-40',
  api: 'SAE 10W-40',
  desc: 'Multigrade engine oil offering reliable performance and protection in both high and low temperatures.',
  liters: "4L",
  category: 'engine',
}
,
// 🔴 Red Tin - SAE 20W-50 (Basic)
{
  id: 'Alamoot SAE 20W-50 (Red)',
  imgSrc: '/products/engine_oil/03_red.png',
  title: 'Alamoot SAE 20W-50',
  api: 'SAE 20W-50',
  desc: 'Reliable multigrade engine oil for older gasoline and diesel engines.',
  liters: "4L",
  category: 'engine',
},

// 🟢 Green Tin - SAE 20W-50 (API SG/CC)
{
  id: 'Alamoot SAE 20W-50 (Green)',
  imgSrc: '/products/engine_oil/13.png',
  title: 'Alamoot SAE 20W-50',
  api: 'API SG/CC',
  desc: 'Certified multigrade engine oil offering balanced protection for gasoline and light diesel engines.',
  liters: "4L",
  category: 'engine',
},
{
  id: 'H Hill Galaxy+ 10W-40 4L',
  imgSrc: '/products/engine_oil/17.png',
  title: 'H Hill Galaxy+ 10W-40',
  api: 'API SM',
  desc: 'High-quality multigrade engine oil offering reliable protection and performance for modern gasoline engines.',
  liters: "4L",
  category: 'engine',

}, 
{
  id: 'alamoot-sae-50-4l',
  imgSrc: '/products/engine_oil/A_0001_Green_Flat.png',
  title: 'Alamoot SAE 50',
  api: 'API SE/CC',
  desc: 'Monograde SAE 50 engine oil designed for durability in older diesel and gasoline engines.',
  liters: '4L',
  category: 'engine',
}
,
{
  id: 'alamoot-sae-20w50-4l',
  imgSrc: '/products/engine_oil/A1.png',
  title: 'Alamoot SAE 20W-50',
  api: 'API SL / SAE 20W-50',
  desc: 'Reliable multigrade engine oil offering excellent protection and performance.',
  liters: '4L',
  category: 'engine',
}
,
{
  id: 'alamoot-sae-10w40-4l',
  imgSrc: '/products/engine_oil/A2.png',
  title: 'Alamoot SAE 10W-40',
  api: 'API SL / SAE 10W-40',
  desc: 'Multigrade engine oil delivering dependable lubrication and performance for gasoline engines.',
  liters: '4L',
  category: 'engine',
},




// -- ENGINE OIL BOTTLES

{
  id: 'Alamoot SAE 20W-50 SL 1L',
  imgSrc: '/products/engine_oil/20-50.png',
  title: 'Alamoot SAE 20W-50',
  api: 'API SL',
  desc: 'Multigrade engine oil designed for gasoline engines, offering reliable protection and performance across seasons.',
  liters: "1L",
  category: 'engine',
},
{
  id: 'alamoot-sae-40-1l',
  imgSrc: '/products/engine_oil/40.png', 
  title: 'Alamoot SAE 40',
  api: 'API SE/CC',
  desc: 'Monograde engine oil providing reliable protection for diesel and gasoline engines.',
  liters: '1L',
  category: 'engine',
}
,
{
  id: 'alamoot-sae-50-1l', // unique id
  imgSrc: '/products/engine_oil/50.png',
  title: 'Alamoot SAE 50',
  api: 'API SE/CC',
  desc: 'Monograde engine oil offering reliable lubrication for diesel and gasoline engines.',
  liters: '1L',
  category: 'engine',
}
,


  // --- Gear oils
  {
    id: 'alamoot-85w90',
    imgSrc: '/products/engine_oil/12.png', // replace with real gear path if you have it
    title: 'Alamoot 85W-90',
    api: 'API GL-5',
    desc: 'Durable gear oil for transmissions and axles.',
    liters: "20L",
    category: 'gear',
  },
  {
  id: 'Alamoot 85W-90',
  imgSrc: '/products/engine_oil/06.png',
  title: 'Alamoot 85W-90',
  api: 'API GL-5 / MIL-L-2105 D',
  desc: 'High-performance gear oil for manual transmissions and differentials, ensuring protection under extreme pressure conditions.',
  liters: "20L",
  category: 'gear',
}
,
  {
    id: 'alamoot-85w140',
    imgSrc: '/products/engine_oil/12.png', // placeholder image path
    title: 'Alamoot 85W-140',
    api: 'API GL-5',
    desc: 'Heavy-duty gear oil for transmissions and differentials.',
    liters: "20L",
    category: 'gear',
  },

  // -- GEAR OIL BOTTLE
  {
  id: 'alamoot-sae-85w90-1l',
  imgSrc: '/products/engine_oil/85-90.png',
  title: 'Alamoot SAE 85W-90',
  api: 'API GL-5',
  desc: 'High-performance gear oil providing reliable lubrication for transmissions and axles.',
  liters: '1L',
  category: 'gear',
}

  ,

  // --- Hydraulic oils
  {
    id: 'hydraulic-vg68',
    imgSrc: '/products/engine_oil/02.png',
    title: 'Hydraulic Oil VG68',
    api: 'ISO VG 68',
    desc: 'High-performance hydraulic fluid for smooth, reliable operation.',
    liters: "20L",
    category: 'hydraulic',
  },

  // -- HYDRAULIC OIL BOTTLE
  {
  id: 'alamoot-iso-vg68-1l',
  imgSrc: '/products/engine_oil/68.png',
  title: 'Alamoot ISO VG68',
  api: 'ISO VG68',
  desc: 'High-performance hydraulic oil designed for smooth and efficient operation of hydraulic systems.',
  liters: '1L',
  category: 'hydraulic',
}

];


const TABS: { key: Category | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'engine', label: 'Engine Oils' },
  { key: 'gear', label: 'Gear Oils' },
  { key: 'hydraulic', label: 'Hydraulic Oils' },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<Category | 'all'>('all');
  const [query, setQuery] = useState('');

  const products = useMemo(() => {
    let list = ALL_PRODUCTS;
    if (activeTab !== 'all') list = list.filter(p => p.category === activeTab);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.api.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeTab, query]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Hero */}
      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Our Products
        </h1>
        <p className="mt-3 text-slate-300">
          Engine, Gear, and Hydraulic oils — certified performance for every application.
        </p>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 justify-between">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {TABS.map(t => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key as Category | 'all')}
                className={[
                  'px-4 py-2 rounded-full text-sm font-medium transition border',
                  activeTab === t.key
                    ? 'bg-peakyellow text-slate-900 border-peakyellow'
                    : 'bg-white/5 text-white border-white/10 hover:border-peakyellow/40 hover:text-peakyellow',
                ].join(' ')}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name, API, SAE..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-peakyellow/50"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        {products.length === 0 ? (
          <div className="text-center text-slate-300 py-16">
            No products match your search. Try a different keyword or category.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(p => (
              <ProductCard
                 key={`${p.id}-${p.liters}`}
                imgSrc={p.imgSrc}
                title={p.title}
                api={p.api}
                desc={p.desc}
                liters= {p.liters}
              />
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold">
              Need bulk orders, OEM quotes, or MSDS sheets?
            </h3>
            <p className="text-slate-300 text-sm">
              Our team will help you choose the right grade and arrange delivery.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/+233500010666"
              className="rounded-xl bg-green-500 px-4 py-2 text-white font-medium hover:opacity-90 transition"
            >
              WhatsApp Us
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-white/20 px-4 py-2 text-white font-medium hover:border-peakyellow/50 transition"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
    