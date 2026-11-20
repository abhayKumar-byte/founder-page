import Reveal from "../animations/Reveal";
import { founder } from "@/data/founder";
export default function ContactSection() {
  return (
    <section id="contact" className="px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><h2 className="display !text-[clamp(3rem,11vw,10rem)]">Let&apos;s create something meaningful.</h2></Reveal>
        <Reveal delay={0.15} className="mt-12 flex flex-wrap items-center gap-6">
          <a href={`mailto:${founder.email}`} className="bg-ink px-8 py-5 font-serif text-2xl text-paper transition hover:bg-bronze hover:text-ink">Start a conversation</a>
          {founder.socials.map((s) => <a key={s.label} href={s.href} className="border-b border-ink/40 pb-1 text-sm hover:border-bronze">{s.label}</a>)}
        </Reveal>
      </div>
    </section>
  );
}
