
import React from 'react';
import { CakeProduct } from '../types';

const PRODUCTS: CakeProduct[] = [
  {
    id: '1',
    name: 'Velvet Dream',
    description: 'Our signature red velvet with silk cream cheese frosting.',
    price: 45,
    category: 'Classic',
    imageUrl: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Tuscan Lemon',
    description: 'Refreshing citrus sponge with home-made lemon curd.',
    price: 38,
    category: 'Seasonal',
    imageUrl: 'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Midnight Forest',
    description: 'Dark chocolate layers with black cherries and kirsch.',
    price: 52,
    category: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1606313564059-395984aa1517?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Rose Pistachio',
    description: 'Delicate floral notes with premium ground pistachios.',
    price: 48,
    category: 'Signature',
    imageUrl: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=400'
  }
];

const ProductGrid: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Masterpieces</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our most loved creations, each crafted with the finest ingredients and a touch of magic.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((cake) => (
            <div key={cake.id} className="group bg-white rounded-2xl overflow-hidden border border-pink-50 hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={cake.imageUrl} 
                  alt={cake.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-pink-600 uppercase tracking-wider">
                  {cake.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cake.name}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{cake.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">${cake.price}</span>
                  <button className="p-2 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
