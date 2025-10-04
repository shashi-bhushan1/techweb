"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import SearchBar from "@/components/courses/SearchBar";
import SidebarFilters from "@/components/courses/SidebarFilters";
import CourseCard from "@/components/courses/CourseCard";
import Pagination from "@/components/courses/Pagination";
import { courses } from "@/content/courses";

const COURSES_PER_PAGE = 6;

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const endIndex = startIndex + COURSES_PER_PAGE;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Section className="bg-black text-white" containerClassName="py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div>
            <SidebarFilters />
          </div>
          <div>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
        </div>
      </Section>
    </main>
  );
}


