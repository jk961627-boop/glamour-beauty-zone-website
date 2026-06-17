import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Reviews — Glamour Beauty Zone" },
      { name: "description", content: "Real reviews from clients who trust Glamour Beauty Zone for bridal makeup, hair, skin and academy training." },
      { property: "og:title", content: "Client Reviews — Glamour Beauty Zone" },
      { property: "og:description", content: "What our clients say about us." },
    ],
  }),
  component: Testimonials,
});

const reviews = [
  { name: "Simran K.", role: "Bridal Client", text: "Absolutely amazing experience! The staff is highly professional, and the bridal makeup exceeded all my expectations." },
  { name: "Priya S.", role: "Regular Client", text: "My go-to salon for hair treatments and skincare. Beautiful ambience and outstanding service." },
  { name: "Harpreet C.", role: "Academy Student", text: "I enrolled in their professional makeup course. The practical training was excellent." },
  { name: "Navneet G.", role: "Spa Client", text: "Loved the nail extensions and hair spa services. Hygienic and relaxing." },
  { name: "Jasleen M.", role: "Party Makeup", text: "Everything was smooth from booking to service. Highly recommended." },
];

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);
  const r = reviews[idx];

  return (
    <>
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-luxe" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Loved by Many</span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
              Words from our <em className="shimmer-text not-italic">clients</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-noir p-12 text-primary-foreground shadow-luxe sm:p-20">
          <Quote className="absolute -top-4 -left-2 h-40 w-40 text-rose-gold/10" />
          <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-rose-gold/30 blur-[120px]" />
          <div className="relative">
            <div className="flex items-center justify-center gap-1 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p key={r.name} className="mx-auto mt-8 max-w-3xl text-center font-display text-3xl leading-tight sm:text-4xl animate-reveal">
              "{r.text}"
            </p>
            <div className="mt-10 text-center">
              <div className="font-display text-xl">{r.name}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/60">{r.role}</div>
            </div>
            <div className="mt-12 flex items-center justify-center gap-4">
              <button
                onClick={() => setIdx((i) => (i - 1 + reviews.length) % reviews.length)}
                className="grid h-12 w-12 place-items-center rounded-full glass-dark transition hover:bg-rose-gold/30"
                aria-label="Previous"
              ><ChevronLeft className="h-5 w-5" /></button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === idx ? "w-10 bg-rose-gold" : "w-2 bg-white/30"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIdx((i) => (i + 1) % reviews.length)}
                className="grid h-12 w-12 place-items-center rounded-full glass-dark transition hover:bg-rose-gold/30"
                aria-label="Next"
              ><ChevronRight className="h-5 w-5" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rv, i) => (
            <Reveal key={rv.name} delay={i * 80}>
              <div className="h-full rounded-3xl bg-card p-8 shadow-soft lift">
                <div className="flex gap-1 text-rose-gold-deep">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-5 text-foreground/80">"{rv.text}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-display text-lg">{rv.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/60">{rv.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
