import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import {
  ADDRESS, CALL_URL, CALL_2_URL, INSTAGRAM_HANDLE, INSTAGRAM_URL,
  MAP_EMBED, PHONE, PHONE_2, WHATSAPP_URL,
} from "@/lib/assets";
import { MapPin, Phone, Instagram, Clock, ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Glamour Beauty Zone" },
      { name: "description", content: "Book your appointment at Glamour Beauty Zone, Majra Road, Machhiwara Sahib. Call 7986177501 or message us on WhatsApp." },
      { property: "og:title", content: "Contact Glamour Beauty Zone" },
      { property: "og:description", content: "Visit us in Machhiwara Sahib or book on WhatsApp." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "Bridal Makeup", date: "", notes: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Glamour Beauty Zone! I'd like to book an appointment.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0ADate: ${form.date}%0ANotes: ${form.notes}`;
    window.open(`https://wa.me/917986177501?text=${text}`, "_blank");
  };

  return (
    <>
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 -z-10 bg-gradient-luxe" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-rose-gold-deep">Visit · Call · Book</span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
              Let's <em className="shimmer-text not-italic">create</em> something beautiful.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: MapPin, title: "Visit", body: ADDRESS, href: "https://maps.google.com/?q=Machhiwara+Sahib" },
            { icon: Phone, title: "Call", body: `+91 ${PHONE}`, href: CALL_URL },
            { icon: Phone, title: "Call", body: `+91 ${PHONE_2}`, href: CALL_2_URL },
            { icon: MessageCircle, title: "WhatsApp", body: "Tap to message", href: WHATSAPP_URL },
            { icon: Instagram, title: "Instagram", body: `@${INSTAGRAM_HANDLE}`, href: INSTAGRAM_URL },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <a href={c.href} target="_blank" rel="noreferrer" className="group block h-full rounded-3xl bg-card p-6 shadow-soft lift">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-rose text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-xs uppercase tracking-[0.25em] text-foreground/60">{c.title}</div>
                <div className="mt-2 text-sm text-foreground/90">{c.body}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-card p-8 shadow-luxe sm:p-10">
              <h2 className="font-display text-3xl">Book an appointment</h2>
              <p className="mt-2 text-sm text-foreground/70">Fill the form — we'll confirm on WhatsApp.</p>
              <form onSubmit={submit} className="mt-8 grid gap-4 sm:grid-cols-2">
                <Field label="Your name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Field label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-[0.2em] text-foreground/60">Service</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-rose-gold"
                  >
                    {["Bridal Makeup", "Party Makeup", "HD Makeup", "Hair Styling", "Hair Coloring", "Hair Spa", "Keratin / Smoothening", "Skin Care", "Nails / Extensions", "Academy Enquiry"].map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <Field label="Preferred date" type="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
                <Field label="Notes (optional)" value={form.notes} onChange={(v) => setForm({ ...form, notes: v })} />
                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm text-primary-foreground shadow-luxe transition hover:bg-rose-gold-deep sm:col-span-2"
                >
                  Send Request <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-[2rem] shadow-luxe">
                <iframe
                  title="Map"
                  src={MAP_EMBED}
                  width="100%"
                  height="360"
                  loading="lazy"
                  className="block border-0"
                />
              </div>
              <div className="rounded-[2rem] bg-gradient-noir p-8 text-primary-foreground shadow-luxe">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-rose-gold" />
                  <h3 className="font-display text-2xl">Opening hours</h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-white/80">
                  <li className="flex justify-between border-b border-white/10 pb-3"><span>Monday – Saturday</span><span>9:00 — 21:00</span></li>
                  <li className="flex justify-between border-b border-white/10 pb-3"><span>Sunday</span><span>10:00 — 19:00</span></li>
                  <li className="flex justify-between"><span>Bridal Bookings</span><span>By appointment</span></li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label, value, onChange, type = "text", required,
}: {
  label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-foreground/60">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-rose-gold"
      />
    </div>
  );
}
