import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-10 text-center">

      <h1 className="text-4xl font-bold">404</h1>
      <p>Personaje no encontrado</p>

      <Link href="/rickmorty" className="text-blue-500">
        Volver
      </Link>

    </div>
  );
}