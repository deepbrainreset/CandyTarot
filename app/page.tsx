"use client";

type Constellation = {
  name: string;
  points: Array<[number, number]>;
  lines: Array<[number, number]>;
};

const tarotSourceUrl = "https://commons.wikimedia.org/wiki/Category:Tarot_de_Marseille_-_Jean_Dodal";

const services = [
  {
    number: "0",
    card: "El Loco",
    title: "La pregunta",
    eyebrow: "Para cuando necesitas una señal concreta",
    detail: "Una lectura breve y directa para mirar una situación puntual, ordenar lo que sientes y salir del bucle mental.",
    includes: "1 pregunta · audio privado · 20 min",
    price: "$15.000",
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
    price: "$26.000",
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
    price: "$34.000",
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
    price: "$45.000",
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
    price: "$58.000",
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
    price: "$65.000",
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
    price: "$125.000",
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
  return (
    <main>
      <div className="sky-constellations" aria-hidden="true">
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
          <div className="proof-row"><span>15 años de práctica</span><i>·</i><span>Atención online</span><i>·</i><span>Argentina · Latam · España</span></div>
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
              <div className="service-foot"><span>{service.includes}</span><strong>{service.price}</strong></div>
              <a className="service-link" href="#reservar">Quiero esta lectura <span>↗</span></a>
            </article>
          ))}
        </div>

        <p className="tarot-credit">Cartas guía seleccionadas para Candy Tarot · referencias históricas del Tarot de Marsella en <a href={tarotSourceUrl} target="_blank" rel="noreferrer">Wikimedia Commons ↗</a></p>
        <p className="price-note">Argentina: valores de referencia en pesos argentinos · Latam, EE. UU. y España: cotización en USD o EUR al reservar · lecturas online</p>
      </section>

      <section id="metodo" className="method section">
        <div className="shell method-inner">
          <div className="method-title"><p className="kicker">La experiencia Candy Tarot</p><h2>Menos ruido.<br /><em>Más lectura.</em></h2></div>
          <div className="method-copy">
            <p>Una consulta no tiene que asustarte ni decirte qué hacer. Puede ayudarte a mirar la escena completa, reconocer patrones y encontrar una pregunta mejor.</p>
            <div className="method-points">
              <div><span>01</span><strong>Preparación</strong><p>Antes de encontrarnos, recibo tu pregunta y el contexto que quieras compartir.</p></div>
              <div><span>02</span><strong>Lectura</strong><p>Tarot y astrología se traducen a una conversación clara, cálida y sin respuestas prefabricadas.</p></div>
              <div><span>03</span><strong>Integración</strong><p>Te llevas una devolución para volver a escuchar cuando necesites perspectiva.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="zodiac-section section" aria-label="Cielo de constelaciones zodiacales">
        <div className="shell zodiac-layout">
          <div>
            <p className="kicker">El atlas de tu cielo</p>
            <h2>Tu historia<br /><em>tiene capas.</em></h2>
            <p className="zodiac-copy">Las doce constelaciones aparecen una sola vez en el cielo de fondo, como una carta celeste continua. La carta natal no te encierra en una etiqueta: te da un lenguaje para entender tus ritmos, tus tensiones y tus recursos.</p>
            <a className="quiet-link light-link" href="#lecturas">Explorar una lectura <span>↗</span></a>
          </div>
          <div className="zodiac-cloud" aria-hidden="true">
            <div className="zodiac-orbit orbit-a" />
            <div className="zodiac-orbit orbit-b" />
            <div className="zodiac-center"><strong>12</strong><small>constelaciones<br />una vez cada una</small></div>
            <span className="zodiac-legend-note note-a">cielo natal</span>
            <span className="zodiac-legend-note note-b">carta celeste</span>
            <span className="zodiac-legend-note note-c">mapa interior</span>
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
