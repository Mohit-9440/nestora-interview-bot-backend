import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateQuestions = async (role: string) => {
  const prompt = `Generate 5 tough interview questions for a ${role} role.`;
  
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  const content = completion.data.choices[0]?.message?.content || "";
  return content.split('\n').filter(q => q.trim() !== '');
};