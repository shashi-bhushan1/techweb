import { Course } from "@/content/courses";
import Image from "next/image";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="cursor-target overflow-hidden rounded-2xl border-2 border-zinc-800/80 bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 hover:border-fuchsia-600/50 hover:shadow-lg hover:shadow-fuchsia-600/10 transition-all duration-300 flex flex-col h-full backdrop-blur-sm group">
      <div className="relative overflow-hidden">
        {course.image ? (
          <div className="aspect-[16/9] w-full relative overflow-hidden bg-zinc-900">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : (
          <div className="aspect-[16/9] w-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
        )}
        {course.tag ? (
          <span className="absolute left-4 top-4 rounded-lg bg-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-lg z-10">
            {course.tag}
          </span>
        ) : null}
      </div>
      <div className="flex flex-col flex-grow p-5">
        <div className="flex-grow mb-4">
          <h3 className="text-lg font-bold text-white mb-3 min-h-[3.5rem] line-clamp-2 group-hover:text-fuchsia-400 transition-colors">{course.title}</h3>
          <div className="flex items-center text-sm text-zinc-400">
            <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span className="line-clamp-1">{course.category}</span>
          </div>
        </div>
        <button className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 px-4 py-3 text-base font-semibold text-white hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-200 mt-auto shadow-lg hover:shadow-fuchsia-600/50 transform hover:-translate-y-0.5">
          Learn More
        </button>
      </div>
    </div>
  );
}


