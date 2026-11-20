import Reveal from "../animations/Reveal";
import { beliefs } from "@/data/ventures";
export default function PhilosophySection() {
  return (
    <section id="philosophy" className="px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><h2 className="h2">What I believe in.</h2></Reveal>
        <ul className="mt-16">{beliefs.map((b) => (
          <li key={b} className="border-t border-ink/15 py-6 md:py-10"><Reveal><p className="font-serif text-[clamp(2rem,7vw,6rem)] leading-none">{b}</p></Reveal></li>))}</ul>
      </div>
    </section>
  );
}
