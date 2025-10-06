import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Section className="bg-black text-white" containerClassName="py-16">
        <div className="max-w-4xl mx-auto">
          <Heading level={1} className="mb-6 text-center">About Skill Vendor</Heading>
          
          <div className="space-y-6 text-base text-zinc-300 leading-relaxed">
            <p>
              Welcome to <span className="text-white font-semibold">Skill Vendor</span> – India's Most Rewarding Ed Tech Platform. 
              We are on a mission to make quality education and valuable resources accessible to everyone through a single, 
              affordable subscription.
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">What We Offer</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">150+ Premium Courses</h3>
                  <p>
                    From stock market and programming to digital marketing and formal education – master the skills 
                    that shape your future with our comprehensive course library.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Premium AI Terminal</h3>
                  <p>
                    Access cutting-edge AI tools to enhance your learning experience and boost your productivity.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Exclusive Discounts</h3>
                  <p>
                    Enjoy amazing deals on top brands, travel, OTT platforms, and more – often worth more than 
                    your subscription cost itself!
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p>
                We believe in creating a thriving community of learners, savers, and achievers. Skill Vendor is 
                evolving into a powerful ecosystem with exciting features on the horizon – all included in your 
                single subscription.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-500 text-xl">✓</span>
                  <span>All-in-one platform: Courses, AI tools, and exclusive discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-500 text-xl">✓</span>
                  <span>Single affordable subscription for the entire family</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-500 text-xl">✓</span>
                  <span>Recover your subscription cost through exclusive deals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-fuchsia-500 text-xl">✓</span>
                  <span>Join 5,000+ subscribers already onboard</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-zinc-400 mb-6">
                Ready to start your learning journey?
              </p>
              <a 
                href="#pricing" 
                className="cursor-target inline-flex rounded-md bg-fuchsia-600 px-8 py-3 text-base font-medium text-white hover:bg-fuchsia-500 transition-colors"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

