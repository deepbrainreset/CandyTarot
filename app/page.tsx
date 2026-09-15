"use client";

import { useEffect, useState } from "react";

type MarketKey = "ar" | "latam" | "us" | "es";

type Market = {
  key: MarketKey;
  label: string;
  currency: string;
  note: string;
  priceNote: string;
};

type Service = {
  number: string;
  card: string;
  title: string;
  eyebrow: string;
  detail: string;
  includes: string;
  prices: Record<MarketKey, string>;
  image: string;
  alt: string;
  featured?: boolean;
};

type Constellation = {
  name: string;
  points: Array<[number, number]>;
  lines: Array<[number, number]>;
};

const tarotSourceUrl = "https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal";

const markets: Market[] = [
  {
    key: "ar",
    label: "Argentina",
    currency: "ARS",
    note: "Valores locales en pesos argentinos.",
    priceNote: "Argentina · precios de referencia en ARS. Se confirman al reservar.",
  },
  {
    key: "latam",
    label: "Latinoamérica",
    currency: "USD",
    note: "Precio regional en dólares para el resto de Latinoamérica.",
    priceNote: "Latinoamérica · precio regional en USD. La conversión local se confirma al reservar.",
  },
  {
    key: "us",
    label: "EE. UU.",
    currency: "USD",
    note: "Precio internacional en dólares para clientes en Estados Unidos.",
    priceNote: "Estados Unidos · precios en USD. Se confirman al reservar.",
  },
  {
    key: "es",
    label: "España",
    currency: "EUR",
    note: "Precio internacional en euros para clientes en España.",
    priceNote: "España · precios en EUR. Se confirman al reservar.",
  },
];
const latinAmericanCountryCodes = new Set([
  "AG",
  "BB",
  "BO",
  "BR",
  "BZ",
  "CL",
  "CO",
  "CR",
  "CU",
  "DM",
  "DO",
  "EC",
  "GD",
  "GF",
  "GT",
  "GY",
  "HN",
  "HT",
  "JM",
  "KN",
  "LC",
  "MX",
  "NI",
  "PA",
  "PE",
  "PY",
  "SR",
  "SV",
  "TT",
  "UY",
  "VC",
  "VE",
]);

function marketFromCountry(country: string): MarketKey | null {
  const normalizedCountry = country.trim().toUpperCase();

  if (normalizedCountry === "AR") return "ar";
  if (normalizedCountry === "US") return "us";
  if (normalizedCountry === "ES") return "es";
  if (latinAmericanCountryCodes.has(normalizedCountry)) return "latam";

  return null;
}


type ZodiacSign = {
  key: string;
  name: string;
  glyph: string;
  element: string;
  top: string;
  left: string;
};

type ZodiacInsight = {
  title: string;
  body: string;
  sourceTopic: string;
  sourceUrl: string;
};

const zodiacSigns: ZodiacSign[] = [
  { key: "aries", name: "Aries", glyph: "♈", element: "Fuego", top: "9%", left: "50%" },
  { key: "tauro", name: "Tauro", glyph: "♉", element: "Tierra", top: "14%", left: "68%" },
  { key: "geminis", name: "Géminis", glyph: "♊", element: "Aire", top: "27%", left: "82%" },
  { key: "cancer", name: "Cáncer", glyph: "♋", element: "Agua", top: "47%", left: "86%" },
  { key: "leo", name: "Leo", glyph: "♌", element: "Fuego", top: "68%", left: "82%" },
  { key: "virgo", name: "Virgo", glyph: "♍", element: "Tierra", top: "84%", left: "68%" },
  { key: "libra", name: "Libra", glyph: "♎", element: "Aire", top: "90%", left: "50%" },
  { key: "escorpio", name: "Escorpio", glyph: "♏", element: "Agua", top: "84%", left: "32%" },
  { key: "sagitario", name: "Sagitario", glyph: "♐", element: "Fuego", top: "68%", left: "18%" },
  { key: "capricornio", name: "Capricornio", glyph: "♑", element: "Tierra", top: "47%", left: "14%" },
  { key: "acuario", name: "Acuario", glyph: "♒", element: "Aire", top: "27%", left: "18%" },
  { key: "piscis", name: "Piscis", glyph: "♓", element: "Agua", top: "14%", left: "32%" },
];

const zodiacInsights: Record<string, ZodiacInsight[]> = {
  aries: [
    {
      title: "Cuando Aries toma distancia",
      body: "El TikTok de Emilia abre la pregunta por qué hacer cuando Aries se aleja. Para hoy: deja que la iniciativa tenga respuesta; una señal clara vale más que perseguir una explicación.",
      sourceTopic: "Tema visible: qué hacer cuando Aries, Cáncer o Acuario se alejan",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7652860642348649749",
    },
    {
      title: "Leo y Aries: química con voluntad",
      body: "Otra publicación de Emilia vincula Leo y Aries. Si la chispa aparece, no la confundas con destino: mira si el entusiasmo se transforma en un encuentro que también te cuida.",
      sourceTopic: "Tema visible: Leo y Aries",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7132087228947287302",
    },
  ],
  tauro: [
    {
      title: "Tauro, observado sin apuro",
      body: "En las observaciones astrológicas de Emilia, Tauro aparece como una energía para mirar con atención y humor. Hoy: baja el ruido, revisa lo que sí se sostiene y decide desde lo concreto.",
      sourceTopic: "Tema visible: observaciones astrológicas · Tauro",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7080320788133399813",
    },
    {
      title: "Lo que merece permanecer",
      body: "La mirada sobre Tauro invita a distinguir constancia de inmovilidad. Algo puede darte seguridad sin pedirte que te quedes quieta: escucha qué parte de tu rutina todavía te nutre.",
      sourceTopic: "Tema visible: observaciones astrológicas · Tauro",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7080320788133399813",
    },
  ],
  geminis: [
    {
      title: "Conquistar a Géminis",
      body: "Emilia lleva el tema a la conquista de Géminis. Para hoy, una conversación viva, curiosidad y humor abren más puertas que un guion perfecto: deja espacio para que aparezca lo inesperado.",
      sourceTopic: "Tema visible: cómo conquistar a Géminis",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7280324049480224006",
    },
    {
      title: "La chispa necesita aire",
      body: "La energía geminiana se enciende con intercambio, no con control. Pregunta algo que de verdad quieras saber, escucha la respuesta y permite que el vínculo tenga movimiento.",
      sourceTopic: "Tema visible: cómo conquistar a Géminis",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7280324049480224006",
    },
  ],
  cancer: [
    {
      title: "Cuando Cáncer se aleja",
      body: "El video de Emilia plantea qué hacer cuando Cáncer toma distancia. Hoy no llenes el silencio con suposiciones: ofrece una puerta cálida y observa si del otro lado también hay presencia.",
      sourceTopic: "Tema visible: qué hacer cuando Aries, Cáncer o Acuario se alejan",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7652860642348649749",
    },
    {
      title: "Cuidar sin perseguir",
      body: "La sensibilidad necesita cuidado, pero no adivinación constante. Pregunta con ternura, protege tus límites y recuerda que acompañar a alguien no significa desaparecer de la escena.",
      sourceTopic: "Tema visible: qué hacer cuando Aries, Cáncer o Acuario se alejan",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7652860642348649749",
    },
  ],
  leo: [
    {
      title: "La presencia de Leo",
      body: "En el TikTok de Emilia sobre el hombre de Leo, la atención se vuelve una forma de lenguaje. Hoy reconoce lo que quieres expresar sin actuar un personaje para conseguir una respuesta.",
      sourceTopic: "Tema visible: hombre de Leo",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7125010634021801221",
    },
    {
      title: "Leo y Aries: una chispa visible",
      body: "En otra publicación, Emilia reúne Leo y Aries. La intensidad puede ser hermosa, pero la señal que importa es la que se sostiene después del primer impulso.",
      sourceTopic: "Tema visible: Leo y Aries",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7132087228947287302",
    },
  ],
  virgo: [
    {
      title: "Cuando Virgo se aleja",
      body: "Emilia reúne a Virgo, Sagitario y Libra alrededor de una pregunta: qué hacer cuando los signos se alejan. Para Virgo, antes de corregir cada detalle, mira qué conversación está faltando.",
      sourceTopic: "Tema visible: qué hacer cuando los signos se alejan",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7650263266299546901",
    },
    {
      title: "Virgo en observación",
      body: "En las observaciones astrológicas de Emilia también aparece Virgo. Tu atención al detalle es un recurso; úsala para leer lo concreto, no para fabricar certezas donde faltan respuestas.",
      sourceTopic: "Tema visible: observaciones astrológicas · Virgo",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7080320788133399813",
    },
  ],
  libra: [
    {
      title: "Libra frente a la distancia",
      body: "El video de Emilia abre para Libra la escena de los vínculos que toman distancia. Hoy busca equilibrio sin convertirte en la única persona que sostiene la armonía.",
      sourceTopic: "Tema visible: qué hacer cuando los signos se alejan",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7650263266299546901",
    },
    {
      title: "Elegir una conversación honesta",
      body: "La paz que depende de callarte sale cara. Una pregunta amable y directa puede cuidar mucho más que una respuesta diplomática que deja tus necesidades fuera del cuadro.",
      sourceTopic: "Tema visible: qué hacer cuando los signos se alejan",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7650263266299546901",
    },
  ],
  escorpio: [
    {
      title: "Escorpio: mirar lo que se mueve",
      body: "La publicación de Emilia está etiquetada con Escorpio y astrología. Para hoy, no confundas intensidad con certeza: observa qué emoción está pidiendo nombre antes de tomar una decisión.",
      sourceTopic: "Contenido visible etiquetado: #escorpio",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7146018517802847494",
    },
    {
      title: "Profundidad con elección",
      body: "Escorpio no necesita negar lo que siente para recuperar poder. Nombra la verdad que ya reconoces, cuida tu intimidad y decide qué merece seguir entrando en tu mundo.",
      sourceTopic: "Contenido visible etiquetado: #escorpio",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7146018517802847494",
    },
  ],
  sagitario: [
    {
      title: "Cuando Sagitario se aleja",
      body: "En el TikTok que reúne a Virgo, Sagitario y Libra, Emilia pregunta qué hacer ante la distancia. Hoy no achiques tu necesidad de libertad: conversa sobre ella antes de convertirla en fuga.",
      sourceTopic: "Tema visible: qué hacer cuando los signos se alejan",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7650263266299546901",
    },
    {
      title: "Sagitario en observación",
      body: "Una observación astrológica de Emilia incluye a Sagitario. Moverte no siempre es escapar: elige una dirección que te entusiasme y explica cómo acompañarte sin encerrarte.",
      sourceTopic: "Tema visible: observaciones astrológicas · Sagitario",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7080320788133399813",
    },
  ],
  capricornio: [
    {
      title: "Capricornio, sin solemnidad",
      body: "La publicación de Emilia mira a Capricornio desde el humor y la irreverencia. Hoy afloja la exigencia: no todo tiene que convertirse en una prueba de rendimiento para tener valor.",
      sourceTopic: "Tema visible: Capricornio · P2",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7051809417892744454",
    },
    {
      title: "Capricornio en observación",
      body: "Otra observación astrológica de Emilia incluye a Capricornio. Tu capacidad de sostener procesos es un recurso, no una condena: revisa qué responsabilidad elegiste y cuál heredaste.",
      sourceTopic: "Tema visible: observaciones astrológicas · Capricornio",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7080320788133399813",
    },
  ],
  acuario: [
    {
      title: "Cuando Acuario se aleja",
      body: "El TikTok de Emilia lleva a Acuario a la pregunta por la distancia. Hoy respeta el espacio sin convertirlo en desaparición: una comunicación breve y honesta puede cuidar el puente.",
      sourceTopic: "Tema visible: qué hacer cuando Aries, Cáncer o Acuario se alejan",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7652860642348649749",
    },
    {
      title: "Ser diferente también es vincularse",
      body: "Tu forma singular de procesar lo que sientes merece traducción, no aislamiento. Cuenta qué necesitas y deja que la otra persona decida si puede encontrarte ahí.",
      sourceTopic: "Tema visible: qué hacer cuando Aries, Cáncer o Acuario se alejan",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7652860642348649749",
    },
  ],
  piscis: [
    {
      title: "Cuando Piscis pierde el interés",
      body: "El TikTok de Emilia nombra una escena concreta: Piscis perdió el interés. Para hoy, escucha la baja de intensidad sin castigarte; la claridad también puede llegar cuando una fantasía se despide.",
      sourceTopic: "Tema visible: Piscis perdió el interés",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7325562811222969606",
    },
    {
      title: "Sensibilidad con límites",
      body: "Sentir mucho no obliga a sostener lo que ya se volvió confuso. Vuelve a tus señales internas, pregunta lo necesario y permite que un cierre abra espacio para algo más verdadero.",
      sourceTopic: "Tema visible: Piscis perdió el interés",
      sourceUrl: "https://www.tiktok.com/@emiliamarsicano/video/7325562811222969606",
    },
  ],
};


const services: Service[] = [
  {
    number: "0",
    card: "El Loco",
    title: "La pregunta",
    eyebrow: "Para cuando necesitas una señal concreta",
    detail: "Una lectura breve y directa para mirar una situación puntual, ordenar lo que sientes y salir del bucle mental.",
    includes: "1 pregunta · audio privado · 20 min",
    prices: { ar: "ARS 22.000", latam: "US$ 24", us: "US$ 39", es: "€ 29" },
    image: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1789461789/AhaTok__a6ac07e9-09c3-4dec-9e9a-0123c702702b__t67onu.jpg",
    alt: "El Loco del Tarot de Marsella",
  },
  {
    number: "II",
    card: "Dos de Copas",
    title: "Dos caminos",
    eyebrow: "Para decisiones y vínculos",
    detail: "Dos preguntas conectadas, una lectura con contexto y una devolución que te ayuda a distinguir deseo, miedo y posibilidad.",
    includes: "2 preguntas · audio privado · 35 min",
    prices: { ar: "ARS 36.000", latam: "US$ 39", us: "US$ 65", es: "€ 49" },
    featured: true,
    image: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1789461789/AhaTok__1d0e0d0d-3d74-4ca3-b87d-a5ca5dbdc33c__ufdnce.jpg",
    alt: "Tres de Espadas del Tarot de Marsella",
  },
  {
    number: "XXI",
    card: "El Mundo",
    title: "Tres preguntas",
    eyebrow: "Para mirar tu situación desde más de un ángulo",
    detail: "Tres preguntas conectadas para ordenar lo que estás viviendo, distinguir prioridades y llevarte una lectura con contexto, dirección y claridad.",
    includes: "3 preguntas · audio privado · 50 min",
    prices: { ar: "ARS 49.000", latam: "US$ 55", us: "US$ 89", es: "€ 69" },
    image: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1789461789/AhaTok_anwnl_10573570-60fb-47ce-969c-ff8e6a233cfd__rhvw01.jpg",
    alt: "El Mundo del Tarot de Marsella",
  },
  {
    number: "XVII",
    card: "La Estrella",
    title: "Mapa natal",
    eyebrow: "Para entender tu forma de estar en el mundo",
    detail: "Tu carta como mapa de tendencias, recursos y desafíos. Una lectura profunda, explicada en lenguaje claro y llevada a tu vida real.",
    includes: "carta natal · PDF · audio · 75 min",
    prices: { ar: "ARS 72.000", latam: "US$ 75", us: "US$ 149", es: "€ 89" },
    image: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1789463058/AhaTok_Mat%C3%ADas_P%C3%B3lvora_55753bbd-892d-4c1d-be7f-16416d6ec62b__qp9jnh.jpg",
    alt: "La Estrella del Tarot de Marsella",
  },
  {
    number: "VI",
    card: "Los Enamorados",
    title: "Sinastría",
    eyebrow: "Para mirar un vínculo con más honestidad",
    detail: "Dos cartas, una conversación sobre la dinámica compartida y herramientas para reconocer qué los acerca y qué necesita cuidado.",
    includes: "2 cartas · PDF · audio · 90 min",
    prices: { ar: "ARS 94.000", latam: "US$ 99", us: "US$ 199", es: "€ 129" },
    image: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1789462742/AhaTok_Page_of_Cards_1ed311f1-6d22-49ec-9d08-4c12c9816151__ewrvhu.jpg",
    alt: "Los Enamorados del Tarot de Marsella",
  },
  {
    number: "XXI",
    card: "El Mundo",
    title: "Sesión 360°",
    eyebrow: "La experiencia más completa",
    detail: "Tarot y astrología en una misma sesión para trabajar una pregunta central, tu momento actual y los próximos pasos posibles.",
    includes: "tarot + carta · audio · 90 min",
    prices: { ar: "ARS 118.000", latam: "US$ 125", us: "US$ 249", es: "€ 159" },
    featured: true,
    image: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1789461789/AhaTok_anwnl_10573570-60fb-47ce-969c-ff8e6a233cfd__rhvw01.jpg",
    alt: "El Mundo del Tarot de Marsella",
  },
  {
    number: "X",
    card: "La Rueda de la Fortuna",
    title: "Acompañamiento lunar",
    eyebrow: "Para no atravesar sola un cambio importante",
    detail: "Tres encuentros para revisar el ciclo, tomar decisiones con perspectiva y convertir una lectura en movimiento real.",
    includes: "3 sesiones · seguimiento · prioridad",
    prices: { ar: "ARS 220.000", latam: "US$ 229", us: "US$ 449", es: "€ 279" },
    image: "https://res.cloudinary.com/dw4k14vmn/image/upload/v1789462840/AhaTok_Milana.Rosenwald_e7907065-b450-4af4-97a0-4a01d5ac4bbf__hxe0ih.jpg",
    alt: "La Rueda de la Fortuna del Tarot de Marsella",
  },
];

const constellations: Constellation[] = [
  {
    name: "Aries",
    points: [[12, 67], [43, 48], [75, 56], [106, 38]],
    lines: [[0, 1], [1, 2], [2, 3]],
  },
  {
    name: "Tauro",
    points: [[15, 73], [38, 48], [63, 34], [88, 52], [119, 75], [58, 55], [76, 22]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6]],
  },
  {
    name: "Géminis",
    points: [[24, 19], [38, 50], [31, 84], [63, 24], [76, 51], [96, 86]],
    lines: [[0, 1], [1, 2], [3, 4], [4, 5], [0, 3], [1, 4]],
  },
  {
    name: "Cáncer",
    points: [[24, 25], [56, 18], [84, 41], [65, 77], [34, 62]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]],
  },
  {
    name: "Leo",
    points: [[18, 55], [31, 33], [53, 18], [70, 39], [53, 55], [31, 68], [17, 86], [84, 61], [108, 42], [127, 66]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [4, 7], [7, 8], [8, 9]],
  },
  {
    name: "Virgo",
    points: [[14, 76], [29, 53], [49, 34], [70, 38], [91, 15], [78, 57], [105, 70], [126, 85]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5], [5, 6], [6, 7]],
  },
  {
    name: "Libra",
    points: [[22, 29], [64, 23], [96, 51], [64, 80], [25, 69], [43, 51]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0], [0, 5], [5, 3]],
  },
  {
    name: "Escorpio",
    points: [[16, 27], [33, 39], [48, 52], [64, 61], [80, 53], [94, 36], [109, 47], [121, 68], [109, 85], [91, 90]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]],
  },
  {
    name: "Sagitario",
    points: [[18, 78], [42, 46], [64, 65], [90, 43], [113, 51], [73, 23], [77, 65], [103, 21], [126, 72]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [2, 6], [6, 7], [4, 8]],
  },
  {
    name: "Capricornio",
    points: [[18, 70], [37, 44], [62, 32], [85, 54], [108, 31], [125, 65], [92, 87], [59, 78]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0]],
  },
  {
    name: "Acuario",
    points: [[15, 31], [38, 49], [61, 29], [84, 52], [106, 33], [128, 61], [96, 76], [68, 58], [42, 79]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8]],
  },
  {
    name: "Piscis",
    points: [[18, 27], [40, 16], [57, 34], [45, 55], [27, 64], [17, 83], [44, 87], [65, 68], [84, 51], [107, 63], [126, 81], [116, 41], [94, 31]],
    lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12], [12, 8]],
  },
];

function ConstellationMark({ constellation, index }: { constellation: Constellation; index: number }) {
  return (
    <span className={"constellation constellation-" + (index + 1)}>
      <svg viewBox="0 0 140 100" role="presentation">
        {constellation.lines.map(([from, to], lineIndex) => {
          const [x1, y1] = constellation.points[from];
          const [x2, y2] = constellation.points[to];

          return <line key={lineIndex} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        {constellation.points.map(([cx, cy], pointIndex) => (
          <circle key={pointIndex} cx={cx} cy={cy} r={pointIndex % 3 === 0 ? 2.2 : 1.35} />
        ))}
      </svg>
      <small>{constellation.name}</small>
    </span>
  );
}

export default function Home() {
  const [market, setMarket] = useState<MarketKey | null>(null);
  const [regionSource, setRegionSource] = useState<"detected" | "fallback" | "detecting">("detecting");
  const [selectedZodiac, setSelectedZodiac] = useState("aries");
  const [selectedInsightIndex, setSelectedInsightIndex] = useState(0);
  const activeMarket = markets.find((item) => item.key === market) ?? null;
  const activeZodiac = zodiacSigns.find((sign) => sign.key === selectedZodiac) ?? zodiacSigns[0];
  const insightPool = zodiacInsights[activeZodiac.key] ?? [];
  const activeInsight = insightPool[selectedInsightIndex % (insightPool.length || 1)];

  const selectZodiac = (key: string) => {
    const pool = zodiacInsights[key] ?? [];
    let nextIndex = pool.length ? Math.floor(Math.random() * pool.length) : 0;

    if (key === selectedZodiac && pool.length > 1 && nextIndex === selectedInsightIndex) {
      nextIndex = (nextIndex + 1) % pool.length;
    }

    setSelectedZodiac(key);
    setSelectedInsightIndex(nextIndex);
  };

  useEffect(() => {
    let cancelled = false;

    fetch("/api/geo", { cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("No se pudo detectar la región");
        return response.json() as Promise<{ country?: string }>;
      })
      .then(({ country = "" }) => {
        if (cancelled) return;

        const detectedMarket = marketFromCountry(country);
        setMarket(detectedMarket);
        setRegionSource(detectedMarket ? "detected" : "fallback");
      })
      .catch(() => {
        if (!cancelled) {
          setMarket(null);
          setRegionSource("fallback");
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main>
      <div className="sky-constellations" aria-hidden="true">
        <div className="shooting-stars">
          <span className="shooting-star shooting-star-1" />
          <span className="shooting-star shooting-star-2" />
          <span className="shooting-star shooting-star-3" />
        </div>
        {constellations.map((constellation, index) => (
          <ConstellationMark key={constellation.name} constellation={constellation} index={index} />
        ))}
      </div>

      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Candy Tarot, inicio">
          <img src="/candy-tarot-logo.png" alt="Candy Tarot" />
        </a>
        <div className="nav-links">
          <a href="#lecturas">Lecturas</a>
          <a href="#metodo">El método</a>
          <a href="#emilia">Emilia</a>
        </div>
        <a className="outline-cta" href="#reservar">
          Elegir lectura <span>↗</span>
        </a>
      </nav>

      <section id="inicio" className="hero shell">
        <div className="hero-copy">
          <p className="kicker"><span className="sparkle">✦</span> Tarot · Astrología · Claridad</p>
          <h1>No necesitas otra respuesta.<br /><em>Necesitas verte.</em></h1>
          <p className="hero-lede">Lecturas íntimas para ponerle nombre a lo que estás viviendo, escuchar tu intuición y volver a elegir desde un lugar más claro.</p>
          <div className="hero-actions">
            <a className="button button-solid" href="#lecturas">Ver lecturas <span>↓</span></a>
            <a className="quiet-link" href="https://www.tiktok.com/@emiliamarsicano" target="_blank" rel="noreferrer">Conoce a Emilia <span>↗</span></a>
          </div>
          <div className="proof-row"><span>2,9 M me gusta en TikTok</span><i>·</i><span>15 años de práctica</span><i>·</i><span>Atención online</span><i>·</i><span>Argentina · Latam · EE. UU. · España</span></div>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame"><img src="/emilia.jpg" alt="Emilia Marsicano" /></div>
          <div className="portrait-label"><span>Emilia Marsicano</span><small>lecturas con presencia</small></div>
          <div className="floating-card floating-card-top">
            <span>carta guía</span>
            <img src={services[3].image} alt="" />
            <em>La Estrella · XVII</em>
          </div>
          <div className="floating-card floating-card-bottom"><span>tu mapa es único</span><b>☾</b></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">TAROT <span>✦</span> ASTROLOGÍA <span>✦</span> INTUICIÓN <span>✦</span> CLARIDAD <span>✦</span> TAROT <span>✦</span> ASTROLOGÍA <span>✦</span> INTUICIÓN <span>✦</span> CLARIDAD <span>✦</span></div>
      </div>

      <div className="market-strip">
        <div className="shell market-strip-inner"><span>Argentina</span><i>·</i><span>Latinoamérica</span><i>·</i><span>Comunidad latina en EE. UU.</span><i>·</i><span>España</span><b>100% online · horarios coordinados por zona</b></div>
      </div>

      <section id="lecturas" className="readings shell section">
        <div className="section-heading">
          <div><p className="kicker">Elige tu puerta de entrada</p><h2>Una lectura<br /><em>para tu momento.</em></h2></div>
          <p className="section-note">Cada servicio tiene una carta guía del Tarot de Marsella. No es una promesa de destino: es una imagen para entrar a la experiencia con una intención clara.</p>
        </div>

        <div className="market-location" aria-live="polite">
          <div className="market-location-copy">
            <span>Precio según tu ubicación{activeMarket ? ` · ${activeMarket.currency}` : ""}</span>
            <strong>{activeMarket?.label ?? "Ubicación no detectada"}</strong>
            <small>{activeMarket?.note ?? "El precio final se confirma al reservar cuando no podemos validar el país."}</small>
            <small className="market-source">
              {regionSource === "detected"
                ? "País detectado automáticamente por la conexión."
                : regionSource === "fallback"
                  ? "No pudimos validar el país; el precio final se confirma al reservar."
                  : "Detectando país…"}
            </small>
          </div>
          <span className="market-location-lock">
            {activeMarket ? "Precios regionales" : "Precio a confirmar"}
          </span>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className={service.featured ? "service-card service-card-featured" : "service-card"} key={service.title}>
              <div className="card-head"><span className="card-number">{service.number}</span><span className="card-suit">✦</span></div>
              <div className="service-card-visual">
                <span className="card-badge">Carta guía</span>
                <img src={service.image} alt={service.alt} loading="lazy" decoding="async" />
                <span className="card-roman">{service.number}</span>
              </div>
              <div className="service-copy">
                <p className="service-eyebrow">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </div>
              <div className="service-foot"><span>{service.includes}</span><strong>{activeMarket ? service.prices[activeMarket.key] : "Consultar"}</strong></div>
              <a className="service-link" href="#reservar">Quiero esta lectura <span>↗</span></a>
            </article>
          ))}
        </div>

        <p className="tarot-credit">Cartas guía seleccionadas para Candy Tarot · referencias históricas del Tarot de Marsella en <a href={tarotSourceUrl} target="_blank" rel="noreferrer">Wikimedia Commons ↗</a></p>
        <p className="price-note">
          {activeMarket
            ? `${activeMarket.priceNote} · lecturas online`
            : "Precio personalizado según ubicación · se confirma al reservar · lecturas online"}
        </p>
      </section>

      <section id="metodo" className="method section">
        <div className="shell method-inner">
          <div className="method-title"><p className="kicker">La experiencia Candy Tarot</p><h2>Menos ruido.<br /><em>Más lectura.</em></h2></div>
          <div className="method-copy">
            <p>Con 15 años de práctica y una comunidad que ya reúne 2,9 M de me gusta en TikTok, cada lectura conserva el cuidado de un servicio 1:1. Los valores se adaptan por mercado para que la propuesta sea clara en Argentina, Latinoamérica, EE. UU. y España.</p>
            <div className="method-points">
              <div><span>01</span><strong>Preparación</strong><p>Antes de encontrarnos, recibo tu pregunta y el contexto que quieras compartir.</p></div>
              <div><span>02</span><strong>Lectura</strong><p>Tarot y astrología se traducen a una conversación clara, cálida y sin respuestas prefabricadas.</p></div>
              <div><span>03</span><strong>Integración</strong><p>Te llevas una devolución para volver a escuchar cuando necesites perspectiva.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="zodiac-section section" aria-label="Atlas zodiacal interactivo">
        <div className="shell zodiac-layout">
          <div className="zodiac-intro">
            <p className="kicker">El atlas de tu cielo</p>
            <h2>Tu historia<br /><em>tiene capas.</em></h2>
            <p className="zodiac-copy">Entrá al mapa celeste y tocá un signo. Cada toque activa una ficha editorial aleatoria basada en un video público de Emilia asociado a ese signo, con el enlace al original para que puedas verlo completo.</p>
            <p className="zodiac-instruction"><span>✦</span> Tocá un signo para revelar una ficha aleatoria.</p>
            <a className="quiet-link light-link" href="#lecturas">Explorar una lectura <span>↗</span></a>
          </div>
          <div className="zodiac-experience">
            <div className="zodiac-cloud">
              <div className="zodiac-game-hud" aria-hidden="true">
                <span><i>●</i> mapa celeste // 03</span>
                <small>tocá para revelar</small>
              </div>
              <div className="zodiac-game-scene">
                <div className="zodiac-map-grid" aria-hidden="true" />
                <div className="zodiac-system" aria-hidden="true">
                  <div className="zodiac-orbit orbit-a" />
                  <div className="zodiac-orbit orbit-b" />
                  <div className="zodiac-orbit orbit-c" />
                  <span className="zodiac-planet planet-one" />
                  <span className="zodiac-planet planet-two" />
                  <span className="zodiac-planet planet-three" />
                </div>
                <div className="zodiac-core" aria-hidden="true">
                  <strong>12</strong>
                  <small>signos<br />en órbita</small>
                </div>
                <div className="zodiac-signs" role="list" aria-label="Selecciona tu signo">
                  {zodiacSigns.map((sign) => (
                    <button
                      className={"zodiac-sign " + (selectedZodiac === sign.key ? "is-active" : "")}
                      key={sign.key}
                      type="button"
                      style={{ top: sign.top, left: sign.left }}
                      onClick={() => selectZodiac(sign.key)}
                      aria-pressed={selectedZodiac === sign.key}
                      aria-label={"Ver ficha aleatoria para " + sign.name}
                    >
                      <span className="zodiac-glyph">{sign.glyph}</span>
                      <span className="zodiac-sign-name">{sign.name}</span>
                      <small className="zodiac-sign-element">{sign.element}</small>
                    </button>
                  ))}
                </div>
              </div>
              <span className="zodiac-scanline" aria-hidden="true" />
              <div className="zodiac-game-status" aria-hidden="true">
                <span>órbita activa</span><strong>12 / 12</strong>
              </div>
              <span className="zodiac-legend-note note-a">cielo natal</span>
              <span className="zodiac-legend-note note-b">carta celeste</span>
              <span className="zodiac-legend-note note-c">mapa interior</span>
            </div>
            {activeZodiac && activeInsight ? (
              <article className="zodiac-insight" aria-live="polite">
                <div className="zodiac-insight-meta">
                  <span>{activeZodiac.glyph} {activeZodiac.name}</span>
                  <small>Selección aleatoria · video relacionado</small>
                </div>
                <h3>{activeInsight.title}</h3>
                <p>{activeInsight.body}</p>
                <div className="zodiac-insight-footer">
                  <small>{activeInsight.sourceTopic}<br />Resumen editorial del tema visible · no es una cita textual.</small>
                  <a href={activeInsight.sourceUrl} target="_blank" rel="noreferrer">Ver video fuente <span>↗</span></a>
                </div>
              </article>
            ) : null}
          </div>
        </div>
      </section>

      <section id="emilia" className="about shell section">
        <div className="about-image"><img src="/emilia.jpg" alt="Retrato en blanco y negro de Emilia Marsicano" /><span className="image-caption">Entre Ríos · Argentina</span></div>
        <div className="about-copy">
          <p className="kicker">Detrás de las cartas</p>
          <h2>Hola, soy<br /><em>Emilia.</em></h2>
          <p>Leo tarot desde hace alrededor de 15 años y creé Candy Tarot para ofrecer un lugar de escucha, intuición y claridad. Mi forma de leer no busca imponerte un destino: busca ayudarte a entender dónde estás y qué posibilidades se abren ante ti.</p>
          <p>Trabajo online, con tiempo y presencia. Cada lectura parte de tu pregunta real —no de una respuesta en serie— y termina con algo que puedes llevarte a tu vida cotidiana.</p>
          <a className="quiet-link" href="https://www.tiktok.com/@emiliamarsicano" target="_blank" rel="noreferrer">Ver contenido en TikTok <span>↗</span></a>
        </div>
      </section>

      <section id="reservar" className="booking section">
        <div className="shell booking-inner">
          <div><p className="kicker">¿Empezamos?</p><h2>Trae tu pregunta.<br /><em>El resto lo vemos en conjunto.</em></h2></div>
          <div className="booking-copy">
            <p>Cuéntame brevemente qué quieres mirar y te recomendaré la lectura que mejor se ajuste a tu momento. Sin presión, sin respuestas automáticas.</p>
            <a className="button button-light" href="https://www.tiktok.com/@emiliamarsicano" target="_blank" rel="noreferrer">Consultar disponibilidad <span>↗</span></a>
            <small>Las reservas se coordinan por mensaje directo en TikTok. Puedes pagar en ARS, USD o EUR según tu país.</small>
          </div>
        </div>
      </section>

      <section id="preguntas" className="faq shell section">
        <div><p className="kicker">Antes de reservar</p><h2>Preguntas<br /><em>honestas.</em></h2></div>
        <div className="faq-list">
          <details open><summary>¿Cómo recibo mi lectura?<span>+</span></summary><p>Las sesiones se coordinan online. Recibes las indicaciones por mensaje directo y, según el servicio, un audio y/o un PDF para volver a escuchar tu lectura.</p></details>
          <details><summary>¿Necesito saber mi hora de nacimiento?<span>+</span></summary><p>Para una carta natal o una sinastría, la hora mejora la precisión del mapa. Si no la sabes, podemos empezar por una lectura de tarot.</p></details>
          <details><summary>¿El tarot predice el futuro?<span>+</span></summary><p>Lo usamos como una herramienta simbólica de reflexión y orientación. No reemplaza atención médica, psicológica, legal o financiera, ni toma decisiones por ti.</p></details>
          <details><summary>¿Puedo hacer una pregunta sobre otra persona?<span>+</span></summary><p>Podemos mirar la dinámica del vínculo y tu lugar en ella, siempre cuidando tu autonomía y evitando presentar como hechos lo que no puede verificarse.</p></details>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-inner">
          <a className="brand" href="#inicio"><img src="/candy-tarot-logo.png" alt="Candy Tarot" /></a>
          <p>Un lugar para volver a ti.</p>
          <a href="https://www.tiktok.com/@emiliamarsicano" target="_blank" rel="noreferrer">TikTok @emiliamarsicano ↗</a>
          <small>© 2026 Candy Tarot</small>
        </div>
      </footer>
    </main>
  );
}
