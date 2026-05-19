import Link from "next/link";

async function getCharacter(id: string) {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    { next: { revalidate: 864000 } }
  );

  if (!res.ok) throw new Error("Error cargando personaje");

  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const character = await getCharacter(id);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center p-6">

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border">
        <div className="relative bg-gradient-to-r from-indigo-500 to-cyan-500 p-8 text-white">

          <h1 className="text-4xl font-bold">
            {character.name}
          </h1>

          <p className="opacity-80 mt-1">
            Rick & Morty Character Profile
          </p>
          <div className="absolute top-6 right-6">
            <span className="px-4 py-1 rounded-full text-sm bg-white/20 backdrop-blur">
              {character.status}
            </span>
          </div>

        </div>
        <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="p-2 rounded-2xl bg-gradient-to-tr from-indigo-200 to-cyan-200">
              <img
                src={character.image}
                className="rounded-xl w-56 h-56 object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-4 text-gray-700">

            <div>
              <p className="text-sm text-gray-400">Species</p>
              <p className="font-semibold text-lg">{character.species}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Gender</p>
              <p className="font-semibold text-lg">{character.gender}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Origin</p>
              <p className="font-semibold text-lg">
                {character.origin.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-semibold text-lg">
                {character.location.name}
              </p>
            </div>

          </div>

        </div>
        <div className="p-6 bg-gray-50 border-t flex justify-between items-center">

          <Link
            href="/rickmorty"
            className="text-indigo-600 font-medium hover:underline"
          >
            ← Volver
          </Link>

          <span className="text-xs text-gray-400">
            ID: {character.id}
          </span>

        </div>

      </div>

    </main>
  );
}