import { useState } from 'react';

function MagnifyingGlassIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function FunnelIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M3 5h18l-7 8v5l-4 2v-7L3 5z" />
    </svg>
  );
}

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header className="bg-[#8D0000] text-[#E1E1E1] shadow-md px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300">
      
      <div className="flex items-center space-x-2 cursor-pointer group">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#E1E1E1] group-hover:text-white transition-colors">
          Protect<span className="text-[#2E4350] bg-[#E1E1E1] px-2 py-0.5 rounded ml-1 font-black group-hover:bg-white">KIDS</span>
        </h1>
      </div>

      <div className="flex items-center w-full sm:w-auto space-x-4">

        <button className="flex items-center space-x-1 bg-[#2E4350] hover:bg-[#242D35] text-[#E1E1E1] px-4 py-2 rounded-lg font-medium border border-transparent hover:border-[#E1E1E1]/20 transition-all text-sm md:text-base">
          <FunnelIcon className="h-5 w-5" />
          <span>Filtros</span>
        </button>

        <div className="relative flex-1 sm:w-64 md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-3 w-3 text-[#242D35]/70" />
          </div>
          <input
            type="text"
            placeholder="Buscar notícias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#E1E1E1] text-[#242D35] placeholder-[#242D35]/60 pl-10 pr-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#2E4350] focus:bg-white transition-all text-sm md:text-base"
          />
        </div>

      </div>
    </header>
  );
}