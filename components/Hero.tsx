
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-pink-50 rounded-bl-[100px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold tracking-wide uppercase">
              Artisan Bakery Since 2012
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Baking Moments of <span className="text-pink-600 italic">Pure Joy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Handcrafted with love, our cakes are designed to make your celebrations unforgettable. Experience the magic of authentic flavors and artistic designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="bg-pink-600 text-white px-8 py-4 rounded-full text-center font-bold hover:bg-pink-700 transition shadow-xl shadow-pink-200">
                Explore Our Collection
              </a>
              <a href="#ai-assistant" className="bg-white border-2 border-pink-200 text-pink-600 px-8 py-4 rounded-full text-center font-bold hover:bg-pink-50 transition">
                Find Your Perfect Match
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800" 
                alt="Delicious Wedding Cake" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block border border-pink-100">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900">100% Organic</p>
                  <p className="text-sm text-gray-500">Premium Ingredients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
