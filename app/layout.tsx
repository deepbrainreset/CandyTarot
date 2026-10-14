import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://candytarot.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Candy Tarot | Tarot y astrología online con Emilia Marsicano",
  description: "Lecturas de tarot, carta natal, sinastría y acompañamiento lunar con Emilia Marsicano. Atención online desde Entre Ríos para Argentina, Latinoamérica, EE. UU. y España.",
  keywords: ["tarot online", "tarot Argentina", "carta natal online", "sinastría", "astrología online", "Emilia Marsicano", "Candy Tarot"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "es_AR", url: siteUrl, siteName: "Candy Tarot", title: "Candy Tarot | Tarot y astrología online", description: "Una lectura clara, íntima y profesional para tu momento. Con Emilia Marsicano.", images: [{ url: "/emilia.jpg", width: 695, height: 960, alt: "Emilia Marsicano — Candy Tarot" }] },
  twitter: { card: "summary_large_image", title: "Candy Tarot | Tarot y astrología online", description: "Lecturas de tarot, carta natal y sinastría con Emilia Marsicano.", images: ["/emilia.jpg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "ProfessionalService", "@id": `${siteUrl}/#business`, name: "Candy Tarot", url: siteUrl, image: `${siteUrl}/emilia.jpg`, description: "Servicios online de tarot y astrología con Emilia Marsicano.", founder: { "@type": "Person", name: "Emilia Marsicano", jobTitle: "Tarotista y astróloga", sameAs: ["https://www.tiktok.com/@emiliamarsicano"] }, areaServed: ["Argentina", "Latinoamérica", "Estados Unidos", "España"], knowsAbout: ["Tarot de Marsella", "Astrología natal", "Sinastría"], hasOfferCatalog: { "@type": "OfferCatalog", name: "Lecturas online", itemListElement: [
      { "@type": "Offer", priceCurrency: "ARS", price: "15000", itemOffered: { "@type": "Service", name: "Una pregunta puntual" } },
      { "@type": "Offer", priceCurrency: "ARS", price: "38000", itemOffered: { "@type": "Service", name: "Lectura de amor" } },
      { "@type": "Offer", priceCurrency: "ARS", price: "38000", itemOffered: { "@type": "Service", name: "Lectura de trabajo" } },
      { "@type": "Offer", priceCurrency: "ARS", price: "38000", itemOffered: { "@type": "Service", name: "Propósito y decisiones" } },
      { "@type": "Offer", priceCurrency: "ARS", price: "58000", itemOffered: { "@type": "Service", name: "Lectura general" } },
      { "@type": "Offer", priceCurrency: "ARS", price: "95000", itemOffered: { "@type": "Service", name: "Carta natal" } },
      { "@type": "Offer", priceCurrency: "ARS", price: "115000", itemOffered: { "@type": "Service", name: "Sinastría de pareja" } },
      { "@type": "Offer", priceCurrency: "ARS", price: "135000", itemOffered: { "@type": "Service", name: "Tarot + carta natal" } }
    ] } },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Candy Tarot", publisher: { "@id": `${siteUrl}/#business` }, inLanguage: "es" },
    { "@type": "FAQPage", "@id": `${siteUrl}/#faq`, mainEntity: [
      { "@type": "Question", name: "¿Cómo recibo mi lectura?", acceptedAnswer: { "@type": "Answer", text: "Las sesiones se coordinan online. Recibes las indicaciones por mensaje directo y, según el servicio, un audio y/o un PDF para volver a escuchar tu lectura." } },
      { "@type": "Question", name: "¿Necesito saber mi hora de nacimiento?", acceptedAnswer: { "@type": "Answer", text: "Para una carta natal o una sinastría, la hora mejora la precisión del mapa. Si no la sabes, podemos empezar por una lectura de tarot." } },
      { "@type": "Question", name: "¿El tarot predice el futuro?", acceptedAnswer: { "@type": "Answer", text: "Lo usamos como una herramienta simbólica de reflexión y orientación. No reemplaza atención médica, psicológica, legal o financiera, ni toma decisiones por ti." } }
    ] }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>; }
