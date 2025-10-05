import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { courses } from "@/content/courses";

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
          className="hidden md:flex items-center gap-2 px-6 py-3 rounded-md bg-fuchsia-600 text-white text-sm font-medium hover:bg-fuchsia-500 transition-colors"
        >
          Explore Courses
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featuredCourses.map((course) => (
          <a 
            key={course.id} 
            href="/courses"
            className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-200"
          >
            <div className="aspect-video w-full rounded-md bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
            <h3 className="mt-3 text-sm font-semibold text-white group-hover:text-fuchsia-400 transition-colors">
              {course.title}
            </h3>
            <p className="mt-1 text-xs leading-5 text-zinc-400 line-clamp-2">
              {course.category}
            </p>
          </a>
        ))}
      </div>
      
      {/* Mobile Explore Courses Button */}
      <div className="mt-6 flex justify-center md:hidden">
        <a 
          href="/courses"
          className="flex items-center gap-2 px-6 py-3 rounded-md bg-fuchsia-600 text-white text-sm font-medium hover:bg-fuchsia-500 transition-colors"
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


