import axios from "axios";

export const getRecommendations = (data) =>
  axios.post("http://localhost:5000/api/recommend", data);
