import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PodcastSection from "@/components/sections/PodcastSection";
import { episodes } from "@/data/podcast";
export const metadata: Metadata = { title: "Podcast | Richi Vij", description: "[PLACEHOLDER: podcast archive description]", openGraph: { title: "Podcast | Richi Vij", description: "[PLACEHOLDER: podcast archive description]", type: "website" } };
export default function PodcastPage() { return <><Navbar /><main className="pt-16"><PodcastSection /><section className="bg-paper px-5 py-20 md:px-10"><div className="mx-auto max-w-[1200px]"><h1 className="h2">Episode archive</h1><ul className="mt-10">{episodes.map(e=><li key={e.id} className="border-t border-ink/20 py-7"><p className="text-sm text-stone">{e.date} · {e.duration}</p><h2 className="mt-2 font-serif text-3xl">{e.title}</h2><p className="mt-2 max-w-2xl text-stone">{e.description}</p></li>)}</ul></div></section></main><Footer /></>; }
