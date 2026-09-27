"use client";

import { useEffect, useRef, useState } from "react";

const readings = [
  { title: "Amor", text: "Conectá con tu corazón y descubrí lo que viene.", price: 38000, image: "/assets/reading-love-v1.webp", alt: "Corazón luminoso entre nubes doradas" },
  { title: "Trabajo", text: "Claridad para tus decisiones profesionales.", price: 38000, image: "/assets/reading-work-v1.webp", alt: "Cartas de Tarot sobre terciopelo negro" },
  { title: "Propósito", text: "Encontrá tu camino y alineá tu energía.", price: 38000, image: "/assets/reading-purpose-v1.webp", alt: "Luna dorada reflejada sobre agua oscura" },
  { title: "Lectura general", text: "Una mirada completa a tu presente y futuro.", price: 58000, image: "/assets/reading-general-v1.webp", alt: "Brújula astrológica antigua con cristales" },
];

const services = [
  { name: "Una pregunta puntual", price: 15000 },
  { name: "Lectura de amor", price: 38000 },
  { name: "Lectura de trabajo", price: 38000 },
  { name: "Propósito y decisiones", price: 38000 },
  { name: "Lectura general", price: 58000 },
  { name: "Carta natal", price: 95000 },
  { name: "Sinastría de pareja", price: 115000 },
  { name: "Tarot + carta natal", price: 135000 },
];

const cvu = "0000003100092578176210";
const whatsappNumber = "5491165600000";
const contactEmail = "emimarsicano@gmail.com";

type ZodiacSign = {
  key: string;
  name: string;
  glyph: string;
  element: string;
};

type ZodiacInsight = {
  title: string;
  body: string;
  sourceTopic: string;
  sourceUrl: string;
};

const zodiacSigns: ZodiacSign[] = [
  { key: "aries", name: "Aries", glyph: "♈", element: "Fuego" },
  { key: "tauro", name: "Tauro", glyph: "♉", element: "Tierra" },
  { key: "geminis", name: "Géminis", glyph: "♊", element: "Aire" },
  { key: "cancer", name: "Cáncer", glyph: "♋", element: "Agua" },
  { key: "leo", name: "Leo", glyph: "♌", element: "Fuego" },
  { key: "virgo", name: "Virgo", glyph: "♍", element: "Tierra" },
  { key: "libra", name: "Libra", glyph: "♎", element: "Aire" },
  { key: "escorpio", name: "Escorpio", glyph: "♏", element: "Agua" },
  { key: "sagitario", name: "Sagitario", glyph: "♐", element: "Fuego" },
  { key: "capricornio", name: "Capricornio", glyph: "♑", element: "Tierra" },
  { key: "acuario", name: "Acuario", glyph: "♒", element: "Aire" },
  { key: "piscis", name: "Piscis", glyph: "♓", element: "Agua" },
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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedReading, setSelectedReading] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState(services[0].name);
  const [selectedZodiac, setSelectedZodiac] = useState("aries");
  const [selectedInsightIndex, setSelectedInsightIndex] = useState(0);
  const [receiptName, setReceiptName] = useState("");
  const [copied, setCopied] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function openReading(title: string) { setSelectedReading(title); dialogRef.current?.showModal(); }

  const activeZodiac = zodiacSigns.find((sign) => sign.key === selectedZodiac) ?? zodiacSigns[0];
  const insightPool = zodiacInsights[activeZodiac.key] ?? [];
  const activeInsight = insightPool[selectedInsightIndex % (insightPool.length || 1)];

  function selectZodiac(key: string) {
    const pool = zodiacInsights[key] ?? [];
    setSelectedZodiac(key);
    setSelectedInsightIndex((currentIndex) => {
      if (pool.length <= 1) return 0;
      let nextIndex = Math.floor(Math.random() * pool.length);
      if (key === selectedZodiac && nextIndex === currentIndex) {
        nextIndex = (nextIndex + 1) % pool.length;
      }
      return nextIndex;
    });
  }

  const currentService = services.find((service) => service.name === selectedService) ?? services[0];
  const price = currentService.price.toLocaleString("es-AR");
  const message = encodeURIComponent(`Hola Emilia, realicé la transferencia de $ ${price} por ${currentService.name}. Tengo el comprobante listo para adjuntar. Quisiera coordinar un turno.`);
  const emailSubject = encodeURIComponent(`Comprobante — ${currentService.name}`);
  const emailBody = encodeURIComponent(`Hola Emilia:\n\nRealicé la transferencia de $ ${price} por ${currentService.name}. Adjuntaré el comprobante a este correo para coordinar el turno.\n\nNombre:\nTeléfono:\nDisponibilidad horaria:`);

  return <>
    <div className="stars" aria-hidden="true" />
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Candy Tarot, inicio"><img src="/assets/candy-logo.png" alt="Candy Tarot" /></a>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="main-nav" aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav id="main-nav" className={`nav ${menuOpen ? "open" : ""}`} aria-label="Navegación principal" onClick={() => setMenuOpen(false)}><a href="#inicio" className="active">Inicio</a><a href="#sobre-mi">Sobre mí</a><a href="#lecturas">Lecturas</a><a href="#testimonios">Testimonios</a><a href="#faq">FAQ</a><a href="#contacto">Contacto</a></nav>
      <a className="button button-outline header-cta" href="#reservar"><span>▣</span> Reservá tu lectura</a>
    </header>
    <main>
      <section className="hero" id="inicio" aria-label="El Tarot como guía real para tu vida">
        <img className="hero-art" src="/assets/hero-emilia-luna-v1.webp" alt="Emilia frente a una luna dorada bajo un cielo estrellado. El Tarot como guía real para tu vida." fetchPriority="high" />
        <div className="hero-actions"><p>Lecturas de Tarot para encontrar claridad, conectar con tu intuición y tomar decisiones desde el amor.</p><a className="button button-gold" href="#reservar">Reservá tu lectura <span>→</span></a></div>
        <div className="trust-row"><span>✧ Lecturas personalizadas</span><span>▣ 100% online y confidencial</span><span>♡ Acompañamiento cercano</span></div>
      </section>
      <section className="zodiac" aria-labelledby="zodiac-title">
         <div className="section-heading">
           <p className="eyebrow">Tu energía</p>
           <h2 id="zodiac-title">Descubrí el mensaje de tu signo</h2>
           <p>Tocá un signo para revelar, al azar, una observación relacionada con el contenido de Emilia en TikTok.</p>
         </div>
         <div className="zodiac-track" role="list" aria-label="Seleccioná tu signo">
           {zodiacSigns.map((sign) => (
             <div role="listitem" key={sign.key}>
               <button
                 type="button"
                 className={`zodiac-pick ${selectedZodiac === sign.key ? "is-selected" : ""}`}
                 onClick={() => selectZodiac(sign.key)}
                 aria-pressed={selectedZodiac === sign.key}
                 aria-label={`Revelar mensaje de ${sign.name}`}
               >
                 <b aria-hidden="true">{sign.glyph}</b>
                 <span>{sign.name}</span>
               </button>
             </div>
           ))}
         </div>
         {activeZodiac && activeInsight && (
           <article className="zodiac-reading" aria-live="polite" key={`${selectedZodiac}-${selectedInsightIndex}`}>
             <div className="zodiac-reading-meta">
               <span>{activeZodiac.glyph} {activeZodiac.name} · revelación aleatoria</span>
               <small>Video relacionado en TikTok</small>
             </div>
             <h3>{activeInsight.title}</h3>
             <p>{activeInsight.body}</p>
             <div className="zodiac-reading-footer">
               <small>{activeInsight.sourceTopic}<br /><em>Resumen editorial del tema visible; no es una cita textual.</em></small>
               <a href={activeInsight.sourceUrl} target="_blank" rel="noopener noreferrer">Ver video fuente <span>↗</span></a>
             </div>
           </article>
         )}
       </section>
      <section className="readings section" id="lecturas"><div className="section-heading"><p className="eyebrow">Encontrá tu respuesta</p><h2>Lecturas de Tarot</h2><p>Un espacio para cada etapa de tu vida.</p></div><div className="cards">{readings.map((reading) => <article className="reading-card reveal" key={reading.title}><img className="reading-art" src={reading.image} alt={reading.alt} loading="lazy" /><div className="reading-content"><h3>{reading.title}</h3><p>{reading.text}</p><strong className="reading-price">$ {reading.price.toLocaleString("es-AR")}</strong><button className="card-link" onClick={() => openReading(reading.title)}>Saber más</button></div></article>)}</div></section>
      <section className="about section" id="sobre-mi"><div className="moon-phases" aria-hidden="true">● ◕ ◐ ◔ ○</div><div className="about-copy reveal"><p className="eyebrow">Sobre mí</p><h2>Hola, soy Emilia</h2><p>Hace cerca de 15 años que acompaño a personas a través del Tarot. Creo en la magia de las preguntas, en el poder de la intuición y en esta herramienta como un camino de transformación.</p><p>Mis lecturas son profundas, honestas y cercanas: un espacio cuidado para encontrar respuestas, claridad y una mirada más amorosa sobre tu presente.</p><blockquote>“Buenas preguntas abren grandes cambios”<span>Emilia ♡</span></blockquote><a href="#reservar" className="button button-outline">Conocé mi forma de leer <span>→</span></a></div><div className="altar reveal"><img src="/assets/about-altar-v1.webp" alt="Altar con velas, libros de Tarot, cartas y cristales" loading="lazy" /></div></section>
      <section className="testimonials section" id="testimonios"><div className="section-heading"><p className="eyebrow">Experiencias</p><h2>Lo que dicen</h2><p>Almas como la tuya.</p></div><div className="quotes"><figure><blockquote>Este espacio está reservado para una experiencia real de quien haya consultado con Emilia.</blockquote><div className="rating">✦ ✦ ✦</div><figcaption>Testimonio por incorporar</figcaption></figure><figure><blockquote>Acá podremos sumar una opinión auténtica sobre la claridad, la cercanía y el acompañamiento recibido.</blockquote><div className="rating">✦ ✦ ✦</div><figcaption>Testimonio por incorporar</figcaption></figure><figure><blockquote>La versión final mostrará únicamente reseñas verificadas y autorizadas por sus protagonistas.</blockquote><div className="rating">✦ ✦ ✦</div><figcaption>Testimonio por incorporar</figcaption></figure></div></section>
      <section className="faq section" id="faq"><div className="section-heading"><p className="eyebrow">Antes de tu sesión</p><h2>Preguntas frecuentes</h2></div><div className="accordion"><details><summary>¿Cómo se realiza la lectura?</summary><p>La sesión es online, en un encuentro privado y confidencial. Al reservar, coordinamos el día, horario y medio de conexión.</p></details><details><summary>¿Necesito preparar preguntas?</summary><p>No es obligatorio, pero ayuda a enfocar la lectura. También podemos comenzar desde lo que hoy necesitás comprender.</p></details><details><summary>¿Puedo elegir más de un tema?</summary><p>Sí. La lectura general permite recorrer diferentes áreas; las lecturas temáticas profundizan en un aspecto concreto.</p></details></div></section>
      <section className="booking payment-booking" id="reservar">
        <div className="payment-intro"><p className="eyebrow">Reserva segura</p><h2>Elegí, transferí y coordiná</h2><p>El turno se confirma cuando Emilia verifica la acreditación del pago.</p></div>
        <div className="payment-panel">
          <label htmlFor="service">1. Elegí tu lectura</label>
          <select id="service" value={selectedService} onChange={(event) => { setSelectedService(event.target.value); setReceiptName(""); }}>
            {services.map((service) => <option key={service.name} value={service.name}>{service.name} — $ {service.price.toLocaleString("es-AR")}</option>)}
          </select>
          <div className="transfer-card">
            <p><span>Importe</span><strong>$ {price} ARS</strong></p>
            <p><span>Titular</span><strong>María Emilia Marsicano</strong></p>
            <p><span>CVU</span><strong>{cvu}</strong></p>
            <button type="button" className="copy-button" onClick={async () => { await navigator.clipboard.writeText(cvu); setCopied(true); setTimeout(() => setCopied(false), 1800); }}>{copied ? "CVU copiado ✓" : "Copiar CVU"}</button>
          </div>
          <label htmlFor="receipt">2. Seleccioná el comprobante</label>
          <input id="receipt" className="receipt-input" type="file" accept=".pdf,image/jpeg,image/png,image/webp" onChange={(event) => setReceiptName(event.target.files?.[0]?.name ?? "")} />
          {receiptName && <p className="receipt-ready">✓ Comprobante seleccionado: {receiptName}</p>}
          <div className="contact-unlock" aria-live="polite">
            <p>3. Contactá a Emilia y adjuntá el comprobante en el mensaje.</p>
            <div className="contact-buttons">
              <a className={`button button-gold ${!receiptName ? "disabled" : ""}`} href={receiptName ? `https://wa.me/${whatsappNumber}?text=${message}` : undefined} target="_blank" rel="noopener noreferrer" aria-disabled={!receiptName}>Enviar por WhatsApp</a>
              <a className={`button button-outline ${!receiptName ? "disabled" : ""}`} href={receiptName ? `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}` : undefined} aria-disabled={!receiptName}>Enviar por email</a>
            </div>
            {!receiptName && <small>Los contactos se habilitan después de seleccionar el comprobante.</small>}
            <small>La selección no envía ni almacena el archivo. WhatsApp o tu aplicación de correo se abrirán para que lo adjuntes manualmente.</small>
          </div>
          <p className="payment-legal">Las lecturas ofrecen orientación simbólica y no reemplazan atención médica, psicológica, legal o financiera.</p>
        </div>
      </section>
    </main>
    <footer id="contacto"><img src="/assets/candy-logo.png" alt="Candy Tarot" className="footer-logo" /><nav aria-label="Enlaces del pie"><a href="#inicio">Inicio</a><a href="#sobre-mi">Sobre mí</a><a href="#lecturas">Lecturas</a><a href="#testimonios">Testimonios</a><a href="#faq">FAQ</a></nav><div className="social"><a href="https://www.tiktok.com/@emiliamarsicano" target="_blank" rel="noopener noreferrer" aria-label="TikTok">♪</a><a href="mailto:emimarsicano@gmail.com" aria-label="Email">✉</a></div><p className="copyright">© 2026 Candy Tarot. Todos los derechos reservados. <span>Tu historia también tiene un mensaje. ✦</span></p></footer>
    <dialog ref={dialogRef} onClick={(event) => event.target === dialogRef.current && dialogRef.current?.close()}><button className="dialog-close" aria-label="Cerrar" onClick={() => dialogRef.current?.close()}>×</button><p className="eyebrow">Lectura personalizada</p><h2>Lectura de {selectedReading}</h2><p>Una consulta profunda y confidencial para ordenar lo que sentís, ver nuevas posibilidades y avanzar con mayor claridad.</p><a href="#reservar" className="button button-gold dialog-book" onClick={() => dialogRef.current?.close()}>Reservar esta lectura</a></dialog>
  </>;
}
