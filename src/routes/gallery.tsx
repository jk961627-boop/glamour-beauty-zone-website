import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { photos } from "@/lib/assets";
import { X } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Glamour Beauty Zone" },
      { name: "description", content: "A curated gallery of bridal makeup, hair styling, transformations and student certifications from Glamour Beauty Zone." },
      { property: "og:title", content: "Gallery — Glamour Beauty Zone" },
      { property: "og:description", content: "Bridal artistry, hair couture and academy moments." },
    ],
  }),
  component: Gallery,
});

type Item = { src: string; cat: string; tall?: boolean };

const items: Item[] = [
  { src: photos.brideVeil, cat: "Bridal Makeup", tall: true },
  { src: photos.bridePortrait, cat: "Bridal Makeup" },
  { src: photos.hairUpdo, cat: "Hair Styling", tall: true },
  { src: photos.brideRed, cat: "Bridal Makeup" },
  { src: photos.braidPink, cat: "Hair Styling", tall: true },
  { src: photos.partyMakeup, cat: "Party Makeup" },
  { src: photos.brideSide, cat: "Bridal Makeup", tall: true },
  { src: photos.hairColor, cat: "Hair Transformation" },
  { src: photos.certHarpreet, cat: "Student Certifications" },
  { src: photos.certLetter, cat: "Student Certifications" },
  { src: photos.b1, cat: "Bridal Makeup" },
{ src: photos.b2, cat: "Bridal Makeup" },
{ src: photos.b3, cat: "Bridal Makeup" },
{ src: photos.b4, cat: "Bridal Makeup" },
{ src: photos.b5, cat: "Bridal Makeup" },
{ src: photos.b6, cat: "Bridal Makeup" },
{ src: photos.b7, cat: "Bridal Makeup" },
{ src: photos.b8, cat: "Bridal Makeup" },
{ src: photos.b9, cat: "Bridal Makeup" },
{ src: photos.b10, cat: "Bridal Makeup" },
{ src: photos.b11, cat: "Bridal Makeup" },
{ src: photos.b12, cat: "Bridal Makeup" },
{ src: photos.b13, cat: "Bridal Makeup" },
{ src: photos.b14, cat: "Bridal Makeup" },
{ src: photos.b15, cat: "Bridal Makeup" },
{ src: photos.b16, cat: "Bridal Makeup" },
{ src: photos.b17, cat: "Bridal Makeup" },
{ src: photos.c1, cat: "Student Certifications" },
{ src: photos.c2, cat: "Student Certifications" },
{ src: photos.c3, cat: "Student Certifications" },
{ src: photos.h1, cat: "Hair Styling" },
{ src: photos.h2, cat: "Hair Styling" },
{ src: photos.h3, cat: "Hair Styling" },
{ src: photos.h4, cat: "Hair Styling" },
{ src: photos.h5, cat: "Hair Styling" },
{ src: photos.h6, cat: "Hair Styling" },
{ src: photos.h7, cat: "Hair Styling" },
{ src: photos.h8, cat: "Hair Styling" },
{ src: photos.h9, cat: "Hair Styling" },
{ src: photos.h10, cat: "Hair Styling" },
{ src: photos.h11, cat: "Hair Styling" },
{ src: photos.h12, cat: "Hair Styling" },
{ src: photos.h13, cat: "Hair Styling" },
{ src: photos.h14, cat: "Hair Styling" },
{ src: photos.h15, cat: "Hair Styling" },
{ src: photos.h16, cat: "Hair Styling" },
{ src: photos.h17, cat: "Hair Styling" },
{ src: photos.h18, cat: "Hair Styling" },
{ src: photos.h19, cat: "Hair Styling" },
{ src: photos.h20, cat: "Hair Styling" },
{ src: photos.h21, cat: "Hair Styling" },
{ src: photos.h22, cat: "Hair Styling" },
{ src: photos.h23, cat: "Hair Styling" },
{ src: photos.h24, cat: "Hair Styling" },
{ src: photos.l1, cat: "Lash Extensions" },
{ src: photos.l2, cat: "Lash Extensions" },
{ src: photos.l3, cat: "Lash Extensions" },
{ src: photos.l4, cat: "Lash Extensions" },
{ src: photos.l5, cat: "Lash Extensions" },
{ src: photos.l6, cat: "Lash Extensions" },
{ src: photos.l7, cat: "Lash Extensions" },
{ src: photos.n1, cat: "Nail Extensions" },
{ src: photos.n2, cat: "Nail Extensions" },
{ src: photos.n3, cat: "Nail Extensions" },
{ src: photos.n4, cat: "Nail Extensions" },
{ src: photos.n5, cat: "Nail Extensions" },
{ src: photos.n6, cat: "Nail Extensions" },
{ src: photos.p1, cat: "Party Makeup" },
{ src: photos.p2, cat: "Party Makeup" },
{ src: photos.p3, cat: "Party Makeup" },
{ src: photos.p4, cat: "Party Makeup" },
{ src: photos.p5, cat: "Party Makeup" },
{ src: photos.p6, cat: "Party Makeup" },
{ src: photos.p7, cat: "Party Makeup" },
{ src: photos.p8, cat: "Party Makeup" },
{ src: photos.p9, cat: "Party Makeup" },
{ src: photos.p10, cat: "Party Makeup" },
{ src: photos.p11, cat: "Party Makeup" },
{ src: photos.p12, cat: "Party Makeup" },
{ src: photos.p13, cat: "Party Makeup" },
{ src: photos.p14, cat: "Party Makeup" },
{ src: photos.p15, cat: "Party Makeup" },
];

const cats = [
  "All",
  "Bridal Makeup",
  "Hair Styling",
  "Party Makeup",
  "Lash Extensions",
  "Nail Extensions",
  "Student Certifications",
] as const;

function Gallery() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <section className="relative pt-40 pb-12">
        <div className="absolute inset-0 -z-10 bg-gradient-luxe" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">The Gallery</span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
              Moments from our <em className="shimmer-text not-italic">studio</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2.5 text-sm transition ${
                active === c
                  ? "bg-foreground text-primary-foreground"
                  : "border border-border bg-card text-foreground/70 hover:bg-cream"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {filtered.map((it, i) => (
            <Reveal key={it.src + i} delay={(i % 6) * 60}>
              <button
                onClick={() => setLightbox(it.src)}
                className="group mb-5 block w-full overflow-hidden rounded-3xl bg-card shadow-soft"
              >
                <div className={`relative ${it.tall ? "aspect-[3/4]" : "aspect-[4/5]"} overflow-hidden`}>
                  <img
                    src={it.src}
                    alt={it.cat}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-wider text-foreground opacity-0 transition group-hover:opacity-100">
                    {it.cat}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-xl animate-reveal"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full glass-dark text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[95vw] rounded-3xl object-contain shadow-luxe" />
        </div>
      )}
    </>
  );
}
