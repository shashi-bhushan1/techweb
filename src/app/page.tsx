import Hero from "@/components/home/Hero";
import Courses from "@/components/home/Courses";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Courses />
      <Features />
      <Testimonials />
      <CTA />
    </main>
  );
}
