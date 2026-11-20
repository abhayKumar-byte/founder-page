"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { founder } from "@/data/founder";
const ease = [0.22, 1, 0.36, 1] as const;
export default function HeroSection() {
  const { scrollY } = useScroll(); const r = useReducedMotion();
  const y = useTransform(scrollY, [0, 800], [0, r ? 0 : 90]);
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-ink px-5 pb-14 pt-28 text-paper md:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12">
        <motion.div style={{ y }} initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1.3, ease }}
          className="relative order-2 aspect-[4/5] w-full bg-gradient-to-br from-stone/40 to-bronze/30 md:order-none md:col-span-5 md:col-start-8 md:row-span-2">
          {/* Swap for next/image with founder.portrait once the photo exists */}
          <span className="absolute bottom-4 left-4 text-xs text-paper/60">[Portrait placeholder]</span>
        </motion.div>
        <div className="md:col-span-7 md:row-start-1">
          <motion.h1 className="display" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.18 } } }}>
            {["RICHI", "VIJ"].map((w) => <span key={w} className="block overflow-hidden"><motion.span className="block" variants={{ h: { y: "105%" }, s: { y: 0, transition: { duration: 1.1, ease } } }}>{w}</motion.span></span>)}
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 1, ease }} className="mt-6 h-px w-40 origin-left bg-bronze" />
          <p className="mt-4 text-sm text-paper/60">{founder.role}</p>
        </div>
        <motion.div className="md:col-span-6 md:row-start-2 md:self-end" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.9, ease }}>
          <p className="font-serif text-3xl md:text-4xl">{founder.headline}</p>
          <p className="mt-4 max-w-md text-paper/70">{founder.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#journey" className="bg-bronze px-6 py-3 text-sm text-ink transition hover:bg-paper">Discover my journey</a>
            <a href="#ventures" className="border border-paper/30 px-6 py-3 text-sm transition hover:border-bronze hover:text-bronze">Explore my ventures</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
