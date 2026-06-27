import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { FloatingActions } from "../components/site/FloatingActions";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm text-primary-foreground transition hover:bg-rose-gold-deep"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please refresh or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-foreground px-5 py-2.5 text-sm text-primary-foreground"
          >Try again</button>
          <a href="/" className="rounded-full border border-input px-5 py-2.5 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Glamour Beauty Zone — Luxury Salon & Beauty Academy in Machhiwara" },
      { name: "description", content: "Premium salon, bridal makeup studio and beauty academy in Machhiwara Sahib. Founded by Karan Singh, 8+ years of artistry." },
      { name: "author", content: "Glamour Beauty Zone" },
      { property: "og:title", content: "Glamour Beauty Zone — Where Beauty Meets Perfection" },
      { property: "og:description", content: "Luxury salon & beauty academy in Machhiwara Sahib, Punjab." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://glamourbeautyzone.in/og-image.jpg" },
      { property: "og:url", content: "https://glamourbeautyzone.in" },
      { name: "twitter:title", content: "Glamour Beauty Zone — Luxury Salon & Beauty Academy in Machhiwara" },
      { name: "twitter:description", content: "Premium salon, bridal makeup studio and beauty academy in Machhiwara Sahib." },
      { name: "twitter:image", content: "https://glamourbeautyzone.in/og-image.jpg" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",

      },
      { rel: "canonical", href: "https://glamourbeautyzone.in" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          "name": "Glamour Beauty Zone",
          "image": "https://glamourbeautyzone.in/storefront.jpg",
          "description": "Premium salon, bridal makeup studio and beauty academy in Machhiwara Sahib.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Majra Road, Near Machhiwara Bus Stand",
            "addressLocality": "Machhiwara",
            "addressRegion": "Punjab",
            "postalCode": "141115",
            "addressCountry": "IN"
          },
          "url": "https://glamourbeautyzone.in"
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
