import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.together.xyz/v1", // ✅ Important change for Together.ai
});

export const generateQuestions = async (role: string) => {
  const prompt = `Generate 5 tricky interview questions for a ${role} developer.`;

  const response = await openai.chat.completions.create({
    model: "mistralai/Mixtral-8x7B-Instruct-v0.1", // Together.ai model
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 500,
  });

  const questions = response.choices[0]?.message?.content
    ?.split("\n")
    .filter((q) => q.trim() !== "");

  return questions || [];
};
