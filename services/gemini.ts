import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ideally this comes from process.env, but we will use the injected variable
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are the AI Assistant for Jereh Group, a global integrated solutions provider in the energy and environmental sectors. 
        
        Key Company Info:
        - Founded in Yantai, China.
        - Publicly listed (SZ 002353).
        - Services: Oil & Gas Engineering, Equipment Manufacturing, Environmental Management, New Energy.
        - Core Values: Focus on customer challenges, provide competitive solutions.
        - Global presence in 70+ countries.
        
        Tone: Professional, helpful, corporate, yet approachable.
        Goal: Assist visitors with information about Jereh's products, services, and investor relations.
        
        Keep answers concise (under 150 words unless asked for details).`,
      },
      history: history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server. Please try again later.";
  }
};