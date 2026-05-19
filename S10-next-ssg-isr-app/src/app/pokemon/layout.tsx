import { ReactNode } from "react";
import { Metadata } from "next";
import { IoGameController } from "react-icons/io5";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokédex - Next.js",
  description: "Explora el mundo Pokémon",
};

interface PokemonLayoutProps {
  children: ReactNode;
}

export default function PokemonLayout({ children }: PokemonLayoutProps) {
  return (
    <div className="min-h-screen bg-linear-to-br to-purple-900">
      <nav className="bg-white bg-opacity-30 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
           {/* LOGO / HOME */}
          <Link
            href="/"
            className="text-lg font-bold text-slate-800 hover:text-purple-600 transition"
          >
            Dashboard
          </Link>
        </div>
      </nav>
      {children}
    </div>
    
  );
}
