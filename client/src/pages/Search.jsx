import { useState } from "react";
import api from "../services/api";

export default function Search() {
  const [q, setQ] = useState("");
  const [res, setRes] = useState(null);

  const submit = async () => {
    const r = await api.post("/search", { query: q });
    setRes(r.data);
  };

  return (
    <>
      <input onChange={e => setQ(e.target.value)} />
      <button onClick={submit}>Search</button>
      {res && <p>{res.explanation}</p>}
    </>
  );
}
