import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0B0F19] text-white">
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-purple-500/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-8 py-20">
        <header className="mb-16 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Modern API Explorer
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Arquitectura híbrida con Next.js App Router: SSR, SSG, ISR y CSR integrados en una experiencia moderna.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-10">
          <Link href="/pokemon">
            <article className="group relative p-[1px] rounded-3xl bg-gradient-to-r from-yellow-400/40 to-orange-500/40">

              <div className="h-full rounded-3xl bg-[#111827]/90 backdrop-blur-xl p-10 transition duration-300 group-hover:scale-[1.02]">

                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold text-yellow-400">
                    Pokédex Engine
                  </h2>

                  <span className="text-xs text-gray-400">
                    SSG / ISR
                  </span>
                </div>

                <p className="text-gray-300 mt-6 leading-relaxed">
                  Sistema de exploración de Pokémon con generación estática,
                  revalidación incremental y optimización de imágenes.
                </p>

                <div className="mt-10 text-sm text-yellow-300 opacity-80 group-hover:opacity-100 transition">
                  Acceder al sistema →
                </div>

              </div>

            </article>
          </Link>
          <Link href="/rickmorty">
            <article className="group relative p-[1px] rounded-3xl bg-gradient-to-r from-cyan-400/40 to-blue-500/40">

              <div className="h-full rounded-3xl bg-[#111827]/90 backdrop-blur-xl p-10 transition duration-300 group-hover:scale-[1.02]">

                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold text-cyan-300">
                    Character System
                  </h2>

                  <span className="text-xs text-gray-400">
                    SSR / CSR / ISR
                  </span>
                </div>

                <p className="text-gray-300 mt-6 leading-relaxed">
                  Consumo avanzado de API con renderizado híbrido, búsqueda en tiempo real
                  y rutas dinámicas generadas automáticamente.
                </p>

                <div className="mt-10 text-sm text-cyan-300 opacity-80 group-hover:opacity-100 transition">
                  Explorar personajes →
                </div>
              </div>
            </article>
          </Link>
        </section>
      </div>
    </main>
  );
}