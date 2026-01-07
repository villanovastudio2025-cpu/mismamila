
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: 'How does the process work?', 
      a: 'After you pick a package or request a custom theme, we send you a questionnaire to understand your vision. Within 24-48h for starters or 3-7 days for full kits, you receive your high-resolution files via email.' 
    },
    { 
      q: 'What do I receive (PDF/PNG/JPG)?', 
      a: 'You will receive high-quality (300dpi) PDF files ready for professional printing, as well as PNG/JPG versions for digital sharing or web use.' 
    },
    { 
      q: 'Can you match any theme?', 
      a: 'Absolutely! Whether it is a niche animal, a specific book character, or a color-focused concept, we love creating unique themes from scratch.' 
    },
    { 
      q: 'Do you offer personalization?', 
      a: 'Yes, most of our printables include personalization for the name, age, and event details. Our "Editable" shop items come with fields you can fill yourself.' 
    },
    { 
      q: 'Turnaround times?', 
      a: 'Digital Shop items are instant. Custom Starter themes take 24-48 hours. Full Party Kits usually take 3-5 business days depending on revisions.' 
    },
    { 
      q: 'Can you help with food & styling ideas?', 
      a: 'Yes! Our Full and Signature packages include a styling guide with menu ideas, table setup sketches, and simple recipes that match your theme.' 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-gray-900">{faq.q}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 text-pink-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[500px] p-6 pt-0 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-6">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
