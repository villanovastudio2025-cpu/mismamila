
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Sarah Miller', quote: 'The Boho Rainbow kit was perfect! It made my daughter\'s 1st birthday so beautiful and cohesive. Truly stress-free.' },
    { name: 'Elena Rodriguez', quote: 'I love how modern the designs are. Not your typical party store stuff. The print quality instructions were super helpful!' },
    { name: 'Jessica Chen', quote: 'Requested a custom space theme and it was ready in 2 days. My son was obsessed with the planet cupcake toppers!' },
    { name: 'Maria Gomez', quote: '¡Increíble atención! Los diseños son preciosos y el proceso fue muy rápido. Altamente recomendados.' },
  ];

  return (
    <section id="reviews" className="py-24 bg-gray-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">Happy Hosts</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="flex text-peach mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">"{r.quote}"</p>
              <div className="mt-auto">
                <p className="text-sm font-bold text-gray-900">{r.name}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Verified Host</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
