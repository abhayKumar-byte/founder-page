"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { episodes, podcastLinks } from "@/data/podcast";
import TextReveal from "../animations/TextReveal";
export default function PodcastSection() {
  const [selected, setSelected] = useState(episodes[0]); const [playing, setPlaying] = useState(false);
  const choose = (episode: typeof selected) => { setSelected(episode); setPlaying(false); };
  return <section id="podcast" className="overflow-hidden bg-ink px-5 py-24 text-paper md:px-10 md:py-40"><div className="mx-auto max-w-[1440px]">
    <TextReveal><p className="text-xs uppercase tracking-[.25em] text-bronze">Podcast &amp; video</p><h2 className="h2 mt-5 max-w-4xl">Conversations Worth Listening To.</h2></TextReveal>
    <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14"><div className="lg:col-span-8">
      <div className="relative aspect-video overflow-hidden bg-[#292724]">
        <AnimatePresence mode="wait"><motion.div key={selected.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .3 }} className="absolute inset-0">
          {playing ? <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${selected.youtubeId}?autoplay=1&rel=0`} title={selected.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> : <button onClick={() => setPlaying(true)} className="group relative h-full w-full" aria-label={`Play ${selected.title}`}><img src={`https://i.ytimg.com/vi/${selected.youtubeId}/maxresdefault.jpg`} alt={`Poster for ${selected.title}`} loading="lazy" className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-[1.025]" /><span className="absolute inset-0 grid place-items-center"><span className="grid h-16 w-16 place-items-center rounded-full bg-bronze text-ink transition group-hover:scale-110"><Play fill="currentColor" size={22} /></span></span></button>}
        </motion.div></AnimatePresence>
      </div>
      <p className="mt-6 text-xs uppercase tracking-[.18em] text-bronze">{selected.date} <span className="px-2">·</span>{selected.duration}</p><h3 className="mt-2 font-serif text-3xl md:text-5xl">{selected.title}</h3><p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/60">{selected.description}</p>
      <div className="mt-8 flex gap-6 text-sm"><a className="border-b border-bronze pb-1 hover:text-bronze" href={podcastLinks.watch} target="_blank" rel="noreferrer">Watch on YouTube</a><a className="border-b border-paper/30 pb-1 hover:text-bronze" href={podcastLinks.subscribe} target="_blank" rel="noreferrer">Subscribe</a></div>
    </div><div className="lg:col-span-4"><p className="mb-5 text-xs uppercase tracking-[.2em] text-paper/50">More conversations</p><div className="-mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-5 md:mx-0 md:px-0 lg:block lg:overflow-visible">{episodes.filter(e => e.id !== selected.id).map(e => <button key={e.id} onClick={() => choose(e)} className="w-[78vw] shrink-0 snap-start border-t border-paper/20 py-5 text-left transition hover:border-bronze md:w-[48%] lg:w-full"><span className="text-xs text-paper/50">{e.date} · {e.duration}</span><span className="mt-2 block font-serif text-2xl">{e.title}</span><span className="mt-2 block text-sm text-paper/55">{e.description}</span><span className="mt-4 block h-px w-10 bg-bronze" /></button>)}</div></div></div>
  </div></section>;
}
