import { Request, Response } from 'express';
import { generateQuestions } from '../services/openaiService';

export const askInterviewQuestions = async (req: Request, res: Response) => {
  const { role } = req.body;
  
  if (!role) return res.status(400).json({ message: "Role is required" });

  try {
    const questions = await generateQuestions(role);
    res.json({ questions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch questions" });
  }
};