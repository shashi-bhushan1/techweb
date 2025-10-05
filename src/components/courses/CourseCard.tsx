import { Course } from "@/content/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
      <div className="relative">
        <div className="aspect-[16/9] w-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
        {course.tag ? (
          <span className="absolute left-3 top-3 rounded-sm bg-orange-500 px-2 py-0.5 text-[10px] font-semibold text-black">
            {course.tag}
          </span>
        ) : null}
      </div>
      <div className="space-y-3 p-4">
        <div>
          <h3 className="line-clamp-2 text-sm font-semibold text-white mb-2">{course.title}</h3>
          <p className="text-xs text-zinc-400 line-clamp-1">{course.category}</p>
        </div>
        <button className="w-full rounded-md bg-fuchsia-600 px-4 py-2 text-xs font-medium text-white hover:bg-fuchsia-500 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}


