import express from "express";
import { getRecommendations } from " ../services/mlService.js";
import { explain } from "../services/llmService.js";

const router = express.Router();

router.get("/:userId", async (req, res) => {
  const recs = await getRecommendations(req.params.userId);

  const explanation = await explain(
    `Explain recommendations for user ${req.params.userId}`
  );

  res.json({
    user: req.params.userId,
    recommendations: recs,
    explanation
  });
});

export default router;
