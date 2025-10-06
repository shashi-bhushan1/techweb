import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "outline";

function classes(variant: Variant) {
  if (variant === "primary") return "cursor-target rounded-md bg-fuchsia-600 px-6 py-3 text-base font-medium text-white hover:bg-fuchsia-500";
  if (variant === "outline") return "cursor-target rounded-md border border-zinc-700 px-6 py-3 text-base font-medium text-zinc-200 hover:bg-zinc-900";
  return "cursor-target rounded-md bg-white/10 px-6 py-3 text-base text-white hover:bg-white/20";
}

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const { className, variant = "primary", ...rest } = props;
  return <button className={`${classes(variant)} ${className ?? ""}`} {...rest} />;
}

export function LinkButton(props: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  const { className, variant = "outline", ...rest } = props;
  return <a className={`${classes(variant)} ${className ?? ""}`} {...rest} />;
}


