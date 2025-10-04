import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
  containerClassName?: string;
}>;

export default function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} className={className ?? "bg-black text-white"}>
      <div className={`mx-auto max-w-6xl px-4 py-12 ${containerClassName ?? ""}`}>{children}</div>
    </section>
  );
}


