
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-party-gradient">
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <div className="inline-block px-4 py-1.5 mb-6 bg-white/50 border border-pink-100 rounded-full">
            <span className="text-xs font-bold tracking-widest text-pink-500 uppercase">Magical Memories Start Here</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
            Elegant Party Design & <span className="text-pink-400 italic">Printables</span> for Kids Celebrations
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Custom themes, printables, decor assets, and party food styling ideas—made to feel premium, cozy, and joyful. Make your child's big day unforgettable with minimal stress.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#shop" className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Shop Printables / <span className="text-xs font-normal opacity-70">Compra ahora</span>
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-sm">
              Request a Custom Party
            </a>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1200&h=800" 
              alt="Joyful children party setup" 
              className="w-full object-cover aspect-[4/3]"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-peach/30 rounded-full blur-2xl z-0"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-aqua/30 rounded-full blur-2xl z-0"></div>
          <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-2xl shadow-xl z-20 hidden sm:block border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">50+ Unique Themes</p>
                <p className="text-[10px] text-gray-500 italic">Updated every week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wavy-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.15,116.14,105.81,173.84,95.52,230.14,85.45,283.56,72,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
