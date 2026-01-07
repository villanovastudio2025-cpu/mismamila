
import React from 'react';
import { Icons } from '../constants';

const Services: React.FC = () => {
  const services = [
    { 
      title: 'Custom Party Theme Design', 
      desc: 'Concept, palette, and style guide tailored to your unique vision.',
      icon: <Icons.Wand />
    },
    { 
      title: 'Printable Party Kits', 
      desc: 'All-in-one sets: banners, toppers, tags, and more.',
      icon: <Icons.Checklist />
    },
    { 
      title: 'Invitations (Editable)', 
      desc: 'Digital or printable invites that set the perfect tone.',
      icon: <Icons.Star />
    },
    { 
      title: 'Stickers & Labels', 
      desc: 'Personalized designs for favors, water bottles, and packaging.',
      icon: <Icons.Balloon />
    },
    { 
      title: 'Welcome Signs & Backdrops', 
      desc: 'Large format designs for grand entrances and photo ops.',
      icon: <Icons.Shield />
    },
    { 
      title: 'Party Food & Styling', 
      desc: 'Simple styling guides and menu ideas to match your theme.',
      icon: <Icons.Cake />
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Magic Services</h2>
          <p className="text-gray-500">From concept to printable, we handle the aesthetics so you can focus on the celebration.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-8 bg-cream border border-gray-100 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-pink-400 shadow-sm mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.desc}</p>
              <a href="#contact" className="inline-flex items-center text-sm font-bold text-gray-900 group">
                Get a Quote 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
