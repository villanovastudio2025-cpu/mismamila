
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 italic leading-tight">Let's create something <span className="text-aqua">magical</span> together.</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-md">Ready to start planning? Tell us about your vision and we will get back to you with a quote in no time.</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-400 shadow-sm border border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Us</p>
                  <p className="text-gray-900 font-medium">hello@misscamilastudio.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-500 shadow-sm border border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">WhatsApp</p>
                  <a href="#" className="text-gray-900 font-medium hover:text-green-600 transition-colors">Chat with Camila</a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white/50 border border-gray-100 rounded-2xl text-[11px] text-gray-500 italic">
              Business documentation for LA VILLA NOVA LLC available upon request. We prioritize transparency and security in all our transactions.
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Name</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-pink-200 focus:outline-none transition-all" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-pink-200 focus:outline-none transition-all" placeholder="jane@example.com" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Event Theme</label>
                  <input type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-pink-200 focus:outline-none transition-all" placeholder="e.g. Space Safari" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Event Date</label>
                  <input type="date" className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-pink-200 focus:outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">What do you need?</label>
                <select className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-pink-200 focus:outline-none transition-all appearance-none">
                  <option>Select a service...</option>
                  <option>Custom Party Theme</option>
                  <option>Full Printable Party Kit</option>
                  <option>Digital Invites Only</option>
                  <option>Other / Special Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Message</label>
                <textarea rows={4} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-pink-200 focus:outline-none transition-all resize-none" placeholder="Tell us more about your event..."></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                Send Inquiry / Cotiza aquí
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
