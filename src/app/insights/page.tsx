import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { insights } from "@/data/insights";
export const metadata: Metadata = { title: "Insights | Richi Vij", description: "[PLACEHOLDER: insights archive description]", openGraph: { title: "Insights | Richi Vij", description: "[PLACEHOLDER: insights archive description]", type: "website" } };
export default function InsightsPage() { return <><Navbar /><main className="min-h-screen bg-paper px-5 pb-24 pt-32 md:px-10"><div className="mx-auto max-w-[1200px]"><h1 className="h2">Insights</h1><ul className="mt-12">{insights.map(a=><li key={a.slug} className="border-t border-ink/20 py-7"><Link href={`/insights/${a.slug}`} className="group"><p className="text-sm text-stone">{a.category} · {a.date} · {a.read}</p><h2 className="mt-2 font-serif text-3xl group-hover:text-bronze">{a.title}</h2></Link></li>)}</ul></div></main><Footer /></>; }
