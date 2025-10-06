import { PropsWithChildren, createElement } from "react";

type HeadingProps = PropsWithChildren<{ level?: 1 | 2 | 3; className?: string }>;

export default function Heading({ level = 2, className, children }: HeadingProps) {
  const tag = `h${level}`;
  const base = "font-bold text-white";
  const size = level === 1 ? "text-5xl sm:text-6xl" : level === 2 ? "text-3xl md:text-4xl" : "text-xl";
  return createElement(tag, { className: `${base} ${size} ${className ?? ""}`.trim() }, children);
}


