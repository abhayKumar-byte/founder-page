import Link from "next/link";
import Reveal from "../animations/Reveal";
import { insights } from "@/data/insights";
type A = (typeof insights)[number];
function Card({ a, big }: { a: A; big?: boolean }) {
  return (
    <Link href={`/insights/${a.slug}`} className="group block border-t border-ink/20 pt-5">
      <p className="text-sm text-stone">{a.category}, {a.date}, {a.read}</p>
      <h3 className={`mt-3 font-serif transition-colors group-hover:text-bronze ${big ? "text-4xl md:text-6xl" : "text-2xl"}`}>{a.title}</h3>
    </Link>
  );
}
export default function InsightsSection() {
  const [first, ...rest] = insights;
  return (
    <section id="insights" className="bg-ink/[0.04] px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal><h2 className="h2">Thoughts, perspectives and ideas.</h2></Reveal>
        <Link href="/insights" className="mt-5 inline-block border-b border-bronze pb-1 text-sm">View all insights</Link>
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7"><Card a={first} big /></Reveal>
          <div className="space-y-10 md:col-span-4 md:col-start-9">{rest.map((a) => <Reveal key={a.slug}><Card a={a} /></Reveal>)}</div>
        </div>
      </div>
    </section>
  );
}
