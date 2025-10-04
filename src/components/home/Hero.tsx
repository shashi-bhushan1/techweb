import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { Button, LinkButton } from "@/components/ui/Button";
import { hero } from "@/content/home";

export default function Hero() {
  return (
    <Section className="bg-black text-white" containerClassName="py-12 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm text-zinc-400">{hero.eyebrow}</p>
            <Heading level={1} className="mt-1 tracking-tight">
              <span className="text-fuchsia-400">Most</span> {hero.title}
            </Heading>
            <p className="mt-4 max-w-prose text-zinc-300">{hero.description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <LinkButton href={hero.ctaPrimary.href} variant="primary">
                {hero.ctaPrimary.label}
              </LinkButton>
              <LinkButton href={hero.ctaSecondary.href} variant="outline">
                {hero.ctaSecondary.label}
              </LinkButton>
            </div>
            <p className="mt-3 text-xs text-zinc-500">{hero.subnote}</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-2">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
          </div>
        </div>
    </Section>
  );
}


