export default function SearchBar({ onSearch }) {
  return (
    <input
      placeholder="Search like: laptops for programming under 60k"
      onKeyDown={(e) => {
        if (e.key === "Enter") onSearch(e.target.value);
      }}
    />
  );
}
