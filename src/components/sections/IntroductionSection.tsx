import Reveal from "../animations/Reveal";
import { founder } from "@/data/founder";
export default function IntroductionSection() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7"><h2 className="h2">Beyond the title. Behind the vision.</h2></Reveal>
        <Reveal delay={0.15} className="space-y-5 font-serif text-xl leading-relaxed text-ink/80 md:col-span-4 md:col-start-9 md:pt-6">
          {founder.bio.map((p) => <p key={p}>{p}</p>)}</Reveal>
      </div>
    </section>
  );
}
