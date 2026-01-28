
import React, { useState } from 'react';
import { getCakeRecommendation } from '../services/geminiService';
import { RecommendationRequest, AIRecResponse } from '../types';

const AIRecommender: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIRecResponse | null>(null);
  const [formData, setFormData] = useState<RecommendationRequest>({
    occasion: 'Birthday',
    favoriteFlavors: '',
    dietaryRestrictions: 'None',
    guestCount: 10
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const rec = await getCakeRecommendation(formData);
      setResult(rec);
    } catch (err) {
      console.error(err);
      alert("Something went wrong with our Sweet AI. Please try again later!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-assistant" className="py-24 bg-pink-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-pink-100">
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 bg-pink-600 p-10 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 serif">Sweet AI Assistant</h2>
              <p className="opacity-90 leading-relaxed mb-6">
                Tell us about your event, and our AI Master Pastry Chef will design a unique cake just for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">1</div>
                  <span>Select Occasion</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">2</div>
                  <span>Choose Flavors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">3</div>
                  <span>Get AI Design</span>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3 p-10">
              {!result ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">The Occasion</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none transition"
                      value={formData.occasion}
                      onChange={(e) => setFormData({...formData, occasion: e.target.value})}
                    >
                      <option>Birthday</option>
                      <option>Wedding</option>
                      <option>Anniversary</option>
                      <option>Baby Shower</option>
                      <option>Corporate Event</option>
                      <option>Just Because</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Flavor Preferences</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Chocolate, Raspberry, Hazelnut"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none transition"
                      value={formData.favoriteFlavors}
                      onChange={(e) => setFormData({...formData, favoriteFlavors: e.target.value})}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Guest Count</label>
                      <input 
                        type="number" 
                        min="1"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none transition"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({...formData, guestCount: parseInt(e.target.value)})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Dietary Needs</label>
                      <select 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 outline-none transition"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
                      >
                        <option>None</option>
                        <option>Vegan</option>
                        <option>Gluten Free</option>
                        <option>Dairy Free</option>
                        <option>Nut Free</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    disabled={loading}
                    className="w-full bg-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-pink-700 transition flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Brewing Recommendations...
                      </>
                    ) : (
                      "Generate My Custom Cake"
                    )}
                  </button>
                </form>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{result.cakeName}</h3>
                      <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">Your AI Recommendation</span>
                    </div>
                    <button 
                      onClick={() => setResult(null)}
                      className="text-gray-400 hover:text-pink-600 transition"
                    >
                      Reset
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm uppercase tracking-wider mb-2">Flavor Profile & Design</h4>
                      <p className="text-gray-600 leading-relaxed italic border-l-4 border-pink-200 pl-4">
                        "{result.description}"
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-pink-50 p-4 rounded-2xl">
                        <h4 className="font-bold text-pink-700 text-xs uppercase tracking-wider mb-1">Drink Pairing</h4>
                        <p className="text-gray-700 text-sm">{result.pairingSuggestion}</p>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-2xl">
                        <h4 className="font-bold text-pink-700 text-xs uppercase tracking-wider mb-1">Estimated Price</h4>
                        <p className="text-gray-700 text-sm">{result.estimatedPriceRange}</p>
                      </div>
                    </div>

                    <button className="w-full border-2 border-pink-600 text-pink-600 py-3 rounded-xl font-bold hover:bg-pink-600 hover:text-white transition">
                      Consult with a Baker about this Design
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRecommender;
