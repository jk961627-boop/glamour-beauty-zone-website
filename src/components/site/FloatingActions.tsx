import { Phone, MessageCircle } from "lucide-react";
import { CALL_URL, WHATSAPP_URL } from "@/lib/assets";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe transition hover:scale-110"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full animate-pulse-ring" />
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={CALL_URL}
        className="grid h-14 w-14 place-items-center rounded-full bg-foreground text-primary-foreground shadow-luxe transition hover:scale-110"
        aria-label="Call"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
