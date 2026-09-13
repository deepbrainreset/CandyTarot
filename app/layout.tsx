import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Candy Tarot — Lecturas de tarot y astrología con Emilia Marsicano", description: "Lecturas íntimas de tarot, carta natal y sinastría con Emilia Marsicano. Un espacio de claridad, intuición y escucha.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es"><body>{children}</body></html>; }
