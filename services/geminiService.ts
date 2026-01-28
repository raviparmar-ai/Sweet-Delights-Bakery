
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendationRequest, AIRecResponse } from "../types";

export const getCakeRecommendation = async (req: RecommendationRequest): Promise<AIRecResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Act as a master pâtissier. Based on the following preferences, recommend a unique, artisanal cake:
  Occasion: ${req.occasion}
  Favorite Flavors: ${req.favoriteFlavors}
  Dietary Restrictions: ${req.dietaryRestrictions}
  Guest Count: ${req.guestCount}
  
  Provide the recommendation in a professional and enticing way.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          cakeName: { type: Type.STRING },
          description: { type: Type.STRING },
          pairingSuggestion: { type: Type.STRING },
          estimatedPriceRange: { type: Type.STRING },
        },
        required: ["cakeName", "description", "pairingSuggestion", "estimatedPriceRange"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");
  
  return JSON.parse(text) as AIRecResponse;
};
