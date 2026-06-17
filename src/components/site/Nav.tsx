import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CALL_URL } from "@/lib/assets";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/academy", label: "Academy" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-rose text-primary-foreground shadow-soft">
              <span className="font-display text-lg leading-none">G</span>
            </div>
            <div className="min-w-0">
              <div className="font-display text-lg leading-none tracking-tight">
                Glamour
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Beauty Zone
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-4 py-2 text-sm text-foreground/80 transition hover:bg-cream hover:text-foreground"
                activeProps={{ className: "text-foreground bg-cream" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={CALL_URL}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-primary-foreground transition hover:bg-rose-gold-deep"
            >
              <Phone className="h-4 w-4" /> Book Now
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 glass rounded-3xl p-4 shadow-soft lg:hidden animate-reveal">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base hover:bg-cream"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={CALL_URL}
                className="mt-2 rounded-2xl bg-foreground px-4 py-3 text-center text-primary-foreground"
              >
                Call 7986177501
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
