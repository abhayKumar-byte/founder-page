import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { insights } from "@/data/insights";
type P = { params: Promise<{ slug: string }> };
export const generateStaticParams = () => insights.map((a) => ({ slug: a.slug }));
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug);
  return { title: a ? `${a.title} | Richi Vij` : "Not found" };
}
export default async function Article({ params }: P) {
  const { slug } = await params;
  const a = insights.find((x) => x.slug === slug); if (!a) notFound();
  return (
    <article className="mx-auto max-w-2xl px-5 py-32">
      <Link href="/#insights" className="text-sm text-bronze">Back to insights</Link>
      <p className="mt-8 text-sm text-stone">{a.category}, {a.date}, {a.read}</p>
      <h1 className="h2 mt-3">{a.title}</h1>
      <p className="mt-8 font-serif text-xl leading-relaxed">{a.body}</p>
    </article>
  );
}
