interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search ..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-600"
      />
      <button className="absolute right-1.5 top-1.5 rounded-md bg-orange-500 px-3 py-1.5 text-xs text-white hover:bg-orange-400">
        ⌕
      </button>
    </div>
  );
}


