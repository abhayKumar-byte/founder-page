import Reveal from "../animations/Reveal";
import { ventures } from "@/data/ventures";
export default function VenturesSection() {
  return (
    <section id="ventures">
      <div className="px-5 pt-24 md:px-10 md:pt-40"><div className="mx-auto max-w-[1440px]"><Reveal><h2 className="h2">Ideas that became reality.</h2></Reveal></div></div>
      {ventures.map((v, i) => (
        <article key={v.name} className={`group px-5 py-20 md:px-10 md:py-32 ${i % 2 ? "bg-ink text-paper" : ""}`}>
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-12">
            <div className={`aspect-[16/10] overflow-hidden bg-stone/30 md:col-span-7 ${i % 2 ? "md:order-2 md:col-start-6" : ""}`}>
              <div className="h-full w-full bg-gradient-to-br from-stone/40 to-bronze/30 transition-transform duration-[1200ms] ease-out group-hover:scale-105" /></div>
            <Reveal className={`md:col-span-4 ${i % 2 ? "md:col-start-1 md:row-start-1" : "md:col-start-9"}`}>
              <p className="text-sm text-stone">{v.industry}, {v.role}</p>
              <h3 className="mt-3 font-serif text-5xl">{v.name}</h3>
              <p className="mt-4 opacity-70">{v.text}</p>
              <a href={v.href} className="mt-6 inline-block border-b border-bronze pb-1 text-sm">Visit website</a>
            </Reveal>
          </div>
        </article>))}
    </section>
  );
}
