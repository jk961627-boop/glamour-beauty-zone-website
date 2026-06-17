import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL, photos } from "@/lib/assets";
import { GraduationCap, Award, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "Beauty Academy — Glamour Beauty Zone" },
      { name: "description", content: "Government-recognised certification courses in makeup, bridal, hair, nails and skin. 100% practical training in Machhiwara." },
      { property: "og:title", content: "Beauty Academy — Glamour Beauty Zone" },
      { property: "og:description", content: "Professional certification courses with 100% practical training." },
    ],
  }),
  component: Academy,
});

const courses = [
  { title: "Professional Makeup Artistry", duration: "6 Months", desc: "A complete makeup curriculum from foundation theory to editorial finishes." },
  { title: "Bridal Makeup Specialist", duration: "3–4 Months", desc: "Master bridal looks, drapery, hair pairing and the full bridal experience." },
  { title: "Nail Technology & Extensions", duration: "4–6 Months", desc: "Gel, acrylic, sculpting, nail art and salon-ready hygiene practices." },
  { title: "Hair Styling & Hairdressing", duration: "4–6 Months", desc: "Cutting, blow-drying, occasion styling and editorial finishes." },
  { title: "Hair Coloring & Chemical Treatments", duration: "4–6 Months", desc: "Colour theory, global, highlights, balayage and chemical services." },
  { title: "Professional Hair Spa & Scalp Therapy", duration: "3 Months", desc: "Diagnostic scalp care, ritual treatments and trichology basics." },
  { title: "Advanced Skin Care & Facial Therapy", duration: "3–4 Months", desc: "Clinical facials, peels, machine work and skin consultations." },
  { title: "Professional Nail Extension", duration: "2–3 Months", desc: "Fast-track specialist course focused entirely on extensions." },
];

const perks = [
  { icon: Award, label: "Recognised Certification" },
  { icon: CheckCircle2, label: "100% Practical Training" },
  { icon: Briefcase, label: "Career Opportunities" },
  { icon: GraduationCap, label: "Expert Educators" },
];

function Academy() {
  return (
    <>
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-luxe" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Beauty Academy</span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
              Become the <em className="shimmer-text not-italic">artist</em> <br className="hidden sm:block" />
              you were meant to be.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-foreground/70">
              Our courses are designed for serious students — small batches, premium
              kits, 100% practical training and certificates that open doors.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {perks.map((p) => (
                <span key={p.label} className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs">
                  <p.icon className="h-3.5 w-3.5 text-rose-gold-deep" /> {p.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Courses */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] bg-card p-8 shadow-soft lift">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-rose opacity-0 blur-3xl transition group-hover:opacity-30" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Course {String(i + 1).padStart(2, "0")}</span>
                    <span className="rounded-full bg-foreground px-3 py-1 text-[10px] uppercase tracking-wider text-primary-foreground">{c.duration}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-tight sm:text-3xl">{c.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-foreground/70">{c.desc}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-2 text-[11px] text-foreground/70">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-rose-gold-deep" /> Certification</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-rose-gold-deep" /> 100% Practical</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-rose-gold-deep" /> Career Support</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-rose-gold-deep" /> Premium Kit</li>
                  </ul>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs text-primary-foreground transition group-hover:bg-rose-gold-deep"
                  >
                    Enroll Now <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certification gallery */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Recognised. Rewarded.</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Certified students, real careers.</h2>
              <p className="mt-4 text-foreground/70">A few of our recent graduates receiving their certifications at Glamour Beauty Zone.</p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[photos.certHarpreet, photos.certLetter].map((src, i) => (
              <Reveal key={src} delay={i * 120}>
                <div className="overflow-hidden rounded-[2rem] bg-card shadow-luxe">
                  <img src={src} alt="Student certification ceremony" className="h-[480px] w-full object-cover" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
