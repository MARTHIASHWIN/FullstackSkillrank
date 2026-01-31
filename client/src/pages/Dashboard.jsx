import { useEffect, useState } from "react";
import { getRecommendations } from "../services/api";
import UserCard from "../components/UserCard";
import RecommendationCard from "../components/RecommendationCard";
import SearchBar from "../components/SearchBar";

export default function Dashboard() {
  const [data, setData] = useState(null);

  const loadData = async (query = null) => {
    const res = await getRecommendations({
      userId: 1234,
      query
    });
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Recommendation Dashboard</h2>

      <SearchBar onSearch={loadData} />

      <UserCard user={data.user} />

      <h3>Top Recommendations</h3>
      {data.products.map((p, i) => (
        <RecommendationCard key={i} product={p} />
      ))}

      <h4>Why these?</h4>
      <p>{data.explanation}</p>
    </div>
  );
}
