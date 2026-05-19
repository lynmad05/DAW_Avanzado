import Link from "next/link";
import { PokemonListResponse, SimplePokemon } from "../../types/pokemon";
import { IoAdd, IoGameController, IoList } from "react-icons/io5";
import { IoMdList } from "react-icons/io";
import Image from "next/image";

async function getPokemons(): Promise<SimplePokemon[]> {

  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151", {
    next: { revalidate: 86400 }, // Revalida cada 24 horas
  });
 // throw new Error("Error de prueba");

  if (!res.ok) throw new Error("Error al cargar pokémon");

  const data: PokemonListResponse = await res.json();

  return data.results.map((pokemon, index) => ({
    name: pokemon.name,
    id: index + 1,
  }));
}

export default async function PokemonList() {
  const pokemons = await getPokemons();

  return (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 p-8">

    <div className="max-w-6xl mx-auto">

      <h1 className="text-5xl font-extrabold text-center text-yellow-600 mb-12 drop-shadow">
        ⚡ Pokédex
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {pokemons.map((pokemon) => (
          <Link
            key={pokemon.name}
            href={`/pokemon/${pokemon.name}`}
            className="group"
          >
            <div className="bg-white rounded-3xl shadow-md p-5 text-center border border-yellow-100
              hover:shadow-xl hover:scale-105 transition duration-300">

              <Image
                width={120}
                height={120}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                alt={pokemon.name}
                className="mx-auto group-hover:scale-110 transition"
              />

              <h2 className="text-lg font-bold capitalize text-gray-700 mt-3 group-hover:text-yellow-600">
                {pokemon.name}
              </h2>

              <p className="text-sm text-gray-400">
                #{pokemon.id.toString().padStart(3, "0")}
              </p>

            </div>
          </Link>
        ))}

      </div>
    </div>
  </div>
);
}
