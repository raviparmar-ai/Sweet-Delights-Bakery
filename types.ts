
export interface CakeProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface RecommendationRequest {
  occasion: string;
  favoriteFlavors: string;
  dietaryRestrictions: string;
  guestCount: number;
}

export interface AIRecResponse {
  cakeName: string;
  description: string;
  pairingSuggestion: string;
  estimatedPriceRange: string;
}
