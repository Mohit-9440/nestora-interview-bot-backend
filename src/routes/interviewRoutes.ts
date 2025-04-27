import express from 'express';
import { askInterviewQuestions } from '../controllers/interviewController';

const router = express.Router();

router.post('/', askInterviewQuestions);

export default router;