"use client";

import { useEffect, useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      const data = await res.json();
      setResults(data.results || []);
    };

    fetchData();
  }, [query]);

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        Buscar personaje
      </h1>

      <input
        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-300"
        placeholder="Escribe un nombre..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4 mt-6">

        {results.map((c: any) => (
          <div
            key={c.id}
            className="bg-white rounded-xl p-3 shadow hover:shadow-lg"
          >
            <img src={c.image} loading="lazy" className="rounded-lg" />
            <p className="text-center font-semibold text-purple-600">
              {c.name}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}