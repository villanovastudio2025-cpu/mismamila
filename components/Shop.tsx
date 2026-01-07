
import React from 'react';

const Shop: React.FC = () => {
  const products = [
    { id: '1', title: 'Boho Rainbow Kit', desc: 'Warm earth tones & soft arcs', price: '$12.00', img: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&q=80&w=600&h=600' },
    { id: '2', title: 'Space Explorer Set', desc: 'Galactic blues & shiny stars', price: '$15.00', img: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=600&h=600' },
    { id: '3', title: 'Garden Fairy Bundle', desc: 'Floral magic & pastel greens', price: '$14.50', img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=600&h=600' },
    { id: '4', title: 'Classic Circus Fun', desc: 'Primary colors & playful vibes', price: '$10.00', img: 'https://images.unsplash.com/photo-1533282960533-51328aa49826?auto=format&fit=crop&q=80&w=600&h=600' },
    { id: '5', title: 'Dino Safari Kit', desc: 'Rawr-some greens & textures', price: '$18.00', img: 'https://images.unsplash.com/photo-1552160753-117159821e01?auto=format&fit=crop&q=80&w=600&h=600' },
    { id: '6', title: 'Little Mermaid Day', desc: 'Iridescent scales & ocean sea', price: '$16.00', img: 'https://images.unsplash.com/photo-1502086223501-7ea2443914b1?auto=format&fit=crop&q=80&w=600&h=600' },
    { id: '7', title: 'Sweet Tea Party', desc: 'Lace, porcelain, & pink roses', price: '$12.00', img: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=600&h=600' },
    { id: '8', title: 'Art Studio Splash', desc: 'Bright colors & creative mess', price: '$13.00', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600&h=600' },
  ];

  return (
    <section id="shop" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Printable Shop</h2>
            <p className="text-gray-500">Instant downloads for your last-minute celebration needs. Print as many as you need at home or your local shop.</p>
          </div>
          <a 
            href="https://gumroad.com/misscamilastudio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all flex items-center gap-2 group whitespace-nowrap"
          >
            Visit Our Shop
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((p) => (
            <div key={p.id} className="group flex flex-col">
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-pink-500 uppercase tracking-tight shadow-sm">
                  Instant Download
                </div>
              </div>
              <div className="flex-grow px-1">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-pink-500 transition-colors">{p.title}</h3>
                <p className="text-xs text-gray-500 mt-1 mb-3">{p.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-sm font-bold text-gray-900">{p.price}</span>
                  <button className="px-4 py-1.5 bg-gray-50 text-xs font-bold rounded-full hover:bg-pink-100 hover:text-pink-500 transition-all">
                    Buy / <span className="font-normal opacity-70">Comprar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
