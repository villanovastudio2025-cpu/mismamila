
import React from 'react';
import { Icons } from '../constants';

const TrustBar: React.FC = () => {
  const items = [
    { title: 'Print-Ready Files', icon: <Icons.Download />, desc: 'High-res PDF & PNG' },
    { title: 'Custom Themes', icon: <Icons.Wand />, desc: 'Made just for you' },
    { title: 'Fast Turnaround', icon: <Icons.Star />, desc: '24-48h delivery' },
    { title: 'Secure Checkout', icon: <Icons.Shield />, desc: 'Safe & trusted' },
  ];

  return (
    <section className="bg-white py-12 border-b border-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
              <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-pink-50 transition-colors duration-300">
                <span className="text-gray-400 group-hover:text-pink-400 transition-colors">
                  {item.icon}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
