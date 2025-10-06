import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { courses } from "@/content/courses";
import Image from "next/image";

export default function Courses() {
  // Get first 4 courses for homepage display
  const featuredCourses = courses.slice(0, 4);

  return (
    <Section id="courses">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Heading>Premium Courses</Heading>
          <p className="mt-2 max-w-prose text-sm text-zinc-400">
            From stock market, coding, digital marketing to formal educational content, master the skills that shape your future.
          </p>
        </div>
        <a 
          href="/courses"
          className="cursor-target hidden md:flex items-center gap-2 px-6 py-3 rounded-md bg-fuchsia-600 text-white text-sm font-medium hover:bg-fuchsia-500 transition-colors"
        >
          Explore Courses
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredCourses.map((course) => (
          <a 
            key={course.id} 
            href="/courses"
            className="cursor-target group rounded-2xl border-2 border-zinc-800/80 bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 p-5 hover:border-fuchsia-600/50 hover:shadow-lg hover:shadow-fuchsia-600/10 transition-all duration-300 flex flex-col backdrop-blur-sm"
          >
            <div className="relative overflow-hidden rounded-xl mb-4">
              {course.image ? (
                <div className="aspect-video w-full relative overflow-hidden bg-zinc-900">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ) : (
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
              )}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-bold text-white group-hover:text-fuchsia-400 transition-colors mb-2 min-h-[3.5rem] line-clamp-2">
                {course.title}
              </h3>
              <div className="flex items-center text-sm text-zinc-400">
                <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="line-clamp-1">{course.category}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {/* Mobile Explore Courses Button */}
      <div className="mt-6 flex justify-center md:hidden">
        <a 
          href="/courses"
          className="cursor-target flex items-center gap-2 px-6 py-3 rounded-md bg-fuchsia-600 text-white text-sm font-medium hover:bg-fuchsia-500 transition-colors"
        >
          Explore Courses
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </Section>
  );
}


