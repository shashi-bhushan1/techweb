"use client";

import { useState } from "react";
import { categories, courseTags } from "@/content/courses";

interface SidebarFiltersProps {
  selectedCategories: string[];
  selectedTags: string[];
  onCategoryChange: (categories: string[]) => void;
  onTagChange: (tags: string[]) => void;
}

export default function SidebarFilters({ 
  selectedCategories, 
  selectedTags, 
  onCategoryChange, 
  onTagChange 
}: SidebarFiltersProps) {
  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter(c => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagChange(selectedTags.filter(t => t !== tag));
    } else {
      onTagChange([...selectedTags, tag]);
    }
  };

  const clearAllFilters = () => {
    onCategoryChange([]);
    onTagChange([]);
  };

  return (
    <aside className="space-y-6">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Course Category</h3>
          {selectedCategories.length > 0 && (
            <button 
              onClick={clearAllFilters}
              className="text-xs text-blue-400 hover:text-blue-300"
            >
              Clear All
            </button>
          )}
        </div>
        <ul className="mt-3 space-y-2 text-xs text-zinc-300">
          <li className="flex items-center gap-2">
            <input 
              type="checkbox" 
              checked={selectedCategories.length === 0}
              onChange={() => onCategoryChange([])}
              className="h-3.5 w-3.5 rounded border-zinc-700 bg-zinc-900" 
            />
            <span className="text-white font-medium">All Categories</span>
          </li>
          {categories.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(c)}
                onChange={() => handleCategoryToggle(c)}
                className="h-3.5 w-3.5 rounded border-zinc-700 bg-zinc-900" 
              />
              <span className="hover:text-white cursor-pointer" onClick={() => handleCategoryToggle(c)}>
                {c}
              </span>
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
              <input 
                type="checkbox" 
                checked={selectedTags.includes(t)}
                onChange={() => handleTagToggle(t)}
                className="h-3.5 w-3.5 rounded border-zinc-700 bg-zinc-900" 
              />
              <span className="hover:text-white cursor-pointer" onClick={() => handleTagToggle(t)}>
                {t}
              </span>
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


