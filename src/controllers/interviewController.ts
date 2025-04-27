import { Request, Response } from "express";
import { generateQuestions } from "../services/openaiService";

export const askInterviewQuestions = async (req: Request, res: Response) => {
  try {
    const { role } = req.body;
    if (!role) {
      return res.status(400).json({ message: "Role is required" });
    }
    const questions = await generateQuestions(role);
    return res.json({ questions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
