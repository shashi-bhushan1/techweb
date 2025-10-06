import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/80 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="cursor-target flex items-center gap-2">
          <div className="h-7 w-7 rounded-sm bg-fuchsia-600" />
          <span className="text-base font-semibold text-white">Skill Vendor</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 sm:flex">
          <Link href="/" className="cursor-target hover:text-white transition-colors">Home</Link>
          <Link href="/courses" className="cursor-target hover:text-white transition-colors">Courses</Link>
          <Link href="/about" className="cursor-target hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="cursor-target hover:text-white transition-colors">Contact</Link>
        </nav>
        <a href="#login" className="cursor-target rounded-md bg-fuchsia-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-fuchsia-500 transition-colors">Login</a>
      </div>
    </header>
  );
}


