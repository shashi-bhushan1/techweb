export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900/80 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-fuchsia-600" />
          <span className="text-sm font-semibold text-white">Skill Vendor</span>
        </div>
        <nav className="hidden items-center gap-6 text-xs text-zinc-300 sm:flex">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/courses" className="hover:text-white">Courses</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#login" className="rounded-md bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20">Login</a>
      </div>
    </header>
  );
}


