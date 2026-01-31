export default function RecommendationCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", marginBottom: 10, padding: 10 }}>
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <small>{product.reason}</small>
    </div>
  );
}
