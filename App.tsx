
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AIRecommender from './components/AIRecommender';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* About Section Teaser */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="relative">
                   <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800" 
                    alt="Chef baking" 
                    className="rounded-3xl shadow-2xl z-10 relative h-[400px] w-full object-cover"
                  />
                  <div className="absolute -top-8 -right-8 w-48 h-48 bg-pink-100 rounded-full -z-0"></div>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl font-bold text-gray-900 serif">Baked with Passion, <br/>Served with Love</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded in a small kitchen with a big dream, Sweet Delights has grown into Gourmet Valley's most beloved artisan bakery. We believe that every cake should be as unique as the person it's for.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <h4 className="text-3xl font-bold text-pink-600">50+</h4>
                    <p className="text-sm text-gray-500 font-medium uppercase">Unique Flavors</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-pink-600">10k+</h4>
                    <p className="text-sm text-gray-500 font-medium uppercase">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid />
        
        <AIRecommender />

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-16 serif italic text-gray-800">"The best cakes we've ever tasted. The designs are literally works of art."</h2>
            <div className="flex flex-col items-center">
              <img 
                src="https://picsum.photos/80/80" 
                alt="Client" 
                className="w-20 h-20 rounded-full border-4 border-pink-50 mb-4"
              />
              <p className="font-bold text-gray-900">Sarah & Michael Jenkins</p>
              <p className="text-gray-500 text-sm">Wedding Clients, 2023</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
