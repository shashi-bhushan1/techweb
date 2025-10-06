export default function Features() {
  const items = [
    {
      title: "Skill X – Job & Internship Portal",
      text:
        "An AI-powered career assistant, just upload your resume, and it will auto-match you with the most relevant openings across the internet. Your skills deserve the right platform—get hired faster with Skill X.",
    },
    {
      title: "Skill X – News App",
      text:
        "Smart, personalized updates that match your career goals — every minute you spend here adds value. Stay ahead of the curve with news that actually matters to you.",
    },
    {
      title: "Skill X – Startup Mania",
      text:
        "From idea to funding, a one-stop hub for passionate entrepreneurs ready to build the next big thing. Turn your startup dream into reality with our complete ecosystem.",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Features</h2>
            <p className="mt-4 text-sm text-zinc-400">
              Skill Vendor is evolving into a powerful ecosystem — and we&apos;re just getting started. Exciting new features are coming soon, all included in your single subscription:
            </p>
            <div className="mt-6 space-y-6">
              {items.map((it) => (
                <div key={it.title} className="flex gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-fuchsia-500" />
                  <div>
                    <h3 className="text-sm font-semibold text-white">{it.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-fuchsia-500/20 p-8">
              <div className="h-full w-full rounded-lg bg-gradient-to-tr from-blue-600/30 to-orange-500/20" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-orange-500/50 bg-orange-500/20" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
