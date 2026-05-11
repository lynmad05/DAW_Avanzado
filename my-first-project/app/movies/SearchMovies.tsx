'use client'
import { useState } from 'react'
import axios from 'axios'

export default function SearchMovies() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [selected, setSelected] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query) return
    setLoading(true)
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=f1def80d&s=${query}`)
      setResults(res.data.Search || [])
    } finally {
      setLoading(false)
    }
  }

  const showDetails = async (id: string) => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=f1def80d&i=${id}`)
    setSelected(res.data)
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca títulos, actores o géneros..." 
          className="w-full p-4 pl-6 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all shadow-lg"
        />
        <button className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
          {loading ? '...' : 'Buscar'}
        </button>
      </form>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {results.map((m: any) => (
          <div 
            key={m.imdbID} 
            onClick={() => showDetails(m.imdbID)}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-2xl transition-all hover:-translate-y-2"
          >
            <img src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/300x450?text=Sin+Poster'} 
                 alt={m.Title} className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
              <p className="text-white font-bold text-sm truncate">{m.Title}</p>
              <p className="text-purple-400 text-xs">{m.Year}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-gray-900 border border-white/10 rounded-3xl max-w-4xl w-full overflow-hidden flex flex-col md:flex-row shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button onClick={() => setSelected(null)} className="absolute top-4 right-6 text-3xl text-white/50 hover:text-white z-10">&times;</button>
            
            <div className="md:w-1/3">
              <img src={selected.Poster} className="w-full h-full object-cover" alt="Poster" />
            </div>
            
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <span className="text-purple-500 font-bold tracking-widest text-xs uppercase mb-2">Detalles de la película</span>
              <h2 className="text-4xl font-black text-white mb-2">{selected.Title}</h2>
              <div className="flex gap-3 mb-4 text-sm font-semibold">
                <span className="text-green-400">{selected.imdbRating} IMDB</span>
                <span className="text-gray-400">{selected.Year}</span>
                <span className="text-gray-400">{selected.Runtime}</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{selected.Plot}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 uppercase text-[10px] font-bold">Director</p>
                  <p className="text-white">{selected.Director}</p>
                </div>
                <div>
                  <p className="text-gray-500 uppercase text-[10px] font-bold">Género</p>
                  <p className="text-white">{selected.Genre}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}