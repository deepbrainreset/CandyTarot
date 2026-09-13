"use client";

const services = [
  { number: "0", card: "El Loco", title: "La pregunta", eyebrow: "Para cuando necesitás una señal concreta", detail: "Una lectura breve y directa para mirar una situación puntual, ordenar lo que sentís y salir del bucle mental.", includes: "1 pregunta · audio privado · 20 min", price: "$15.000" },
  { number: "II", card: "Dos de Copas", title: "Dos caminos", eyebrow: "Para decisiones y vínculos", detail: "Dos preguntas conectadas, una lectura con contexto y una devolución que te ayuda a distinguir deseo, miedo y posibilidad.", includes: "2 preguntas · audio privado · 35 min", price: "$26.000", featured: true },
  { number: "XVII", card: "La Estrella", title: "Mapa natal", eyebrow: "Para entender tu forma de estar en el mundo", detail: "Tu carta como mapa de tendencias, recursos y desafíos. Una lectura profunda, explicada en lenguaje claro y llevada a tu vida real.", includes: "carta natal · PDF · audio · 75 min", price: "$45.000" },
  { number: "VI", card: "Los Enamorados", title: "Sinastría", eyebrow: "Para mirar un vínculo con más honestidad", detail: "Dos cartas, una conversación sobre la dinámica compartida y herramientas para reconocer qué los acerca y qué necesita cuidado.", includes: "2 cartas · PDF · audio · 90 min", price: "$58.000" },
  { number: "XXI", card: "El Mundo", title: "Sesión 360°", eyebrow: "La experiencia más completa", detail: "Tarot y astrología en una misma sesión para trabajar una pregunta central, tu momento actual y los próximos pasos posibles.", includes: "tarot + carta · audio · 90 min", price: "$65.000", featured: true },
  { number: "X", card: "La Rueda", title: "Acompañamiento lunar", eyebrow: "Para no atravesar sola un cambio importante", detail: "Tres encuentros para revisar el ciclo, tomar decisiones con perspectiva y convertir una lectura en movimiento real.", includes: "3 sesiones · seguimiento · prioridad", price: "$125.000" },
];

const zodiac = [["♈", "Aries"], ["♉", "Tauro"], ["♊", "Géminis"], ["♋", "Cáncer"], ["♌", "Leo"], ["♍", "Virgo"], ["♎", "Libra"], ["♏", "Escorpio"], ["♐", "Sagitario"], ["♑", "Capricornio"], ["♒", "Acuario"], ["♓", "Piscis"]];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Candy Tarot, inicio"><img src="/candy-tarot-logo.png" alt="Candy Tarot" /></a>
        <div className="nav-links"><a href="#lecturas">Lecturas</a><a href="#metodo">El método</a><a href="#emilia">Emilia</a></div>
        <a className="outline-cta" href="#reservar">Elegir lectura <span>↗</span></a>
      </nav>

      <section id="inicio" className="hero shell">
        <div className="hero-copy">
          <p className="kicker"><span className="sparkle">✦</span> Tarot · Astrología · Claridad</p>
          <h1>No necesitás otra respuesta.<br /><em>Necesitás verte.</em></h1>
          <p className="hero-lede">Lecturas íntimas para ponerle nombre a lo que estás viviendo, escuchar tu intuición y volver a elegir desde un lugar más claro.</p>
          <div className="hero-actions"><a className="button button-solid" href="#lecturas">Ver lecturas <span>↓</span></a><a className="quiet-link" href="https://www.tiktok.com/@emiliamarsicano" target="_blank" rel="noreferrer">Conocé a Emilia <span>↗</span></a></div>
          <div className="proof-row"><span>15 años de práctica</span><i>·</i><span>Atención online</span><i>·</i><span>Entre Ríos, Argentina</span></div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame"><img src="/emilia.jpg" alt="Emilia Marsicano" /></div>
          <div className="portrait-label"><span>Emilia Marsicano</span><small>lecturas con presencia</small></div>
          <div className="floating-card floating-card-top"><span>carta de hoy</span><strong>XVII</strong><em>La Estrella</em></div>
          <div className="floating-card floating-card-bottom"><span>tu mapa es único</span><b>☾</b></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><div className="marquee-track">ARIES <span>✦</span> TAURO <span>✦</span> GÉMINIS <span>✦</span> CÁNCER <span>✦</span> LEO <span>✦</span> VIRGO <span>✦</span> LIBRA <span>✦</span> ESCORPIO <span>✦</span> SAGITARIO <span>✦</span> CAPRICORNIO <span>✦</span> ACUARIO <span>✦</span> PISCIS <span>✦</span></div></div>

      <section id="lecturas" className="readings shell section">
        <div className="section-heading"><div><p className="kicker">Elegí tu puerta de entrada</p><h2>Una lectura<br /><em>para tu momento.</em></h2></div><p className="section-note">No hay una tirada “correcta”. Hay una pregunta que necesita espacio, una historia que merece ser escuchada y una forma de acompañamiento que puede hacerte bien.</p></div>
        <div className="service-grid">{services.map((service) => <article className={`service-card ${service.featured ? "service-card-featured" : ""}`} key={service.title}><div className="card-head"><span className="card-number">{service.number}</span><span className="card-suit">✦</span></div><div className="mini-tarot"><span>{service.number}</span><b>{service.card}</b><i>✦</i></div><div className="service-copy"><p className="service-eyebrow">{service.eyebrow}</p><h3>{service.title}</h3><p>{service.detail}</p></div><div className="service-foot"><span>{service.includes}</span><strong>{service.price}</strong></div><a className="service-link" href="#reservar">Quiero esta lectura <span>↗</span></a></article>)}</div>
        <p className="price-note">Valores de referencia en pesos argentinos · se confirman al reservar · lecturas online</p>
      </section>

      <section id="metodo" className="method section"><div className="shell method-inner"><div className="method-title"><p className="kicker">La experiencia Candy Tarot</p><h2>Menos ruido.<br /><em>Más lectura.</em></h2></div><div className="method-copy"><p>Una consulta no tiene que asustarte ni decirte qué hacer. Puede ayudarte a mirar la escena completa, reconocer patrones y encontrar una pregunta mejor.</p><div className="method-points"><div><span>01</span><strong>Preparación</strong><p>Antes de encontrarnos, recibo tu pregunta y el contexto que quieras compartir.</p></div><div><span>02</span><strong>Lectura</strong><p>Tarot y astrología se traducen a una conversación clara, cálida y sin respuestas prefabricadas.</p></div><div><span>03</span><strong>Integración</strong><p>Te llevás una devolución para volver a escuchar cuando necesites perspectiva.</p></div></div></div></div></section>

      <section className="zodiac-section section" aria-label="Los doce signos del zodíaco"><div className="shell zodiac-layout"><div><p className="kicker">El atlas de tu cielo</p><h2>Tu historia<br /><em>tiene capas.</em></h2><p className="zodiac-copy">La carta natal no te encierra en una etiqueta. Te da un lenguaje para entender tus ritmos, tus tensiones y tus recursos.</p><a className="quiet-link light-link" href="#lecturas">Explorar una lectura <span>↗</span></a></div><div className="zodiac-cloud">{zodiac.map(([symbol, sign], index) => <span className={`zodiac-item zodiac-${index + 1}`} key={sign}><b>{symbol}</b>{sign}</span>)}<div className="zodiac-orbit orbit-a" /><div className="zodiac-orbit orbit-b" /><div className="zodiac-center">✦<small>lo que<br />te mueve</small></div></div></div></section>

      <section id="emilia" className="about shell section"><div className="about-image"><img src="/emilia.jpg" alt="Retrato en blanco y negro de Emilia Marsicano" /><span className="image-caption">Entre Ríos · Argentina</span></div><div className="about-copy"><p className="kicker">Detrás de las cartas</p><h2>Hola, soy<br /><em>Emilia.</em></h2><p>Leo tarot desde hace alrededor de 15 años y construí Candy Tarot para ofrecer un lugar de escucha, intuición y claridad. Mi forma de leer no busca imponerte un destino: busca ayudarte a entender dónde estás parada y qué posibilidades se abren frente a vos.</p><p>Trabajo online, con tiempo y presencia. Cada lectura parte de tu pregunta real —no de una respuesta en serie— y termina con algo que podés llevarte a tu vida cotidiana.</p><a className="quiet-link" href="https://www.tiktok.com/@emiliamarsicano" target="_blank" rel="noreferrer">Ver contenido en TikTok <span>↗</span></a></div></section>

      <section id="reservar" className="booking section"><div className="shell booking-inner"><div><p className="kicker">¿Empezamos?</p><h2>Traé tu pregunta.<br /><em>El resto lo vemos juntas.</em></h2></div><div className="booking-copy"><p>Contame brevemente qué querés mirar y te voy a recomendar la lectura que mejor se ajuste a tu momento. Sin presión, sin respuestas automáticas.</p><a className="button button-light" href="https://www.tiktok.com/@emiliamarsicano" target="_blank" rel="noreferrer">Escribirle a Emilia <span>↗</span></a><small>Las reservas se coordinan por mensaje directo en TikTok. Atención online.</small></div></div></section>

      <section id="preguntas" className="faq shell section"><div><p className="kicker">Antes de reservar</p><h2>Preguntas<br /><em>honestas.</em></h2></div><div className="faq-list"><details open><summary>¿Cómo recibo mi lectura?<span>+</span></summary><p>Las sesiones se coordinan online. Recibís las indicaciones por mensaje directo y, según el servicio, un audio y/o un PDF para volver a escuchar tu lectura.</p></details><details><summary>¿Necesito saber mi hora de nacimiento?<span>+</span></summary><p>Para una carta natal o una sinastría, la hora mejora la precisión del mapa. Si no la sabés, podemos empezar por una lectura de tarot.</p></details><details><summary>¿El tarot predice el futuro?<span>+</span></summary><p>Lo usamos como una herramienta simbólica de reflexión y orientación. No reemplaza atención médica, psicológica, legal o financiera, ni toma decisiones por vos.</p></details><details><summary>¿Puedo hacer una pregunta sobre otra persona?<span>+</span></summary><p>Podemos mirar la dinámica del vínculo y tu lugar en ella, siempre cuidando tu autonomía y evitando presentar como hechos lo que no puede verificarse.</p></details></div></section>

      <footer className="footer"><div className="shell footer-inner"><a className="brand" href="#inicio"><img src="/candy-tarot-logo.png" alt="Candy Tarot" /></a><p>Un lugar para volver a vos.</p><a href="https://www.tiktok.com/@emiliamarsicano" target="_blank" rel="noreferrer">TikTok @emiliamarsicano ↗</a><small>© 2026 Candy Tarot</small></div></footer>
    </main>
  );
}
