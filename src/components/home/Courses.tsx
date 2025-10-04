import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { courses as items } from "@/content/home";

export default function Courses() {
  return (
    <Section id="courses">
      <Heading>150+ Premium Courses</Heading>
      <p className="mt-2 max-w-prose text-sm text-zinc-400">
        From stock market, coding, digital marketing to formal educational content, master the skills that shape your future.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <div className="aspect-video w-full rounded-md bg-zinc-800/60" />
            <h3 className="mt-3 text-sm font-semibold">{it.title}</h3>
            <p className="mt-1 text-xs leading-5 text-zinc-400">{it.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}


