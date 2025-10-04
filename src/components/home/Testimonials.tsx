export default function Testimonials() {
  const items = [
    {
      name: "Rahul Vyas",
      location: "Chennai",
      text:
        "Must say it's a learning platform for the entire family! I signed up for myself but ended up sharing it with my whole family!",
    },
    {
      name: "Mohit",
      location: "Mumbai",
      text:
        "I recovered my yearly subscription cost in just one month. The offers and discounts are genuinely amazing.",
    },
    {
      name: "Devesh",
      location: "Jodhpur",
      text:
        "Courses, offers and AI Tools all in one place — rare to find such a complete package at this price.",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-xl font-semibold">What our subscribers say</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.name} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
              <div className="flex items-center justify-between text-xs text-zinc-400">
                <span>★★★★★</span>
                <span>5.0</span>
              </div>
              <p className="mt-2 text-sm text-zinc-200">{it.text}</p>
              <div className="mt-3 text-xs text-zinc-400">
                {it.name}
                <span className="text-zinc-600"> • </span>
                {it.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


