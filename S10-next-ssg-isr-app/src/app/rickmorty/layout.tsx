import Link from "next/link";
import { IoHome, IoPlanet, IoSearch } from "react-icons/io5";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-slate-800 hover:text-purple-600 transition"
          >
            API Dashboard
          </Link>
          <div className="flex gap-3">

            <Link
              href="/rickmorty"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-50 text-cyan-700 hover:bg-cyan-500 hover:text-white transition shadow-sm"
            >
              <IoPlanet size={18} />
              <span className="text-sm font-medium">Rick & Morty</span>
            </Link>

            <Link
              href="/rickmorty/search"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 text-purple-700 hover:bg-purple-500 hover:text-white transition shadow-sm"
            >
              <IoSearch size={18} />
              <span className="text-sm font-medium">Buscar</span>
            </Link>

            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-800 hover:text-white transition shadow-sm"
            >
              <IoHome size={18} />
              <span className="text-sm font-medium">Inicio</span>
            </Link>

          </div>

        </div>

      </nav>
      <main className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>

    </div>
  );
}