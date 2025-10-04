import { PropsWithChildren } from "react";

type HeadingProps = PropsWithChildren<{ level?: 1 | 2 | 3; className?: string }>;

export default function Heading({ level = 2, className, children }: HeadingProps) {
  const Tag = ("h" + level) as keyof JSX.IntrinsicElements;
  const base = "font-semibold text-white";
  const size = level === 1 ? "text-4xl sm:text-5xl" : level === 2 ? "text-xl" : "text-base";
  return <Tag className={`${base} ${size} ${className ?? ""}`.trim()}>{children}</Tag>;
}


