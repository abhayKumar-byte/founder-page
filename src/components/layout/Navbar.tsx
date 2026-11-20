"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { founder } from "@/data/founder";
export default function Navbar() {
  const [solid, setSolid] = useState(false), [open, setOpen] = useState(false), [active, setActive] = useState("");
  const { scrollYProgress } = useScroll(); const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40); f(); window.addEventListener("scroll", f, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    founder.nav.forEach(([, h]) => { const el = document.querySelector(h); el && io.observe(el); });
    return () => { window.removeEventListener("scroll", f); io.disconnect(); };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? "bg-paper/85 backdrop-blur border-b border-ink/10" : "text-paper"}`}>
      <motion.div style={{ scaleX: bar }} className="absolute bottom-0 left-0 h-px w-full origin-left bg-bronze" />
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10" aria-label="Main">
        <a href="#top" className="font-serif text-2xl tracking-tight">Richi Vij</a>
        <ul className="hidden gap-8 text-sm md:flex">
          {founder.nav.map(([l, h]) => (
            <li key={h} className="relative"><a href={h} className="py-1">{l}</a>
              {active === h.slice(1) && <motion.span layoutId="nav-dot" className="absolute -bottom-1 left-0 h-px w-full bg-bronze" />}</li>
          ))}
        </ul>
        <button className="p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>{open && (
        <motion.ul initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="bg-ink px-5 pb-8 pt-4 text-paper md:hidden">
          {founder.nav.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block border-b border-paper/10 py-4 font-serif text-3xl">{l}</a></li>)}
        </motion.ul>)}</AnimatePresence>
    </header>
  );
}
