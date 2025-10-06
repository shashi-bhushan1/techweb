interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full group">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-fuchsia-500 pointer-events-none z-10 transition-all duration-200 group-focus-within:text-fuchsia-400 group-focus-within:drop-shadow-[0_0_8px_rgba(217,70,239,0.6)]">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search courses..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="cursor-target w-full rounded-xl border-2 border-zinc-800 bg-zinc-900/50 pl-16 pr-6 py-3.5 text-base text-white placeholder-zinc-500 focus:outline-none focus:border-fuchsia-600 focus:ring-2 focus:ring-fuchsia-600/20 focus:shadow-lg focus:shadow-fuchsia-600/20 transition-all duration-200 backdrop-blur-sm relative"
      />
    </div>
  );
}


