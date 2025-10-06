"use client";

import { categories } from "@/content/courses";

interface SidebarFiltersProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
}

export default function SidebarFilters({ 
  selectedCategories, 
  onCategoryChange
}: SidebarFiltersProps) {
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const clearAllFilters = () => {
    onCategoryChange([]);
  };

  return (
    <aside className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Course Category</h3>
          {selectedCategories.length > 0 && (
            <button 
              onClick={clearAllFilters}
              className="cursor-target text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
        <ul className="mt-4 space-y-3 text-xs text-zinc-300">
          <li className="flex items-start gap-3">
            <input 
              type="checkbox" 
              checked={selectedCategories.length === 0}
              onChange={() => onCategoryChange([])}
              className="cursor-target h-5 w-5 flex-shrink-0 mt-0.5 rounded border-2 border-zinc-700 bg-zinc-900 text-fuchsia-600 focus:ring-2 focus:ring-fuchsia-600 focus:ring-offset-0 accent-fuchsia-600" 
            />
            <span className="text-white font-medium leading-relaxed">All Categories</span>
          </li>
          {categories.map((c) => (
            <li key={c} className="flex items-start gap-3">
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(c)}
                onChange={() => handleCategoryToggle(c)}
                className="cursor-target h-5 w-5 flex-shrink-0 mt-0.5 rounded border-2 border-zinc-700 bg-zinc-900 text-fuchsia-600 focus:ring-2 focus:ring-fuchsia-600 focus:ring-offset-0 accent-fuchsia-600" 
              />
              <span className="hover:text-white cursor-pointer transition-colors leading-relaxed" onClick={() => handleCategoryToggle(c)}>
                {c}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}


