import express from "express";
import { explain } from "../services/llmService.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const q = req.body.query;

  const explanation = await explain(
    `User query: ${q}. Interpret intent and suggest products.`
  );

  res.json({
    query: q,
    results: ["MacBook Air M2", "Dell XPS 13"],
    explanation
  });
});

export default router;
