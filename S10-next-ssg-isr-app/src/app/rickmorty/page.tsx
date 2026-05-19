import Link from "next/link";

async function getCharacters() {
  const res = await fetch(
    "https://rickandmortyapi.com/api/character/",
    { cache: "force-cache" }
  );

  return res.json();
}

export default async function Page() {
  const data = await getCharacters();

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Rick & Morty Characters
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {data.results.map((char: any) => (
          <Link
            key={char.id}
            href={`/rickmorty/character/${char.id}`}
          >

            <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-3 text-center">

              <img
                src={char.image}
                loading="lazy"
                className="rounded-xl mx-auto"
              />

              <h2 className="font-bold mt-2 text-purple-700">
                {char.name}
              </h2>

              <p className="text-sm text-gray-500">
                {char.species}
              </p>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}