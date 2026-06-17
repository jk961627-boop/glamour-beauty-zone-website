import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { WHATSAPP_URL } from "@/lib/assets";
import {
  Scissors, Palette, Droplets, Flower2, Sparkles, Crown, Brush,
  Wand2, Heart, Hand, Footprints, Eye, Gem, Waves, ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Glamour Beauty Zone" },
      { name: "description", content: "Hair, bridal makeup, skin care, nails and spa rituals — all crafted with premium products in Machhiwara." },
      { property: "og:title", content: "Services — Glamour Beauty Zone" },
      { property: "og:description", content: "Premium hair, bridal, skin and spa services." },
    ],
  }),
  component: Services,
});

const categories = [
  {
    title: "Hair Couture",
    items: [
      { icon: Scissors, name: "Hair Styling", desc: "Cuts, blowouts, special occasion finishes." },
      { icon: Palette, name: "Hair Coloring", desc: "Global, highlights, balayage, ombré." },
      { icon: Droplets, name: "Hair Treatments", desc: "Repair, hydration, scalp wellness." },
      { icon: Flower2, name: "Hair Spa", desc: "Luxury hair spas with premium serums." },
      { icon: Waves, name: "Keratin", desc: "Smooth, manageable, frizz-free shine." },
      { icon: Sparkles, name: "Botox Treatment", desc: "Deep restoration for damaged hair." },
      { icon: Wand2, name: "Smoothening", desc: "Silky straight texture, long-lasting." },
      { icon: Brush, name: "Rebonding", desc: "Pin-straight finish for any hair type." },
    ],
  },
  {
    title: "Makeup Artistry",
    items: [
      { icon: Crown, name: "Bridal Makeup", desc: "Signature wedding looks, every ritual." },
      { icon: Sparkles, name: "Party Makeup", desc: "Glam-ready in under an hour." },
      { icon: Brush, name: "HD Makeup", desc: "Camera-ready high-definition finish." },
      { icon: Wand2, name: "Airbrush Makeup", desc: "Flawless, weightless, all-day wear." },
    ],
  },
  {
    title: "Skin & Beauty",
    items: [
      { icon: Heart, name: "Skin Care", desc: "Customised consultations & routines." },
      { icon: Sparkles, name: "Facials", desc: "Brightening, anti-ageing, hydration." },
      { icon: Droplets, name: "Cleanup", desc: "Deep pore cleansing & glow rituals." },
      { icon: Wand2, name: "Threading", desc: "Precision brow & facial threading." },
      { icon: Flower2, name: "Waxing", desc: "Gentle full-body & sensitive waxing." },
    ],
  },
  {
    title: "Nails & Lash",
    items: [
      { icon: Hand, name: "Manicure", desc: "Classic, French and luxe spa manicures." },
      { icon: Footprints, name: "Pedicure", desc: "Therapeutic spa pedicures with aroma." },
      { icon: Gem, name: "Nail Extensions", desc: "Gel & acrylic in any length & shape." },
      { icon: Sparkles, name: "Nail Art", desc: "Couture artistry, hand-painted finishes." },
      { icon: Eye, name: "Eyelash Extensions", desc: "Classic, hybrid and volume lashes." },
      { icon: Flower2, name: "Spa Packages", desc: "Curated rituals for total renewal." },
    ],
  },
];

function Services() {
  return (
    <>
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-luxe" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">The Menu</span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
              Signature <em className="shimmer-text not-italic">services</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-foreground/70">
              Every service is personalised — your hair, your skin, your story.
              Premium products. Expert hands. Unhurried time.
            </p>
          </Reveal>
        </div>
      </section>

      {categories.map((cat, ci) => (
        <section key={cat.title} className={ci % 2 ? "bg-cream py-20" : "py-20"}>
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Chapter {String(ci + 1).padStart(2, "0")}</span>
                  <h2 className="mt-2 font-display text-4xl sm:text-5xl">{cat.title}</h2>
                </div>
                <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-rose-gold/40 to-transparent md:block" />
              </div>
            </Reveal>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((it, i) => (
                <Reveal key={it.name} delay={i * 60}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 lift">
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-rose opacity-0 blur-3xl transition group-hover:opacity-30" />
                    <div className="relative flex h-full flex-col">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-luxe">
                        <it.icon className="h-5 w-5 text-rose-gold-deep" />
                      </div>
                      <h3 className="mt-5 font-display text-2xl">{it.name}</h3>
                      <p className="mt-2 flex-1 text-sm text-foreground/70">{it.desc}</p>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-rose-gold-deep transition hover:gap-2"
                      >
                        Book Now <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
