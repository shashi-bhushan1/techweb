export default function Testimonials() {
  const items = [
    {
      name: "Rahul Vyas",
      location: "Chennai",
      text:
        "Must say it's a learning platform for the entire family! I signed up for myself but ended up sharing it with my whole family! My wife is learning Yoga, my brother is exploring coding, and I'm learning about stock market.",
      image: null, // Placeholder for future image
    },
    {
      name: "Mohit",
      location: "Mumbai",
      text:
        "I Recovered My yearly subscription cost in Just one month, The offers and discounts are genuinely amazing. I got deals on travel, OTT etc. worth way more than what I paid for the subscription. The courses are the cherry on top!",
      image: null,
    },
    {
      name: "Devesh",
      location: "Jodhpur",
      text:
        "Courses, offers and AI Tools All in One Place with a single, It's rare to find this kind of complete package at such a low price, subscription delivers the value indeed.",
      image: null,
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What our subscribers say</h2>
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Be part of a thriving community of thousands who love learning, saving, and growing with us
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.name} className="rounded-xl border-2 border-zinc-800/80 bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 p-5 hover:border-zinc-700 transition-all duration-300">
              {/* 5 Star Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-orange-500"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-sm leading-relaxed text-zinc-300 mb-4">
                {it.text}
              </p>
              
              {/* User Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-600 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {it.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{it.name}</div>
                  <div className="text-xs text-zinc-400">{it.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


