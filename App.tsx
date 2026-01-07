
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Packages from './components/Packages';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden min-h-screen selection:bg-pink-100">
      {/* Background Animated Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-aqua opacity-5 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-lilac opacity-5 blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-peach opacity-5 blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        
        {/* Confetti-like dots */}
        <div className="confetti-dot bg-pink" style={{ top: '10%', left: '15%' }}></div>
        <div className="confetti-dot bg-aqua" style={{ top: '30%', left: '85%' }}></div>
        <div className="confetti-dot bg-lilac" style={{ top: '70%', left: '10%' }}></div>
        <div className="confetti-dot bg-peach" style={{ top: '85%', left: '90%' }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <Packages />
          <Shop />
          <Gallery />
          <Blog />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Floating Action Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-white text-gray-800 rounded-full shadow-lg border border-gray-100 hover:shadow-xl transition-all active:scale-95 flex items-center justify-center"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default App;
