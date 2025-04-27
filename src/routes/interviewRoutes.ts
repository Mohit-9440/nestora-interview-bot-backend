import { Router, Request, Response } from "express";
import { askInterviewQuestions } from "../controllers/interviewController";

const router: Router = Router();

router.post("/", askInterviewQuestions);

export default router;
