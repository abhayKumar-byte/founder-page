"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "../animations/Reveal";
import { journey } from "@/data/journey";
export default function JourneySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return (
    <section id="journey" className="bg-ink px-5 py-24 text-paper md:px-10 md:py-40">
      <div className="mx-auto max-w-[1100px]">
        <Reveal><h2 className="h2 max-w-3xl">Every journey has a beginning.</h2></Reveal>
        <ol ref={ref} className="relative ml-3 mt-20 border-l border-paper/15 md:ml-0 md:border-l-0">
          <motion.span style={{ scaleY: h }} className="absolute -left-px top-0 h-full w-px origin-top bg-bronze md:left-1/2" />
          {journey.map((j, i) => (
            <li key={j.title} className={`pb-16 pl-8 last:pb-0 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-14" : "md:pr-14 md:text-right"}`}>
              <Reveal>
                <p className="font-serif text-6xl text-bronze md:text-7xl">{j.year}</p>
                <h3 className="mt-2 text-xl">{j.title}</h3><p className="mt-2 text-paper/60">{j.text}</p>
              </Reveal>
            </li>))}
        </ol>
      </div>
    </section>
  );
}
