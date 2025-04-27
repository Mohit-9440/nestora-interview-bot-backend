import pool from "../config/db";

export const saveQuizAttempt = async (
  userId: string,
  role: string,
  questions: string[]
) => {
  const client = await pool.connect();
  try {
    const query = `
      INSERT INTO quiz_attempts (user_id, role, questions, created_at)
      VALUES ($1, $2, $3, NOW())
    `;
    await client.query(query, [userId, role, JSON.stringify(questions)]);
  } finally {
    client.release();
  }
};
