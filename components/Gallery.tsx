
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=400&h=600', span: 'row-span-2' },
    { url: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&q=80&w=400&h=300', span: '' },
    { url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=400&h=300', span: '' },
    { url: 'https://images.unsplash.com/photo-1496337589254-7e19d01ced44?auto=format&fit=crop&q=80&w=400&h=300', span: '' },
    { url: 'https://images.unsplash.com/photo-1476332229445-87f5d32439ec?auto=format&fit=crop&q=80&w=400&h=600', span: 'row-span-2' },
    { url: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&q=80&w=400&h=300', span: '' },
    { url: 'https://images.unsplash.com/photo-1525268771113-32d9e9020a97?auto=format&fit=crop&q=80&w=400&h=300', span: '' },
    { url: 'https://images.unsplash.com/photo-1549412172-13b3534f3780?auto=format&fit=crop&q=80&w=400&h=300', span: '' },
    { url: 'https://images.unsplash.com/photo-1558636508-e0ee95644583?auto=format&fit=crop&q=80&w=400&h=400', span: 'col-span-2' },
  ];

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">Celebration Gallery</h2>
          <p className="text-gray-500">Made with love for birthdays, baby showers, and family gatherings.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
          {images.map((img, idx) => (
            <div key={idx} className={`${img.span} relative rounded-3xl overflow-hidden group shadow-sm`}>
              <img 
                src={img.url} 
                alt={`Party setup ${idx}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
