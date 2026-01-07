
import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    { title: 'The Ultimate Mermaid Party Guide', excerpt: 'How to create underwater magic with DIY shells and iridescent colors.', tag: 'Mermaid', img: 'https://images.unsplash.com/photo-1502086223501-7ea2443914b1?auto=format&fit=crop&q=80&w=600&h=400' },
    { title: 'Unicorn Dreams: Pastel Styling', excerpt: '5 simple hacks to make your unicorn themed table look like a fairy tale.', tag: 'Unicorn', img: 'https://images.unsplash.com/photo-1496337589254-7e19d01ced44?auto=format&fit=crop&q=80&w=600&h=400' },
    { title: 'Safari Adventure: Go Wild', excerpt: 'Essential printables and decor for the perfect animal explorer party.', tag: 'Safari', img: 'https://images.unsplash.com/photo-1552160753-117159821e01?auto=format&fit=crop&q=80&w=600&h=400' },
    { title: 'Princess Tea Party Essentials', excerpt: 'From lace labels to royal invites, here is everything you need.', tag: 'Princess', img: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=600&h=400' },
    { title: 'Outdoor Picnic Celebration', excerpt: 'Making the most of summer birthdays with comfortable and chic styling.', tag: 'Picnic', img: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=600&h=400' },
    { title: 'Modern Minimalism Parties', excerpt: 'Less is more: how to host a stylish party without the clutter.', tag: 'Minimal', img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600&h=400' },
  ];

  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Party Inspiration</h2>
          <p className="text-gray-500">Tips, tricks, and ideas for your next magical event.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-shadow">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-pink-500 shadow-sm">
                    {post.tag}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-pink-500 transition-colors">{post.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-xs font-bold text-gray-900 border-b border-gray-900 pb-0.5">Read More</span>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 md:p-16 bg-lilac/10 rounded-[3rem] text-center border border-lilac/20">
          <h3 className="text-2xl font-bold mb-4">Get new party ideas weekly</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">Recibe ideas y promociones cada semana en tu correo electrónico.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-full border border-gray-100 focus:outline-none focus:ring-2 focus:ring-lilac transition-all"
            />
            <button className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
