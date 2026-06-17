import { createFileRoute } from "@tanstack/react-router";
import founderImg from "@/assets/founder.jpg";
import { photos } from "@/lib/assets";
import { Reveal } from "@/components/site/Reveal";
import { Award, GraduationCap, Heart, Sparkles, Crown, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Glamour Beauty Zone" },
      { name: "description", content: "Founded in 2018 by Karan Singh, Glamour Beauty Zone is Machhiwara's trusted destination for luxury beauty and professional education." },
      { property: "og:title", content: "About Glamour Beauty Zone" },
      { property: "og:description", content: "Founded in 2018 by Karan Singh — 8+ years of beauty artistry." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Crown, title: "Luxury Experience", desc: "Every appointment styled to feel quietly extraordinary." },
  { icon: Sparkles, title: "Premium Products", desc: "Globally trusted brands across colour, skin and care." },
  { icon: Heart, title: "Personal Consultation", desc: "Looks tailored to your face, hair and lifestyle." },
  { icon: ShieldCheck, title: "Hygienic Standards", desc: "Single-use tools, sterilised stations, transparent care." },
  { icon: GraduationCap, title: "Beauty Educators", desc: "We don't just style — we train the next generation." },
  { icon: Award, title: "Certified Team", desc: "A team of stylists trained in the latest global techniques." },
];

function About() {
  return (
    <>
      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-luxe" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Our House</span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
              A salon built on <em className="shimmer-text not-italic">artistry</em>, <br className="hidden sm:block" />
              run with quiet devotion.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-foreground/70">
              Glamour Beauty Zone was founded in 2018 with one belief — that every
              client deserves a salon that treats beauty as craft. Seven years on, we
              remain Machhiwara's most loved beauty destination.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[2rem] bg-card p-10 shadow-soft">
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Our Mission</span>
              <h3 className="mt-3 font-display text-3xl">To make luxury beauty feel personal.</h3>
              <p className="mt-4 text-foreground/70">
                We design every service around the client in our chair — not a
                trend, not a template. Premium products, expert hands, and time
                taken with care.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] bg-gradient-noir p-10 text-primary-foreground shadow-luxe">
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold">Our Vision</span>
              <h3 className="mt-3 font-display text-3xl">A Punjab where every artist is trained to perfection.</h3>
              <p className="mt-4 text-white/70">
                Through our academy, we educate the next generation of stylists,
                makeup artists and skin specialists — lifting the entire industry
                in our region.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-rose opacity-25 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxe">
                <img src={founderImg} alt="Karan Singh, Founder" className="h-[640px] w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 left-6 rounded-2xl glass px-6 py-4 shadow-luxe">
                <div className="font-display text-2xl">Karan Singh</div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/60">Founder & Director</div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Founder Spotlight</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">8+ years of beauty mastery.</h2>
              <div className="hairline mt-6 w-24" />
              <p className="mt-6 text-foreground/70">
                A trusted beauty expert, certified professional and educator,
                Karan founded Glamour Beauty Zone with the conviction that
                Machhiwara deserved a salon experience that rivals the finest
                metropolitan studios.
              </p>
              <p className="mt-4 text-foreground/70">
                Today he leads a team of certified stylists, makeup artists and
                educators — personally overseeing bridal services and the academy
                curriculum.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["8+ Years", "Trusted Expert", "Certified Pro", "Beauty Educator"].map((b) => (
                  <div key={b} className="rounded-2xl border border-border bg-card px-4 py-3 text-center text-xs uppercase tracking-wider">{b}</div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Why Choose Us</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Six pillars of our craft</h2>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="rounded-3xl bg-card p-8 shadow-soft lift">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-rose text-primary-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[photos.bridePortrait, photos.brideRed, photos.brideSide, photos.partyMakeup].map((src, i) => (
            <Reveal key={src} delay={i * 100}>
              <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-soft">
                <img src={src} alt="" className="h-full w-full object-cover transition duration-700 hover:scale-110" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
