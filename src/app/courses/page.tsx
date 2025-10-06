"use client";

import { useState, useMemo } from "react";
import Section from "@/components/ui/Section";
import SearchBar from "@/components/courses/SearchBar";
import SidebarFilters from "@/components/courses/SidebarFilters";
import CourseCard from "@/components/courses/CourseCard";
import Pagination from "@/components/courses/Pagination";
import { courses } from "@/content/courses";

const COURSES_PER_PAGE = 6;

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter courses based on search term, categories, and tags
  const filteredCourses = useMemo(() => {
    let filtered = courses;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by categories (if any are selected)
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(course =>
        selectedCategories.includes(course.category)
      );
    }

    // Filter by tags (if any are selected)
    if (selectedTags.length > 0) {
      // For now, we'll show all courses if tags are selected since we don't have tag data
      // You can add tag filtering logic here when you have tag data
    }

    return filtered;
  }, [searchTerm, selectedCategories, selectedTags]);

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const endIndex = startIndex + COURSES_PER_PAGE;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleTagChange = (tags: string[]) => {
    setSelectedTags(tags);
    setCurrentPage(1); // Reset to first page when filters change
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Section className="bg-black text-white" containerClassName="py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div>
            <SidebarFilters 
              selectedCategories={selectedCategories}
              selectedTags={selectedTags}
              onCategoryChange={handleCategoryChange}
              onTagChange={handleTagChange}
            />
          </div>
          <div>
            <div className="mb-8">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
            
            {filteredCourses.length > 0 ? (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {currentCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
                {totalPages > 1 && (
                  <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                  />
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-zinc-400 text-lg mb-2">No courses found</div>
                <div className="text-zinc-500 text-sm">
                  Try adjusting your search or filter criteria
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}


