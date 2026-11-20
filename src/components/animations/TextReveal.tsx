"use client";
import { motion, useReducedMotion } from "framer-motion";
export default function TextReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <div className={className}><motion.div initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }}>{children}</motion.div></div>;
}
