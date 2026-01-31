export default function UserCard({ user }) {
  if (!user) return <p>New User (Cold Start)</p>;

  return (
    <div>
      <h3>User #{user.id}</h3>
      <p>Orders: {user.orders}</p>
      <p>Total Spent: ₹{user.spent}</p>
      <p>Preference: {user.preference}</p>
    </div>
  );
}
