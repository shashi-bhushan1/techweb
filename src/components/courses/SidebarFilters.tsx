import { categories, courseTags } from "@/content/courses";

export default function SidebarFilters() {
  return (
    <aside className="space-y-6">
      <div>
        <h3 className="text-sm font-semibold text-white">Course Category</h3>
        <ul className="mt-3 space-y-2 text-xs text-zinc-300">
          {categories.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-zinc-700 bg-zinc-900" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="absolute left-0 right-0 top-0 flex items-center justify-center">
          <div className="h-px w-full bg-zinc-700" />
          <div className="mx-2 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-800">
            <span className="text-xs text-zinc-400">★</span>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <h3 className="text-sm font-semibold text-white">Course Tag</h3>
        <ul className="mt-3 space-y-2 text-xs text-zinc-300">
          {courseTags.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <input type="checkbox" className="h-3.5 w-3.5 rounded border-zinc-700 bg-zinc-900" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full rounded-md border border-zinc-700 px-4 py-2 text-xs text-zinc-200 hover:bg-zinc-900">
          Subscribe Now
        </button>
      </div>
    </aside>
  );
}


