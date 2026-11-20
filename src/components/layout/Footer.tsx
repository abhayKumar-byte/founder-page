import { founder } from "@/data/founder";
export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-16 text-paper md:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 md:flex-row md:justify-between">
        <div><p className="font-serif text-4xl">Richi Vij</p><p className="mt-3 max-w-sm text-sm text-paper/60">Building with purpose, for the long term.</p></div>
        <ul className="flex gap-6 text-sm">{founder.socials.map((s) => <li key={s.label}><a href={s.href} className="hover:text-bronze">{s.label}</a></li>)}</ul>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1440px] justify-between border-t border-paper/10 pt-6 text-xs text-paper/50">
        <span>© {new Date().getFullYear()} Richi Vij</span><a href="#top" className="hover:text-bronze">Back to top</a>
      </div>
    </footer>
  );
}
