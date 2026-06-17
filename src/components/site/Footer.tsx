import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";
import { ADDRESS, CALL_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE } from "@/lib/assets";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-gradient-noir text-primary-foreground">
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-rose-gold blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-gold blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-rose font-display text-xl">G</div>
              <div>
                <div className="font-display text-2xl leading-none">Glamour</div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-white/60">Beauty Zone</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-white/70">
              Machhiwara's destination for luxury beauty, bridal artistry and professional
              education since 2018.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full glass-dark transition hover:bg-rose-gold/30"><Instagram className="h-5 w-5" /></a>
              <a href={CALL_URL} className="grid h-11 w-11 place-items-center rounded-full glass-dark transition hover:bg-rose-gold/30"><Phone className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg">Visit</h4>
            <div className="hairline mt-3 w-12" />
            <div className="mt-4 flex items-start gap-3 text-sm text-white/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-gold" />
              <span>{ADDRESS}</span>
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-white/70">
              <Phone className="h-4 w-4 text-rose-gold" /> +91 {PHONE}
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 text-rose-gold" /> @{INSTAGRAM_HANDLE}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg">Explore</h4>
            <div className="hairline mt-3 w-12" />
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link to="/services" className="hover:text-rose-gold">Services</Link></li>
              <li><Link to="/academy" className="hover:text-rose-gold">Academy</Link></li>
              <li><Link to="/gallery" className="hover:text-rose-gold">Gallery</Link></li>
              <li><Link to="/testimonials" className="hover:text-rose-gold">Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-rose-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg">Hours</h4>
            <div className="hairline mt-3 w-12" />
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex justify-between"><span>Mon – Sat</span><span>9:00 – 21:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>10:00 – 19:00</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Glamour Beauty Zone · Founded by Karan Singh</span>
          <span>Crafted with care in Machhiwara, Punjab</span>
        </div>
      </div>
    </footer>
  );
}
