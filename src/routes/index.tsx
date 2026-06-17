import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-salon.jpg";
import { photos, WHATSAPP_URL } from "@/lib/assets";
import { Reveal } from "@/components/site/Reveal";
import {
  Scissors, Sparkles, Palette, Crown, Brush, Flower2,
  Heart, Award, GraduationCap, ShieldCheck, ArrowRight, Star,
  MapPin, Phone, Instagram, MessageCircle, Quote, CheckCircle2,
} from "lucide-react";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, CALL_URL, PHONE, ADDRESS } from "@/lib/assets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glamour Beauty Zone — Luxury Salon & Beauty Academy in Machhiwara" },
      { name: "description", content: "Where beauty meets perfection. Premium hair, bridal makeup, skincare and a professional beauty academy. Founded 2018 by Karan Singh." },
      { property: "og:title", content: "Glamour Beauty Zone" },
      { property: "og:description", content: "Premium salon & beauty academy in Machhiwara, Punjab." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "8+", label: "Years of Artistry" },
  { value: "1000+", label: "Happy Clients" },
  { value: "150+", label: "Academy Graduates" },
  { value: "2018", label: "Trusted Since" },
];

const featuredServices = [
  { icon: Crown, title: "Bridal Makeup", desc: "Signature looks crafted for your most important day." },
  { icon: Scissors, title: "Hair Styling", desc: "Cuts, blowouts and editorial finishes by master stylists." },
  { icon: Palette, title: "Hair Coloring", desc: "Global colour, balayage, highlights & glossing." },
  { icon: Sparkles, title: "Skin & Facials", desc: "Result-driven facials with luxury skincare." },
  { icon: Brush, title: "HD & Airbrush", desc: "Flawless camera-ready makeup for every occasion." },
  { icon: Flower2, title: "Spa Therapies", desc: "Hair spa, scalp rituals and relaxing body therapies." },
];

const whyUs = [
  { icon: Award, title: "Certified Trainers" },
  { icon: ShieldCheck, title: "Hygienic Standards" },
  { icon: Heart, title: "Personal Consultation" },
  { icon: Sparkles, title: "Premium Products" },
  { icon: GraduationCap, title: "Beauty Academy" },
  { icon: Crown, title: "Luxury Experience" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img
          src={heroBg}
          alt="Luxury salon interior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.78_0.07_35/0.25),_transparent_60%)]" />

        {/* Floating ornaments */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[8%] top-[22%] h-24 w-24 rounded-full bg-rose-gold/30 blur-2xl animate-float" />
          <div className="absolute right-[12%] top-[34%] h-32 w-32 rounded-full bg-gold/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute left-[20%] bottom-[18%] h-20 w-20 rounded-full bg-rose-gold/20 blur-2xl animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.3em] text-foreground/70">
              <Sparkles className="h-3 w-3 text-rose-gold-deep" /> Established 2018 · Machhiwara
            </span>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              Where Beauty <br />
              Meets <span className="shimmer-text italic">Perfection</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 max-w-xl text-balance text-base text-foreground/70 sm:text-lg">
              A premium salon and beauty academy crafting bridal artistry, hair couture
              and skin rituals in the heart of Machhiwara Sahib.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm text-primary-foreground shadow-luxe transition hover:bg-rose-gold-deep"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm text-foreground transition hover:bg-cream"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={600}>
            <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-3xl px-6 py-6 text-center shadow-soft">
                  <div className="font-display text-3xl text-rose-gold-deep sm:text-4xl">{s.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-foreground/60">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-rose opacity-30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxe">
                <img src={photos.brideVeil} alt="Bridal artistry" className="h-[640px] w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-8 -right-4 hidden rounded-3xl glass p-6 shadow-luxe sm:block">
                <div className="flex items-center gap-1 text-rose-gold-deep">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-2 max-w-[200px] text-sm">"A truly luxurious experience."</p>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Our Story</span>
              <h2 className="mt-3 font-display text-4xl leading-[1.1] sm:text-5xl">
                A house of beauty, built on craft and care.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="hairline mt-6 w-24" />
              <p className="mt-6 text-foreground/70">
                Since 2018, Glamour Beauty Zone has become Machhiwara's destination
                for refined beauty. Every service is personalised, every product
                premium-grade, every moment designed to feel quietly extraordinary.
              </p>
              <p className="mt-4 text-foreground/70">
                Under the direction of founder Karan Singh, our team brings 8+
                years of expertise across hair, bridal, skin and professional
                beauty education.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-rose-gold-deep hover:gap-3 transition-all"
              >
                Discover our story <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Signature Services</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Crafted rituals for every you</h2>
              <p className="mt-4 text-foreground/70">From bridal couture to weekend refreshes — every service tailored, every product premium.</p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-card p-8 shadow-soft lift">
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-rose opacity-0 blur-3xl transition group-hover:opacity-40" />
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-luxe">
                      <s.icon className="h-6 w-6 text-rose-gold-deep" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1 text-sm text-rose-gold-deep hover:gap-2 transition-all">
                      Book now <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm text-primary-foreground">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">The Glamour Difference</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Why Machhiwara chooses us</h2>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <div className="flex items-center gap-5 rounded-3xl border border-border bg-card p-6 lift">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-rose text-primary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <span className="font-display text-xl">{w.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ACADEMY PREVIEW */}
      <section className="bg-cream py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            <Reveal>
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Beauty Academy</span>
                <h2 className="mt-3 font-display text-4xl leading-[1.1] sm:text-5xl">
                  Train with us. <br />Build your <em className="shimmer-text not-italic">career</em>.
                </h2>
                <div className="hairline mt-6 w-24" />
                <p className="mt-6 text-foreground/70">
                  Government-recognised certification courses in makeup, hair, skin and nails — taught
                  with 100% practical training and small batches.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  {["Recognised Certification", "100% Practical", "Premium Kits", "Career Support"].map((p) => (
                    <li key={p} className="flex items-center gap-2 text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-rose-gold-deep" /> {p}
                    </li>
                  ))}
                </ul>
                <Link to="/academy" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm text-primary-foreground">
                  Explore courses <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Professional Makeup Artistry", d: "6 Months" },
                { t: "Bridal Makeup Specialist", d: "3–4 Months" },
                { t: "Hair Styling & Hairdressing", d: "4–6 Months" },
                { t: "Nail Technology & Extensions", d: "4–6 Months" },
              ].map((c, i) => (
                <Reveal key={c.t} delay={i * 80}>
                  <div className="group h-full rounded-3xl bg-card p-7 shadow-soft lift">
                    <div className="flex items-center justify-between">
                      <GraduationCap className="h-6 w-6 text-rose-gold-deep" />
                      <span className="rounded-full bg-foreground px-3 py-1 text-[10px] uppercase tracking-wider text-primary-foreground">{c.d}</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl leading-tight">{c.t}</h3>
                    <div className="mt-4 flex items-center gap-1 text-xs text-foreground/60">
                      <Award className="h-3.5 w-3.5 text-rose-gold-deep" /> Certification included
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">The Gallery</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Moments from our studio</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-medium text-rose-gold-deep hover:gap-3 transition-all">
              View full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {[
            { src: photos.brideVeil, cat: "Bridal", tall: true },
            { src: photos.hairUpdo, cat: "Hair" },
            { src: photos.brideRed, cat: "Bridal" },
            { src: photos.partyMakeup, cat: "Party", tall: true },
            { src: photos.braidPink, cat: "Hair", tall: true },
            { src: photos.hairColor, cat: "Color" },
            { src: photos.brideSide, cat: "Bridal" },
            { src: photos.bridePortrait, cat: "Bridal", tall: true },
          ].map((it, i) => (
            <Reveal key={it.src} delay={(i % 4) * 60}>
              <Link
                to="/gallery"
                className={`group relative block overflow-hidden rounded-3xl bg-card shadow-soft ${
                  it.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img src={it.src} alt={it.cat} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-wider opacity-0 transition group-hover:opacity-100">
                  {it.cat}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="bg-cream py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Loved by Many</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Words from our clients</h2>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              { name: "Simran K.", role: "Bridal Client", text: "Absolutely amazing experience! The bridal makeup exceeded all my expectations." },
              { name: "Priya S.", role: "Regular Client", text: "My go-to salon for hair treatments and skincare. Beautiful ambience and outstanding service." },
              { name: "Harpreet C.", role: "Academy Student", text: "The professional makeup course was incredible — practical training was excellent." },
            ].map((rv, i) => (
              <Reveal key={rv.name} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-card p-8 shadow-soft lift">
                  <Quote className="absolute -top-2 -right-2 h-20 w-20 text-rose-gold/10" />
                  <div className="relative">
                    <div className="flex gap-1 text-rose-gold-deep">
                      {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                    </div>
                    <p className="mt-5 text-foreground/80">"{rv.text}"</p>
                    <div className="mt-6 border-t border-border pt-4">
                      <div className="font-display text-lg">{rv.name}</div>
                      <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/60">{rv.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/testimonials" className="inline-flex items-center gap-2 text-sm font-medium text-rose-gold-deep hover:gap-3 transition-all">
              Read all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Visit · Call · Book</span>
              <h2 className="mt-3 font-display text-4xl leading-[1.1] sm:text-5xl">
                Find us in <em className="shimmer-text not-italic">Machhiwara</em>.
              </h2>
              <div className="hairline mt-6 w-24" />
              <div className="mt-8 space-y-4">
                {[
                  { icon: MapPin, label: ADDRESS, href: "https://maps.google.com/?q=Machhiwara+Sahib" },
                  { icon: Phone, label: `+91 ${PHONE}`, href: CALL_URL },
                  { icon: Instagram, label: `@${INSTAGRAM_HANDLE}`, href: INSTAGRAM_URL },
                  { icon: MessageCircle, label: "Mon – Sat · 9:00 to 21:00", href: undefined },
                ].map((row, i) => (
                  <a
                    key={i}
                    href={row.href}
                    target={row.href ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition hover:bg-cream"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-rose text-primary-foreground">
                      <row.icon className="h-4 w-4" />
                    </div>
                    <span className="pt-1.5 text-sm text-foreground/80">{row.label}</span>
                  </a>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm text-primary-foreground">
                Book appointment <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-[2.5rem] shadow-luxe">
              <iframe
                title="Glamour Beauty Zone location"
                src="https://www.google.com/maps?q=Machhiwara+Sahib+Punjab&output=embed"
                width="100%"
                height="520"
                loading="lazy"
                className="block border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="px-4 py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-gradient-noir px-8 py-24 text-center text-primary-foreground sm:px-16">
          <div className="absolute inset-0 opacity-50" aria-hidden>
            <div className="absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-rose-gold blur-[140px]" />
            <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-gold blur-[160px]" />
          </div>
          <div className="relative">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold">Your moment awaits</span>
              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">Ready for your transformation?</h2>
              <p className="mx-auto mt-6 max-w-xl text-white/70">
                Reserve your seat in our studio. Whether bridal couture or a quiet
                weekend ritual — we are ready for you.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-full bg-gradient-rose px-7 py-4 text-sm text-primary-foreground shadow-glow">WhatsApp Now</a>
                <a href={`tel:+91${"7986177501"}`} className="rounded-full glass-dark px-7 py-4 text-sm text-white">Call 7986177501</a>
                <Link to="/contact" className="rounded-full border border-white/20 px-7 py-4 text-sm text-white">Book Appointment</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
