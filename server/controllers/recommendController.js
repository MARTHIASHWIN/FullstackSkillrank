import { runML } from " ../services/mlService.js";
import { explain } from "../services/llmService.js";

export const getRecommendations = async (req, res) => {
  const { userId, query } = req.body;

  const products = await runML(userId, query);
  const explanation = await explain(products);

  res.json({
    user: userId
      ? {
          id: userId,
          orders: 12,
          spent: 34560,
          preference: "Mid-to-premium brands"
        }
      : null,
    products,
    explanation
  });
};
