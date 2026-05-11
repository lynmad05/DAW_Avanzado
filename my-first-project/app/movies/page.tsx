import axios from 'axios'
import SearchMovies from './SearchMovies'

async function getHeroMovies() {
  const res = await axios.get('https://www.omdbapi.com/?apikey=f1def80d&s=avengers')
  return res.data.Search?.slice(0, 6) || []
}

export default async function MovieGallery() {
  const popular = await getHeroMovies()

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-purple-500">
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-[#0f0f0f] z-10"></div>
        <div className="container mx-auto px-8 pt-20 relative z-20">
          <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-4 backdrop-blur-md">
            🔥 TECNOLOGÍA SSR ACTIVA
          </span>
          <h1 className="text-7xl font-black mb-4 tracking-tighter">
            CINE<span className="text-purple-600">NEXT</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-lg">
            Explora las mejores producciones de Marvel y más. Esta sección fue renderizada 
            totalmente en el servidor para un rendimiento máximo.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-8 -mt-20 relative z-30 space-y-16 pb-20">
        {/* Carrusel SSR */}
        <section>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
            <div className="w-1 h-6 bg-purple-600"></div>
            Tendencias de Avengers (SSR)
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
            {popular.map((m: any) => (
              <div key={m.imdbID} className="min-w-[200px] group cursor-default">
                <div className="relative overflow-hidden rounded-2xl aspect-[2/3]">
                  <img src={m.Poster} alt={m.Title} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="mt-3 font-semibold text-sm truncate">{m.Title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-10 border-t border-white/5">
          <div className="mb-10">
            <h2 className="text-3xl font-black mb-2 text-center">Buscador Inteligente (CSR)</h2>
            <p className="text-gray-500 text-center">Interactividad dinámica sin recargas</p>
          </div>
          <SearchMovies />
        </section>
      </div>
    </div>
  )
}