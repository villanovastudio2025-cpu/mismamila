
import React from 'react';

const Packages: React.FC = () => {
  const packages = [
    {
      name: 'Starter Theme',
      desc: 'Perfect for quick & beautiful digital invites and key elements.',
      price: 'Starting at $45',
      turnaround: '24-48 Hours',
      features: ['1 Custom Invitation', 'Color Palette Guide', 'Welcome Sign Design', 'Basic Thank You Tag', '1 Revision'],
      highlighted: false
    },
    {
      name: 'Full Party Kit',
      desc: 'The complete printable solution for a coordinated celebration.',
      price: 'Starting at $95',
      turnaround: '3-5 Business Days',
      features: ['Everything in Starter', 'Cupcake Toppers (6 sets)', 'Water Bottle Labels', 'Food Tent Cards', 'Happy Birthday Banner', '3 Revisions'],
      highlighted: true
    },
    {
      name: 'Signature Experience',
      desc: 'Bespoke design, full styling guide, and premium assets.',
      price: 'Starting at $180',
      turnaround: '7-10 Business Days',
      features: ['Everything in Full Kit', 'Custom Backdrop (Large)', 'Menu & Table Styling Guide', 'Social Media Graphics', 'Priority Support', 'Unlimited Revisions'],
      highlighted: false
    }
  ];

  return (
    <section id="packages" className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Celebration Packages</h2>
          <p className="text-gray-500">Pick the level of magic that fits your needs.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-10 rounded-[2.5rem] bg-white transition-all duration-300 ${pkg.highlighted ? 'ring-2 ring-pink-400 shadow-2xl scale-105 z-10' : 'border border-gray-100 shadow-lg'}`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-400 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm">{pkg.desc}</p>
              </div>
              
              <div className="mb-8">
                <div className="text-3xl font-bold text-gray-900">{pkg.price}</div>
                <div className="text-xs font-medium text-pink-500 mt-1 uppercase tracking-wider">{pkg.turnaround} Turnaround</div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((f, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-aqua mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded-full font-bold text-center transition-all ${pkg.highlighted ? 'bg-pink-400 text-white hover:bg-pink-500 shadow-lg' : 'bg-gray-50 text-gray-800 hover:bg-gray-100'}`}
              >
                Get Started / <span className="text-[10px] font-normal">Cotiza</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
