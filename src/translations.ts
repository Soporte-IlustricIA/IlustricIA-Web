export type Language = 'es' | 'en' | 'pt';

export const translations = {
  es: {
    nav: {
      services: "Nuestros Servicios",
      about: "Quienes Somos",
      faqs: "FAQs",
      resources: "Recursos",
      contact: "Contáctanos",
      demo: "Prueba nuestra demo"
    },
    hero: {
      title: "Ilustric",
      subtitle: "Soluciones digitales y funcionales para tu ecosistema digital."
    },
    services: {
      badge: "Nuestros Servicios",
      title: "Optimizamos cada engranaje de tu Estructura Operativa.",
      items: {
        voice: {
          title: "Asistente de voz",
          description: "Implementación de sistemas de voz inteligentes para atención telefónica y control por voz automatizado."
        },
        automation: {
          title: "Automatización de procesos",
          description: "Optimización de flujos de trabajo repetitivos para ahorrar tiempo y reducir errores humanos en tu operativa."
        },
        chatbots: {
          title: "Chatbots agentes",
          description: "Agentes conversacionales avanzados que resuelven dudas y gestionan pedidos de forma autónoma 24/7."
        },
        funnels: {
          title: "Funnels de venta",
          description: "Diseño de embudos de conversión optimizados para maximizar el retorno de inversión y captación de leads."
        },
        web: {
          title: "Desarrollo Web",
          description: "Creación de plataformas digitales modernas, rápidas y escalables adaptadas a las necesidades de tu negocio."
        },
        crm: {
          title: "CRM personalizado",
          description: "Implementación y personalización de sistemas de gestión de clientes para mejorar la retención y el ciclo de ventas."
        },
        security: {
          title: "Ciberseguridad",
          description: "Protección integral de tus activos digitales y datos sensibles contra amenazas externas y vulnerabilidades."
        },
        consulting: {
          title: "Consultoría digital",
          description: "Asesoramiento estratégico para la transformación digital de tu empresa, identificando oportunidades de mejora y crecimiento."
        },
        software: {
          title: "Desarrollo de software",
          description: "Soluciones a medida diseñadas para resolver problemas específicos y escalar tu negocio con tecnología de vanguardia."
        }
      }
    },
    about: {
      badge: "Quienes Somos",
      title: "Forjando el",
      titleSuffix: "de la próxima generación.",
      description: "En IlustricIA, no solo construimos software; diseñamos ecosistemas inteligentes. Somos un equipo de visionarios, ingenieros y creativos apasionados por la intersección entre la inteligencia artificial y la experiencia humana.",
      stats: {
        projects: "Proyectos IA",
        countries: "Países",
        experts: "Expertos",
        years: "Años de Innovación"
      }
    },
    features: {
      title: "De la promesa a la práctica",
      items: [
        {
          title: "Tecnología práctica",
          description: "No aplicamos IA por moda. Resolvemos problemas concretos: automatización, eficiencia y captación."
        },
        {
          title: "Enfoque personalizado",
          description: "Soluciones a medida. Adaptamos la tecnología a tu cultura, procesos y objetivos únicos."
        },
        {
          title: "Acompañamiento integral",
          description: "Desde el diagnóstico hasta la implementación. No solo entregamos tecnología, aseguramos el éxito."
        },
        {
          title: "Resultados medibles",
          description: "Transformamos datos en decisiones. Optimizamos tiempos y reducimos fricción operativa."
        },
        {
          title: "Ventaja competitiva",
          description: "Convierte la tecnología en tu mayor activo para un crecimiento sostenible."
        }
      ],
      roi: {
        label: "Impacto ROI",
        estimated: "Retorno Estimado",
        efficiency: "Eficiencia operativa anual"
      }
    },
    testimonials: {
      items: [
        {
          quote: "Desde que implementamos el asistente de teléfono ya no nos tenemos que preocupar de estar siempre pendientes del teléfono. Además, antes perdíamos muchísimos pacientes en nuestra clínica porque llamaban fuera de horario, pero ahora todas las llamadas son atendidas y nuestros pacientes pueden agendar citas a cualquier hora en cualquier momento.",
          author: "Dr Vicente",
          role: "Propietario",
          company: "Clínica Javaloyes"
        },
        {
          quote: "Antes me pasaba el día pendiente del teléfono y de los mensajes de WhatsApp para anotar reservas, y aun así a veces se me escapaba alguna. Desde que implementamos el asistente con esta agencia todo eso cambió: ahora los clientes reservan por WhatsApp o llamada y el sistema lo gestiona solo. Yo me olvido de ese estrés y me concentro en el restaurante.",
          author: "Ismael",
          role: "Propietario",
          company: "Restaurante Zagálico"
        }
      ],
      client: "Cliente"
    },
    innovation: {
      title: "Innovación",
      items: [
        {
          headline: "Forbes: La automatización es la clave de la supervivencia empresarial",
          description: "Según Forbes, las empresas que implementan automatización inteligente ven un incremento del 30% en su eficiencia operativa, transformando procesos manuales en flujos de trabajo dinámicos."
        },
        {
          headline: "El 80% de los ejecutivos considera la IA fundamental para el éxito",
          description: "Estudios globales indican que la adopción de IA generativa podría añadir hasta 4.4 billones de dólares a la economía mundial anualmente, redefiniendo el panorama competitivo."
        },
        {
          headline: "La inversión global en IA superará los 300 mil millones en 2026",
          description: "Para finales de 2026, se estima que el 90% de las empresas Fortune 500 habrán integrado agentes de IA autónomos en su núcleo operativo, marcando el inicio de la era de la hiper-eficiencia."
        }
      ],
      readStory: "Leer la historia",
      allStories: "Todas las historias"
    },
    faqs: {
      badge: "Preguntas Frecuentes",
      title: "Resolvemos tus Dudas.",
      items: [
        {
          question: "¿Qué es IlustricIA?",
          answer: "IlustricIA es una consultora tecnológica especializada en la integración de Inteligencia Artificial avanzada para optimizar procesos de negocio, mejorar la toma de decisiones y crear experiencias digitales innovadoras."
        },
        {
          question: "¿Cómo puede la IA ayudar a mi negocio?",
          answer: "La IA puede automatizar tareas repetitivas, analizar grandes volúmenes de datos para encontrar patrones, predecir tendencias del mercado, y mejorar la atención al cliente mediante interfaces conversacionales inteligentes."
        },
        {
          question: "¿Ofrecéis soluciones personalizadas?",
          answer: "Sí, cada proyecto comienza con un análisis profundo de tus necesidades específicas. Desarrollamos modelos y flujos de trabajo a medida que se integran perfectamente con tu infraestructura actual."
        },
        {
          question: "¿Cuánto tiempo toma implementar una solución de IA?",
          answer: "El tiempo varía según la complejidad. Una integración básica puede tomar unas pocas semanas, mientras que un sistema de IA generativa personalizado o un modelo predictivo complejo puede llevar de 2 a 4 meses."
        },
        {
          question: "¿Es segura la integración de mis datos?",
          answer: "La seguridad es nuestra prioridad. Implementamos protocolos de cifrado de extremo a extremo, cumplimos con la normativa GDPR y aseguramos que tus datos se utilicen exclusivamente para entrenar y ejecutar tus propios modelos de forma privada."
        },
        {
          question: "¿Cómo empiezo a trabajar con vosotros?",
          answer: "El primer paso es una sesión de descubrimiento gratuita donde analizamos tus desafíos. Puedes agendar una llamada directamente desde nuestra sección de ROI o contactarnos a través del formulario al final de la página."
        }
      ],
      moreQuestions: "¿Tienes más preguntas? Estamos aquí para ayudarte.",
      contactUs: "Contáctanos ahora"
    },
    systemOfRecord: {
      badge: "NÚCLEO INTELIGENTE",
      title: "El cerebro operativo que tu empresa necesita.",
      description: "No es solo software, es el centro neurálgico de tu negocio. IlustricIA integra cada proceso, dato y decisión en un ecosistema fluido que aprende y evoluciona contigo.",
      schedule: "Agendar cita",
      demo: "Prueba nuestra demo"
    },
    footerCta: {
      status: "ESTADO OPERATIVO: DISPONIBLE | AGENDA TU CITA ABAJO ↓",
      title: "¿Iniciamos la transformación de tu operativa?",
      subtitle: "Analicemos tu negocio en 20 minutos sin compromiso. Reserva tu hueco directamente en nuestro calendario oficial.",
      pillars: {
        diagnosis: {
          title: "DIAGNÓSTICO RÁPIDO",
          subtitle: "Solo 20 Minutos"
        },
        risk: {
          title: "CERO RIESGO",
          subtitle: "Sin Compromiso"
        },
        support: {
          title: "ACOMPAÑAMIENTO REAL",
          subtitle: "Soluciones Prácticas"
        }
      },
      footerText: "Elige el día y la hora que mejor te venga. Recibirás un enlace de Google Meets automáticamente."
    },
    footer: {
      description: "Soluciones digitales y funcionales para tu ecosistema digital.",
      pages: "Páginas",
      social: "Redes Sociales",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Aviso Legal",
      cookies: "Cookies",
      rights: "Todos los derechos reservados."
    },
    privacyPage: {
      title: "Política de Privacidad",
      lastUpdated: "01/2026",
      sections: [
        {
          content: "En IlustricIA nos tomamos muy en serio la privacidad y la protección de tus datos personales. Esta Política de Privacidad explica qué datos recogemos, para qué los usamos, con qué base legal, durante cuánto tiempo, con quién los compartimos y qué derechos tienes como usuario."
        },
        {
          title: "1. Responsable del tratamiento",
          content: [
            "Responsable: IlustricIA Soluciones Digitales (nombre comercial)",
            "Razón social: ILUSTRICIA SL",
            "NIF/CIF: B24927881",
            "Email de contacto: info@ilustricia.com",
            "Teléfono: +34 636 251 256",
            "Web: www.ilustricia.com",
            "Delegado de Protección de Datos (DPD/DPO): info@ilustricia.com"
          ]
        },
        {
          title: "2. Qué datos tratamos",
          content: [
            "Según cómo interactúes con la web, podemos tratar:",
            "Datos identificativos y de contacto: nombre, apellidos, email, teléfono.",
            "Datos profesionales: empresa, cargo, sector, necesidades del proyecto.",
            "Datos del mensaje: información que nos envías al solicitar una cita, presupuesto o consulta.",
            "Datos de navegación: dirección IP, identificadores del dispositivo/navegador, y eventos de uso (por ejemplo, páginas visitadas), especialmente si usas cookies/analítica.",
            "Redes sociales: si contactas con nosotros por perfiles sociales, trataremos los datos disponibles según tu configuración y la propia red social.",
            "No solicitamos categorías especiales de datos (p. ej., salud, ideología) y te pedimos que no las incluyas en los formularios."
          ]
        },
        {
          title: "3. Finalidades del tratamiento",
          content: [
            "Tratamos tus datos para las siguientes finalidades:",
            "Atender consultas y solicitudes (contacto, información, presupuesto).",
            "Gestionar la reserva de cita / reunión inicial y la comunicación previa y posterior.",
            "Prestar y administrar nuestros servicios (consultoría e implementación de soluciones de IA, automatización, desarrollo web/marketplaces, etc.), incluyendo la gestión contractual si procede.",
            "Enviar comunicaciones comerciales (newsletter, novedades, casos de éxito) cuando lo autorices o cuando exista una base legítima aplicable.",
            "Mejorar la web y la seguridad, prevenir fraude y uso indebido, y mantener la integridad técnica del sitio."
          ]
        },
        {
          title: "4. Base jurídica (legitimación)",
          content: [
            "Dependiendo del caso, la base legal será:",
            "Ejecución de un contrato o medidas precontractuales (p. ej., solicitud de propuesta o reunión para iniciar un proyecto).",
            "Consentimiento (p. ej., envío de comunicaciones comerciales o cookies no necesarias).",
            "Cumplimiento de obligaciones legales (p. ej., obligaciones fiscales/contables cuando exista contratación).",
            "Interés legítimo (p. ej., seguridad del sitio, prevención de abuso, y mejoras básicas del servicio, equilibrado con tus derechos).",
            "Cuando el tratamiento se base en el consentimiento, podrás retirarlo en cualquier momento sin que ello afecte a la licitud del tratamiento previo."
          ]
        },
        {
          title: "5. Destinatarios y encargados del tratamiento",
          content: [
            "No vendemos tus datos. Podremos comunicar o permitir el acceso a tus datos a:",
            "Proveedores que nos prestan servicios (por ejemplo: hosting, correo, herramientas de analítica, CRM, automatización, videollamadas, calendarios, soporte técnico), actuando como encargados del tratamiento bajo contrato.",
            "Administraciones públicas y autoridades competentes cuando exista una obligación legal."
          ]
        },
        {
          title: "6. Transferencias internacionales",
          content: [
            "En caso de utilizar proveedores ubicados fuera del Espacio Económico Europeo, Ilustricia aplicará las garantías exigidas por la normativa (por ejemplo, Cláusulas Contractuales Tipo u otros mecanismos válidos)."
          ]
        },
        {
          title: "7. Plazos de conservación",
          content: [
            "Conservaremos los datos:",
            "Consultas y solicitudes: durante el tiempo necesario para atenderlas y, después, por el tiempo necesario para seguimiento y trazabilidad.",
            "Clientes y proyectos: durante la relación contractual y, posteriormente, durante los plazos legales aplicables (fiscales/contables).",
            "Marketing: hasta que retires tu consentimiento o solicites la baja.",
            "Seguridad y logs técnicos: durante el tiempo estrictamente necesario para la seguridad y la resolución de incidencias."
          ]
        },
        {
          title: "8. Derechos de las personas usuarias",
          content: [
            "Puedes ejercer los derechos de:",
            "Acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad (cuando proceda), y retirar el consentimiento en cualquier momento.",
            "Para ejercerlos, envíanos un email a soporte@ilustricia.com con el asunto “Protección de datos” e indicando tu solicitud. Podremos pedirte información adicional para verificar tu identidad.",
            "Si consideras que tus derechos no han sido atendidos correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD). sedeaepd.gob.es"
          ]
        },
        {
          title: "9. Medidas de seguridad",
          content: [
            "Ilustricia aplica medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida, alteración o divulgación."
          ]
        },
        {
          title: "10. Menores de edad",
          content: [
            "Nuestros servicios no están dirigidos a menores de 14 años. Si detectamos que hemos tratado datos de un menor sin autorización válida, procederemos a su eliminación."
          ]
        },
        {
          title: "11. Cookies y tecnologías similares",
          content: [
            "Utilizamos cookies y tecnologías similares. Para más información, consulta la Política de Cookies y el apartado Configurar Cookies (preferencias)."
          ]
        },
        {
          title: "12. Cambios en esta política",
          content: [
            "Podremos actualizar esta Política de Privacidad para reflejar cambios legales o técnicos. La fecha de “Última actualización” indicará cuándo se revisó por última vez."
          ]
        },
        {
          content: [
            "Elche, 01/2026",
            "https://www.ilustricia.com",
            "IlustricIA soluciones digitales"
          ]
        }
      ]
    },
    legalPage: {
      title: "Aviso Legal",
      lastUpdated: "01/2026",
      sections: [
        {
          content: "En cumplimiento de lo dispuesto en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilita la siguiente información general del sitio web https://www.ilustricia.com"
        },
        {
          title: "1. Datos identificativos",
          content: [
            "Titular: ILUSTRICIA SL",
            "Nombre comercial: IlustricIA Soluciones Digitales",
            "NIF/CIF: B24927881",
            "Correo electrónico de contacto: info@ilustricia.com",
            "Teléfono de contacto: +34 636 251 256",
            "El presente sitio web tiene por objeto dar a conocer la actividad, servicios y proyectos de IlustricIA, empresa dedicada a la consultoría y desarrollo de soluciones tecnológicas e Inteligencia Artificial."
          ]
        },
        {
          title: "2. Condiciones de uso",
          content: [
            "El acceso y uso del sitio web atribuye la condición de usuario y supone la aceptación plena y sin reservas de todas las cláusulas del presente Aviso Legal. Si no estás de acuerdo con cualquiera de las condiciones, deberás abstenerte de usar este sitio web.",
            "El usuario se compromete a hacer un uso adecuado del contenido y de los servicios que IlustricIA ofrece, y a no emplearlos para actividades ilícitas o contrarias a la buena fe, al orden público o a los derechos de terceros."
          ]
        },
        {
          title: "3. Propiedad intelectual e industrial",
          content: [
            "Todos los contenidos del sitio web (textos, imágenes, logotipos, marcas, estructura, diseño, código fuente, etc.) son titularidad de IlustricIA o de terceros que han autorizado su uso.",
            "Queda prohibida la reproducción, distribución o transformación de dichos contenidos sin autorización expresa y por escrito del titular."
          ]
        },
        {
          title: "4. Enlaces externos",
          content: [
            "El sitio web puede incluir enlaces a páginas de terceros. IlustricIA no se hace responsable de los contenidos, políticas de privacidad ni de las prácticas de dichos sitios externos. La inclusión de enlaces no implica relación, aprobación o respaldo por parte de IlustricIA."
          ]
        },
        {
          title: "5. Limitación de responsabilidad",
          content: [
            "IlustricIA no garantiza la disponibilidad permanente del sitio web ni la ausencia de errores técnicos. No se responsabiliza de daños o perjuicios derivados del uso indebido o de la falta de disponibilidad del sitio."
          ]
        },
        {
          title: "6. Política de privacidad y cookies",
          content: [
            "El tratamiento de los datos personales recabados a través del sitio web se regirá por lo dispuesto en la Política de Privacidad, y el uso de cookies por la Política de Cookies, ambas disponibles en este mismo sitio."
          ]
        },
        {
          title: "7. Legislación aplicable y jurisdicción",
          content: [
            "El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del sitio web, el usuario se somete a la jurisdicción de los Juzgados y Tribunales de Elche, salvo que la ley disponga otra cosa."
          ]
        },
        {
          content: [
            "Elche, 01/2026",
            "https://www.ilustricia.com",
            "IlustricIA soluciones digitales"
          ]
        }
      ]
    },
    cookiesPage: {
      title: "Política de Cookies",
      lastUpdated: "01/2026",
      sections: [
        {
          title: "1. ¿Qué son las cookies?",
          content: "Las cookies y tecnologías similares (por ejemplo, píxeles, etiquetas o identificadores) son archivos o dispositivos que se almacenan en tu navegador o en tu dispositivo cuando navegas. Sirven, entre otras finalidades, para recordar tus preferencias, analizar el uso del sitio o personalizar contenidos."
        },
        {
          title: "2. ¿Qué tipos de cookies existen?",
          content: [
            "Según quién las gestione:",
            "Cookies propias: enviadas y gestionadas por este sitio web.",
            "Cookies de terceros: enviadas y gestionadas por otras entidades (proveedores de analítica, publicidad, redes sociales, etc.).",
            "Según su finalidad (clasificación habitual):",
            "Técnicas o necesarias: permiten la navegación y el uso de funciones básicas.",
            "De preferencias o personalización: recuerdan ajustes (idioma, región, etc.).",
            "De análisis o medición: ayudan a entender cómo se usa la web para mejorarla.",
            "De publicidad / marketing: miden campañas y pueden mostrar anuncios personalizados."
          ]
        },
        {
          title: "3. Base jurídica",
          content: "De acuerdo con la normativa aplicable, solo instalamos cookies no necesarias si el usuario presta su consentimiento, tras recibir información clara y completa."
        },
        {
          title: "4. Cookies que utiliza este sitio web",
          content: [
            "A continuación se indican las cookies (o tecnologías equivalentes) que pueden utilizarse en este sitio web. Completa y ajusta esta tabla con tus cookies reales.",
            "Si utilizas cookies de terceros, debes identificar a esos terceros y facilitar acceso a su información (políticas del proveedor), además de explicar cómo gestionar o eliminarlas si el usuario las aceptó y después quiere retirarlas."
          ]
        },
        {
          title: "5. ¿Cómo puedes aceptar, rechazar o configurar cookies?",
          content: [
            "Cuando accedes a la web, se muestra un aviso (banner) que te permite:",
            "Aceptar cookies,",
            "Rechazar cookies no necesarias, y/o",
            "Configurar tus preferencias por categorías.",
            "Debes poder denegar o revocar el consentimiento de forma tan sencilla como otorgarlo, y el acceso al panel de configuración debe estar disponible de forma accesible y permanente (por ejemplo, mediante el enlace “Configurar cookies” en el pie de página)."
          ]
        },
        {
          title: "6. Cómo desactivar o eliminar cookies desde el navegador",
          content: "Además del panel de configuración, puedes eliminar las cookies desde las opciones de tu navegador. Ten en cuenta que, si aceptas cookies de terceros y posteriormente deseas eliminarlas, puede ser necesario hacerlo desde tu navegador o desde los mecanismos que ofrezca el propio tercero."
        },
        {
          title: "7. Transferencias internacionales (si aplica)",
          content: "Algunos proveedores (p. ej., analítica o marketing) pueden tratar datos fuera del Espacio Económico Europeo. En esos casos, se aplicarán las garantías previstas por la normativa (por ejemplo, cláusulas contractuales tipo u otros mecanismos válidos)."
        },
        {
          title: "8. Actualización del consentimiento y cambios en las cookies",
          content: "Si cambian las finalidades, las cookies o los terceros, actualizaremos esta Política de Cookies y, cuando proceda, te permitiremos tomar una nueva decisión. Como buena práctica, la AEPD considera razonable renovar el consentimiento periódicamente (por ejemplo, no más de 24 meses)."
        },
        {
          title: "9. Contacto",
          content: "Para dudas sobre esta Política de Cookies, puedes escribirnos a: info@ilustricia.com."
        },
        {
          content: [
            "Elche, 01/2026",
            "https://www.ilustricia.com",
            "IlustricIA soluciones digitales"
          ]
        }
      ]
    }
  },
  en: {
    nav: {
      services: "Our Services",
      about: "About Us",
      faqs: "FAQs",
      resources: "Resources",
      contact: "Contact Us",
      demo: "Try our demo"
    },
    hero: {
      title: "Ilustric",
      subtitle: "Digital and functional solutions for your digital ecosystem."
    },
    services: {
      badge: "Our Services",
      title: "We optimize every gear of your Operating Structure.",
      items: {
        voice: {
          title: "Voice Assistant",
          description: "Implementation of intelligent voice systems for telephone service and automated voice control."
        },
        automation: {
          title: "Process Automation",
          description: "Optimization of repetitive workflows to save time and reduce human errors in your operations."
        },
        chatbots: {
          title: "Agent Chatbots",
          description: "Advanced conversational agents that resolve doubts and manage orders autonomously 24/7."
        },
        funnels: {
          title: "Sales Funnels",
          description: "Design of optimized conversion funnels to maximize return on investment and lead acquisition."
        },
        web: {
          title: "Web Development",
          description: "Creation of modern, fast, and scalable digital platforms adapted to your business needs."
        },
        crm: {
          title: "Custom CRM",
          description: "Implementation and customization of customer management systems to improve retention and the sales cycle."
        },
        security: {
          title: "Cybersecurity",
          description: "Comprehensive protection of your digital assets and sensitive data against external threats and vulnerabilities."
        },
        consulting: {
          title: "Digital Consulting",
          description: "Strategic advice for the digital transformation of your company, identifying opportunities for improvement and growth."
        },
        software: {
          title: "Software Development",
          description: "Bespoke solutions designed to solve specific problems and scale your business with cutting-edge technology."
        }
      }
    },
    about: {
      badge: "About Us",
      title: "Forging the",
      titleSuffix: "of the next generation.",
      description: "At IlustricIA, we don't just build software; we design intelligent ecosystems. We are a team of visionaries, engineers, and creatives passionate about the intersection of artificial intelligence and human experience.",
      stats: {
        projects: "AI Projects",
        countries: "Countries",
        experts: "Experts",
        years: "Years of Innovation"
      }
    },
    features: {
      title: "From promise to practice",
      items: [
        {
          title: "Practical technology",
          description: "We don't apply AI for fashion. We solve concrete problems: automation, efficiency, and acquisition."
        },
        {
          title: "Personalized approach",
          description: "Bespoke solutions. We adapt technology to your unique culture, processes, and goals."
        },
        {
          title: "Comprehensive support",
          description: "From diagnosis to implementation. We don't just deliver technology, we ensure success."
        },
        {
          title: "Measurable results",
          description: "We transform data into decisions. We optimize times and reduce operational friction."
        },
        {
          title: "Competitive advantage",
          description: "Turn technology into your greatest asset for sustainable growth."
        }
      ],
      roi: {
        label: "ROI Impact",
        estimated: "Estimated Return",
        efficiency: "Annual operational efficiency"
      }
    },
    testimonials: {
      items: [
        {
          quote: "Since we implemented the phone assistant, we no longer have to worry about always being on the phone. Also, we used to lose many patients in our clinic because they called after hours, but now all calls are answered and our patients can schedule appointments at any time.",
          author: "Dr Vicente",
          role: "Owner",
          company: "Javaloyes Clinic"
        },
        {
          quote: "I used to spend all day checking the phone and WhatsApp messages to take reservations, and even then, I sometimes missed some. Since we implemented the assistant with this agency, all that changed: now customers book via WhatsApp or call and the system manages it by itself. I forget about that stress and focus on the restaurant.",
          author: "Ismael",
          role: "Owner",
          company: "Zagálico Restaurant"
        }
      ],
      client: "Client"
    },
    innovation: {
      title: "Innovation",
      items: [
        {
          headline: "Forbes: Automation is the key to business survival",
          description: "According to Forbes, companies that implement intelligent automation see a 30% increase in their operational efficiency, transforming manual processes into dynamic workflows."
        },
        {
          headline: "80% of executives consider AI fundamental to success",
          description: "Global studies indicate that generative AI adoption could add up to $4.4 trillion to the world economy annually, redefining the competitive landscape."
        },
        {
          headline: "Global investment in AI will exceed 300 billion in 2026",
          description: "By the end of 2026, it is estimated that 90% of Fortune 500 companies will have integrated autonomous AI agents into their operational core, marking the start of the hyper-efficiency era."
        }
      ],
      readStory: "Read the story",
      allStories: "All stories"
    },
    faqs: {
      badge: "Frequently Asked Questions",
      title: "We Solve Your Doubts.",
      items: [
        {
          question: "What is IlustricIA?",
          answer: "IlustricIA is a technology consultancy specialized in the integration of advanced Artificial Intelligence to optimize business processes, improve decision-making, and create innovative digital experiences."
        },
        {
          question: "How can AI help my business?",
          answer: "AI can automate repetitive tasks, analyze large volumes of data to find patterns, predict market trends, and improve customer service through intelligent conversational interfaces."
        },
        {
          question: "Do you offer custom solutions?",
          answer: "Yes, every project begins with a deep analysis of your specific needs. We develop bespoke models and workflows that integrate perfectly with your current infrastructure."
        },
        {
          question: "How long does it take to implement an AI solution?",
          answer: "Time varies depending on complexity. A basic integration can take a few weeks, while a custom generative AI system or complex predictive model can take 2 to 4 months."
        },
        {
          question: "Is the integration of my data secure?",
          answer: "Security is our priority. We implement end-to-end encryption protocols, comply with GDPR regulations, and ensure your data is used exclusively to train and run your own models privately."
        },
        {
          question: "How do I start working with you?",
          answer: "The first step is a free discovery session where we analyze your challenges. You can schedule a call directly from our ROI section or contact us through the form at the bottom of the page."
        }
      ],
      moreQuestions: "Have more questions? We're here to help.",
      contactUs: "Contact us now"
    },
    systemOfRecord: {
      badge: "INTELLIGENT CORE",
      title: "The operational brain your company needs.",
      description: "It's not just software; it's the nerve center of your business. IlustricIA integrates every process, data point, and decision into a fluid ecosystem that learns and evolves with you.",
      schedule: "Schedule appointment",
      demo: "Try our demo"
    },
    footerCta: {
      status: "OPERATIONAL STATUS: AVAILABLE | SCHEDULE YOUR APPOINTMENT BELOW ↓",
      title: "Shall we start the transformation of your operations?",
      subtitle: "Let's analyze your business in 20 minutes without commitment. Book your slot directly in our official calendar.",
      pillars: {
        diagnosis: {
          title: "QUICK DIAGNOSIS",
          subtitle: "Only 20 Minutes"
        },
        risk: {
          title: "ZERO RISK",
          subtitle: "No Commitment"
        },
        support: {
          title: "REAL SUPPORT",
          subtitle: "Practical Solutions"
        }
      },
      footerText: "Choose the day and time that suits you best. You will receive a Google Meets link automatically."
    },
    footer: {
      description: "Digital and functional solutions for your digital ecosystem.",
      pages: "Pages",
      social: "Social Media",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Legal Notice",
      cookies: "Cookies",
      rights: "All rights reserved."
    },
    privacyPage: {
      title: "Privacy Policy",
      lastUpdated: "01/2026",
      sections: [
        {
          content: "At IlustricIA we take privacy and the protection of your personal data very seriously. This Privacy Policy explains what data we collect, what we use it for, on what legal basis, for how long, with whom we share it, and what rights you have as a user."
        },
        {
          title: "1. Data Controller",
          content: [
            "Controller: IlustricIA Digital Solutions (trade name)",
            "Company Name: ILUSTRICIA SL",
            "NIF/CIF: B24927881",
            "Contact email: info@ilustricia.com",
            "Phone: +34 636 251 256",
            "Web: www.ilustricia.com",
            "Data Protection Officer (DPO): info@ilustricia.com"
          ]
        },
        {
          title: "2. What data we process",
          content: [
            "Depending on how you interact with the web, we may process:",
            "Identification and contact data: name, surname, email, telephone.",
            "Professional data: company, position, sector, project needs.",
            "Message data: information you send us when requesting an appointment, quote, or consultation.",
            "Browsing data: IP address, device/browser identifiers, and usage events (e.g., pages visited), especially if you use cookies/analytics.",
            "Social networks: if you contact us through social profiles, we will process the data available according to your settings and the social network itself.",
            "We do not request special categories of data (e.g., health, ideology) and we ask you not to include them in the forms."
          ]
        },
        {
          title: "3. Purposes of processing",
          content: [
            "We process your data for the following purposes:",
            "Attend to inquiries and requests (contact, information, quote).",
            "Manage the appointment / initial meeting reservation and prior and subsequent communication.",
            "Provide and manage our services (consulting and implementation of AI solutions, automation, web/marketplace development, etc.), including contractual management if applicable.",
            "Send commercial communications (newsletter, news, success stories) when you authorize it or when there is an applicable legitimate basis.",
            "Improve the web and security, prevent fraud and misuse, and maintain the technical integrity of the site."
          ]
        },
        {
          title: "4. Legal basis (legitimation)",
          content: [
            "Depending on the case, the legal basis will be:",
            "Execution of a contract or pre-contractual measures (e.g., request for proposal or meeting to start a project).",
            "Consent (e.g., sending commercial communications or non-necessary cookies).",
            "Compliance with legal obligations (e.g., tax/accounting obligations when there is a contract).",
            "Legitimate interest (e.g., site security, prevention of abuse, and basic service improvements, balanced with your rights).",
            "When the processing is based on consent, you may withdraw it at any time without affecting the lawfulness of the previous processing."
          ]
        },
        {
          title: "5. Recipients and data processors",
          content: [
            "We do not sell your data. We may communicate or allow access to your data to:",
            "Providers that provide us with services (for example: hosting, email, analytics tools, CRM, automation, video calls, calendars, technical support), acting as data processors under contract.",
            "Public administrations and competent authorities when there is a legal obligation."
          ]
        },
        {
          title: "6. International transfers",
          content: [
            "In case of using providers located outside the European Economic Area, Ilustricia will apply the guarantees required by the regulations (for example, Standard Contractual Clauses or other valid mechanisms)."
          ]
        },
        {
          title: "7. Retention periods",
          content: [
            "We will keep the data:",
            "Inquiries and requests: for the time necessary to attend to them and, afterwards, for the time necessary for monitoring and traceability.",
            "Clients and projects: during the contractual relationship and, subsequently, during the applicable legal periods (tax/accounting).",
            "Marketing: until you withdraw your consent or request cancellation.",
            "Security and technical logs: for the time strictly necessary for security and resolution of incidents."
          ]
        },
        {
          title: "8. Rights of users",
          content: [
            "You can exercise the rights of:",
            "Access, rectification, deletion, opposition, limitation of processing, portability (when applicable), and withdraw consent at any time.",
            "To exercise them, send us an email to soporte@ilustricia.com with the subject “Data protection” and indicating your request. We may ask you for additional information to verify your identity.",
            "If you consider that your rights have not been properly addressed, you can file a complaint with the Spanish Data Protection Agency (AEPD). sedeaepd.gob.es"
          ]
        },
        {
          title: "9. Security measures",
          content: [
            "Ilustricia applies reasonable technical and organizational measures to protect personal data against unauthorized access, loss, alteration, or disclosure."
          ]
        },
        {
          title: "10. Minors",
          content: [
            "Our services are not directed to children under 14 years of age. If we detect that we have processed data of a minor without valid authorization, we will proceed to its deletion."
          ]
        },
        {
          title: "11. Cookies and similar technologies",
          content: [
            "We use cookies and similar technologies. For more information, consult the Cookie Policy and the Configure Cookies (preferences) section."
          ]
        },
        {
          title: "12. Changes to this policy",
          content: [
            "We may update this Privacy Policy to reflect legal or technical changes. The “Last updated” date will indicate when it was last revised."
          ]
        },
        {
          content: [
            "Elche, 01/2026",
            "https://www.ilustricia.com",
            "IlustricIA digital solutions"
          ]
        }
      ]
    },
    legalPage: {
      title: "Legal Notice",
      lastUpdated: "01/2026",
      sections: [
        {
          content: "In compliance with the provisions of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSI-CE), the following general information of the website https://www.ilustricia.com is provided."
        },
        {
          title: "1. Identifying data",
          content: [
            "Owner: ILUSTRICIA SL",
            "Trade name: IlustricIA Digital Solutions",
            "NIF/CIF: B24927881",
            "Contact email: info@ilustricia.com",
            "Contact telephone: +34 636 251 256",
            "The purpose of this website is to publicize the activity, services and projects of IlustricIA, a company dedicated to consulting and developing technological solutions and Artificial Intelligence."
          ]
        },
        {
          title: "2. Conditions of use",
          content: [
            "Access and use of the website attributes the condition of user and implies full and unreserved acceptance of all the clauses of this Legal Notice. If you do not agree with any of the conditions, you must refrain from using this website.",
            "The user undertakes to make appropriate use of the content and services that IlustricIA offers, and not to use them for activities that are illegal or contrary to good faith, public order or the rights of third parties."
          ]
        },
        {
          title: "3. Intellectual and industrial property",
          content: [
            "All contents of the website (texts, images, logos, brands, structure, design, source code, etc.) are owned by IlustricIA or third parties who have authorized their use.",
            "The reproduction, distribution or transformation of said content without the express written authorization of the owner is prohibited."
          ]
        },
        {
          title: "4. External links",
          content: [
            "The website may include links to third-party pages. IlustricIA is not responsible for the content, privacy policies or practices of such external sites. The inclusion of links does not imply relationship, approval or endorsement by IlustricIA."
          ]
        },
        {
          title: "5. Limitation of liability",
          content: [
            "IlustricIA does not guarantee the permanent availability of the website or the absence of technical errors. It is not responsible for damages or losses derived from improper use or lack of availability of the site."
          ]
        },
        {
          title: "6. Privacy and cookies policy",
          content: [
            "The processing of personal data collected through the website will be governed by the provisions of the Privacy Policy, and the use of cookies by the Cookie Policy, both available on this same site."
          ]
        },
        {
          title: "7. Applicable law and jurisdiction",
          content: [
            "This Legal Notice is governed by Spanish law. For the resolution of any controversy that may derive from access or use of the website, the user submits to the jurisdiction of the Courts and Tribunals of Elche, unless the law provides otherwise."
          ]
        },
        {
          content: [
            "Elche, 01/2026",
            "https://www.ilustricia.com",
            "IlustricIA digital solutions"
          ]
        }
      ]
    },
    cookiesPage: {
      title: "Cookie Policy",
      lastUpdated: "01/2026",
      sections: [
        {
          title: "1. What are cookies?",
          content: "Cookies and similar technologies (e.g., pixels, tags, or identifiers) are files or devices that are stored in your browser or on your device when you browse. They serve, among other purposes, to remember your preferences, analyze site usage, or personalize content."
        },
        {
          title: "2. What types of cookies exist?",
          content: [
            "Depending on who manages them:",
            "Own cookies: sent and managed by this website.",
            "Third-party cookies: sent and managed by other entities (analytics providers, advertising, social networks, etc.).",
            "Depending on their purpose (usual classification):",
            "Technical or necessary: allow navigation and the use of basic functions.",
            "Preference or personalization: remember settings (language, region, etc.).",
            "Analysis or measurement: help understand how the web is used to improve it.",
            "Advertising / marketing: measure campaigns and can show personalized ads."
          ]
        },
        {
          title: "3. Legal basis",
          content: "In accordance with applicable regulations, we only install non-necessary cookies if the user provides their consent, after receiving clear and complete information."
        },
        {
          title: "4. Cookies used by this website",
          content: [
            "Below are the cookies (or equivalent technologies) that may be used on this website. Complete and adjust this table with your actual cookies.",
            "If you use third-party cookies, you must identify those third parties and provide access to their information (provider policies), as well as explain how to manage or delete them if the user accepted them and later wants to withdraw them."
          ]
        },
        {
          title: "5. How can you accept, reject or configure cookies?",
          content: [
            "When you access the web, a notice (banner) is shown that allows you to:",
            "Accept cookies,",
            "Reject non-necessary cookies, and/or",
            "Configure your preferences by categories.",
            "You must be able to deny or revoke consent as easily as granting it, and access to the configuration panel must be available in an accessible and permanent way (for example, through the “Configure cookies” link in the footer)."
          ]
        },
        {
          title: "6. How to disable or delete cookies from the browser",
          content: "In addition to the configuration panel, you can delete cookies from your browser options. Keep in mind that if you accept third-party cookies and later wish to delete them, it may be necessary to do so from your browser or from the mechanisms offered by the third party itself."
        },
        {
          title: "7. International transfers (if applicable)",
          content: "Some providers (e.g., analytics or marketing) may process data outside the European Economic Area. In those cases, the guarantees provided by the regulations will apply (for example, standard contractual clauses or other valid mechanisms)."
        },
        {
          title: "8. Consent update and changes in cookies",
          content: "If the purposes, cookies, or third parties change, we will update this Cookie Policy and, when appropriate, allow you to make a new decision. As a good practice, the AEPD considers it reasonable to renew consent periodically (for example, no more than 24 months)."
        },
        {
          title: "9. Contact",
          content: "For questions about this Cookie Policy, you can write to us at: info@ilustricia.com."
        },
        {
          content: [
            "Elche, 01/2026",
            "https://www.ilustricia.com",
            "IlustricIA digital solutions"
          ]
        }
      ]
    }
  },
  pt: {
    nav: {
      services: "Nossos Serviços",
      about: "Quem Somos",
      faqs: "FAQs",
      resources: "Recursos",
      contact: "Contate-nos",
      demo: "Teste nossa demo"
    },
    hero: {
      title: "Ilustric",
      subtitle: "Soluções digitais e funcionais para o seu ecossistema digital."
    },
    services: {
      badge: "Nossos Serviços",
      title: "Otimizamos cada engrenagem da sua Estrutura Operacional.",
      items: {
        voice: {
          title: "Assistente de voz",
          description: "Implementação de sistemas de voz inteligentes para atendimento telefônico e controle por voz automatizado."
        },
        automation: {
          title: "Automação de processos",
          description: "Otimização de fluxos de trabalho repetitivos para economizar tempo e reduzir erros humanos na sua operação."
        },
        chatbots: {
          title: "Chatbots agentes",
          description: "Agentes conversacionais avançados que resolvem dúvidas e gerenciam pedidos de forma autônoma 24/7."
        },
        funnels: {
          title: "Funnels de venda",
          description: "Design de funis de conversão otimizados para maximizar o retorno sobre o investimento e captação de leads."
        },
        web: {
          title: "Desenvolvimento Web",
          description: "Criação de plataformas digitais modernas, rápidas e escaláveis adaptadas às necessidades do seu negócio."
        },
        crm: {
          title: "CRM personalizado",
          description: "Implementação e personalização de sistemas de gestão de clientes para melhorar a retenção e o ciclo de vendas."
        },
        security: {
          title: "Cibersegurança",
          description: "Proteção integral dos seus ativos digitais e dados sensíveis contra ameaças externas e vulnerabilidades."
        },
        consulting: {
          title: "Consultoria digital",
          description: "Assessoria estratégica para a transformação digital da sua empresa, identificando oportunidades de melhoria e crescimento."
        },
        software: {
          title: "Desenvolvimento de software",
          description: "Soluções sob medida projetadas para resolver problemas específicos e escalar seu negócio com tecnologia de ponta."
        }
      }
    },
    about: {
      badge: "Quem Somos",
      title: "Forjando o",
      titleSuffix: "da próxima geração.",
      description: "Na IlustricIA, não apenas construímos software; projetamos ecossistemas inteligentes. Somos uma equipe de visionários, engenheiros e criativos apaixonados pela interseção entre inteligência artificial e experiência humana.",
      stats: {
        projects: "Projetos IA",
        countries: "Países",
        experts: "Especialistas",
        years: "Anos de Inovação"
      }
    },
    features: {
      title: "Da promessa à prática",
      items: [
        {
          title: "Tecnologia prática",
          description: "Não aplicamos IA por moda. Resolvemos problemas concretos: automação, eficiência e captação."
        },
        {
          title: "Abordagem personalizada",
          description: "Soluções sob medida. Adaptamos a tecnologia à sua cultura, processos e objetivos únicos."
        },
        {
          title: "Suporte integral",
          description: "Desde o diagnóstico até a implementação. Não apenas entregamos tecnologia, garantimos o sucesso."
        },
        {
          title: "Resultados mensuráveis",
          description: "Transformamos dados em decisões. Otimizamos tempos e reduzimos o atrito operacional."
        },
        {
          title: "Vantagem competitiva",
          description: "Transforme a tecnologia em seu maior ativo para um crescimento sustentável."
        }
      ],
      roi: {
        label: "Impacto ROI",
        estimated: "Retorno Estimado",
        efficiency: "Eficiência operacional anual"
      }
    },
    testimonials: {
      items: [
        {
          quote: "Desde que implementamos o assistente de voz, não precisamos mais nos preocupar em estar sempre pendentes do telefone. Além disso, antes perdíamos muitos pacientes em nossa clínica porque ligavam fora do horário, mas agora todas as chamadas são atendidas e nossos pacientes podem agendar consultas a qualquer hora.",
          author: "Dr Vicente",
          role: "Proprietário",
          company: "Clínica Javaloyes"
        },
        {
          quote: "Antes eu passava o dia pendente do telefone e das mensagens de WhatsApp para anotar reservas, e mesmo assim às vezes escapava alguma. Desde que implementamos o assistente com esta agência tudo isso mudou: agora os clientes reservam por WhatsApp ou chamada e o sistema gere tudo sozinho. Eu esqueço esse stress e concentro-me no restaurante.",
          author: "Ismael",
          role: "Proprietário",
          company: "Restaurante Zagálico"
        }
      ],
      client: "Cliente"
    },
    innovation: {
      title: "Inovação",
      items: [
        {
          headline: "Forbes: Automação é a chave para a sobrevivência empresarial",
          description: "Segundo a Forbes, empresas que implementam automação inteligente veem um aumento de 30% em sua eficiência operacional, transformando processos manuais em fluxos de trabalho dinâmicos."
        },
        {
          headline: "80% dos executivos consideram a IA fundamental para o sucesso",
          description: "Estudos globais indicam que a adoção de IA generativa poderia adicionar até 4,4 trilhões de dólares à economia mundial anualmente, redefinindo o cenário competitivo."
        },
        {
          headline: "O investimento global em IA superará 300 bilhões em 2026",
          description: "Até o final de 2026, estima-se que 90% das empresas Fortune 500 terão integrado agentes de IA autônomos em seu núcleo operacional, marcando o início da era da hiper-eficiência."
        }
      ],
      readStory: "Ler a história",
      allStories: "Todas as histórias"
    },
    faqs: {
      badge: "Perguntas Frequentes",
      title: "Resolvemos suas Dúvidas.",
      items: [
        {
          question: "O que é a IlustricIA?",
          answer: "A IlustricIA é uma consultoria tecnológica especializada na integração de Inteligência Artificial avançada para otimizar processos de negócios, melhorar a tomada de decisões e criar experiências digitais inovadoras."
        },
        {
          question: "Como a IA pode ajudar meu negócio?",
          answer: "A IA pode automatizar tarefas repetitivas, analisar grandes volumes de dados para encontrar padrões, prever tendências de mercado e melhorar o atendimento ao cliente por meio de interfaces conversacionais inteligentes."
        },
        {
          question: "Vocês oferecem soluções personalizadas?",
          answer: "Sim, cada projeto começa com uma análise profunda de suas necessidades específicas. Desenvolvemos modelos e fluxos de trabalho sob medida que se integram perfeitamente à sua infraestrutura atual."
        },
        {
          question: "Quanto tempo leva para implementar uma solução de IA?",
          answer: "O tempo varia de acordo com a complexidade. Uma integração básica pode levar algumas semanas, enquanto um sistema de IA generativa personalizado ou um modelo preditivo complexo pode levar de 2 a 4 meses."
        },
        {
          question: "A integração dos meus dados é segura?",
          answer: "A segurança é nossa prioridade. Implementamos protocolos de criptografia de ponta a ponta, cumprimos com a regulamentação GDPR e garantimos que seus dados sejam usados exclusivamente para treinar e executar seus próprios modelos de forma privada."
        },
        {
          question: "Como começo a trabalhar com vocês?",
          answer: "O primeiro passo é uma sessão de descoberta gratuita, onde analisamos seus desafios. Você pode agendar uma chamada diretamente de nossa seção de ROI ou nos contatar através do formulário no final da página."
        }
      ],
      moreQuestions: "Tem mais perguntas? Estamos aqui para ajudar.",
      contactUs: "Contate-nos agora"
    },
    systemOfRecord: {
      badge: "NÚCLEO INTELIGENTE",
      title: "O cérebro operacional que sua empresa precisa.",
      description: "Centralize e impulsione seu negócio com nossas soluções de IA. Automatize processos, analise dados em tempo real e dimensione sua operação com a tecnologia mais avançada do mercado.",
      schedule: "Agendar consulta",
      demo: "Teste nossa demo"
    },
    footerCta: {
      status: "ESTADO OPERACIONAL: DISPONÍVEL | AGENDE SUA CONSULTA ABAIXO ↓",
      title: "Vamos iniciar a transformação da sua operação?",
      subtitle: "Analisemos seu negócio em 20 minutos sem compromisso. Reserve seu horário diretamente em nosso calendário oficial.",
      pillars: {
        diagnosis: {
          title: "DIAGNÓSTICO RÁPIDO",
          subtitle: "Apenas 20 Minutos"
        },
        risk: {
          title: "ZERO RISCO",
          subtitle: "Sem Compromisso"
        },
        support: {
          title: "SUPORTE REAL",
          subtitle: "Soluções Práticas"
        }
      },
      footerText: "Escolha o dia e a hora que melhor lhe convier. Você receberá um link do Google Meets automaticamente."
    },
    footer: {
      description: "Soluções digitais e funcionais para o seu ecossistema digital.",
      pages: "Páginas",
      social: "Redes Sociais",
      legal: "Legal",
      privacy: "Privacidade",
      terms: "Aviso Legal",
      cookies: "Cookies",
      rights: "Todos os direitos reservados."
    },
    privacyPage: {
      title: "Política de Privacidade",
      lastUpdated: "01/2026",
      sections: [
        {
          content: "Na IlustricIA levamos muito a sério a privacidade e a proteção dos seus dados pessoais. Esta Política de Privacidade explica quais dados recolhemos, para que os usamos, com que base legal, por quanto tempo, com quem os partilhamos e quais direitos você tem como utilizador."
        },
        {
          title: "1. Responsável pelo tratamento",
          content: [
            "Responsável: IlustricIA Soluções Digitais (nome comercial)",
            "Razão social: ILUSTRICIA SL",
            "NIF/CIF: B24927881",
            "E-mail de contacto: info@ilustricia.com",
            "Telefone: +34 636 251 256",
            "Web: www.ilustricia.com",
            "Encarregado de Proteção de Dados (DPO): info@ilustricia.com"
          ]
        },
        {
          title: "2. Quais dados tratamos",
          content: [
            "Dependendo de como você interage com a web, podemos tratar:",
            "Dados identificativos e de contacto: nome, apelidos, e-mail, telefone.",
            "Dados profissionais: empresa, cargo, setor, necessidades do projeto.",
            "Dados da mensaje: informações que nos envia ao solicitar uma reunião, orçamento ou consulta.",
            "Dados de navegação: endereço IP, identificadores do dispositivo/navegador, e eventos de uso (por exemplo, páginas visitadas), especialmente se utilizar cookies/analítica.",
            "Redes sociais: se contactar connosco através de perfis sociais, trataremos os dados disponíveis de acordo com a sua configuração e a própria rede social.",
            "Não solicitamos categorias especiais de dados (ex: saúde, ideologia) e pedimos que não as inclua nos formulários."
          ]
        },
        {
          title: "3. Finalidades do tratamento",
          content: [
            "Tratamos os seus dados para as seguintes finalidades:",
            "Atender consultas e solicitações (contacto, informação, orçamento).",
            "Gerir a reserva de reunião inicial e a comunicação prévia e posterior.",
            "Prestar e administrar os nossos serviços (consultoria e implementação de soluções de IA, automação, desenvolvimento web/marketplaces, etc.), incluindo a gestão contratual, se aplicável.",
            "Enviar comunicações comerciais (newsletter, novidades, casos de sucesso) quando o autorizar ou quando existir uma base legítima aplicável.",
            "Melhorar a web e a segurança, prevenir fraude e uso indevido, e manter a integridade técnica do site."
          ]
        },
        {
          title: "4. Base jurídica (legitimação)",
          content: [
            "Dependendo do caso, a base legal será:",
            "Execução de um contrato o medidas pré-contratuais (ex: solicitação de proposta ou reunião para iniciar um projeto).",
            "Consentimento (ex: envio de comunicações comerciais ou cookies não necessários).",
            "Cumprimento de obrigações legais (ex: obrigações fiscais/contabilísticas quando existir contratação).",
            "Interesse legítimo (ex: segurança do site, prevenção de abuso, e melhorias básicas do serviço, equilibrado com os seus direitos).",
            "Quando o tratamento se basear no consentimento, poderá retirá-lo a qualquer momento sem que isso afete a licitude do tratamento anterior."
          ]
        },
        {
          title: "5. Destinatários e encarregados do tratamento",
          content: [
            "Não vendemos os seus dados. Poderemos comunicar ou permitir o acesso aos seus dados a:",
            "Fornecedores que nos prestam serviços (por exemplo: hosting, e-mail, ferramentas de analítica, CRM, automação, videochamadas, calendários, suporte técnico), atuando como encarregados do tratamento sob contrato.",
            "Administrações públicas e autoridades competentes quando existir uma obrigação legal."
          ]
        },
        {
          title: "6. Transferências internacionais",
          content: [
            "Em caso de utilização de fornecedores localizados fora do Espaço Económico Europeu, a Ilustricia aplicará as garantias exigidas pela normativa (por exemplo, Cláusulas Contratuais Padrão ou outros mecanismos válidos)."
          ]
        },
        {
          title: "7. Prazos de conservação",
          content: [
            "Conservaremos os dados:",
            "Consultas e solicitações: durante o tempo necessário para atendê-las e, posteriormente, pelo tempo necessário para acompanhamento e rastreabilidade.",
            "Clientes e projetos: durante a relação contratual e, posteriormente, durante os prazos legais aplicáveis (fiscais/contabilísticos).",
            "Marketing: até que retire o seu consentimento ou solicite a baixa.",
            "Segurança e logs técnicos: durante o tempo estritamente necessário para a segurança e a resolução de incidentes."
          ]
        },
        {
          title: "8. Direitos dos utilizadores",
          content: [
            "Pode exercer os direitos de:",
            "Acesso, retificação, eliminação, oposição, limitação do tratamento, portabilidade (quando aplicável), e retirar o consentimento a qualquer momento.",
            "Para exercê-los, envie-nos um e-mail para soporte@ilustricia.com com o assunto “Proteção de dados” e indicando a sua solicitação. Poderemos pedir-lhe informações adicionais para verificar a sua identidade.",
            "Se considerar que os seus derechos não foram atendidos corretamente, pode apresentar uma reclamação perante a Agência Espanhola de Proteção de Dados (AEPD). sedeaepd.gob.es"
          ]
        },
        {
          title: "9. Medidas de segurança",
          content: [
            "A Ilustricia aplica medidas técnicas e organizativas razoáveis para proteger os dados pessoais contra acessos não autorizados, perda, alteração ou divulgação."
          ]
        },
        {
          title: "10. Menores de idade",
          content: [
            "Os nossos serviços não são dirigidos a menores de 14 anos. Se detetarmos que tratamos dados de um menor sem autorização válida, procederemos à sua eliminação."
          ]
        },
        {
          title: "11. Cookies e tecnologias semelhantes",
          content: [
            "Utilizamos cookies e tecnologias semelhantes. Para mais informações, consulte a Política de Cookies e a secção Configurar Cookies (preferências)."
          ]
        },
        {
          title: "12. Alterações nesta política",
          content: [
            "Poderemos atualizar esta Política de Privacidade para refletir alterações legais ou técnicas. A data de “Última atualização” indicará quando foi revista pela última vez."
          ]
        },
        {
          content: [
            "Elche, 01/2026",
            "https://www.ilustricia.com",
            "IlustricIA soluções digitais"
          ]
        }
      ]
    },
    legalPage: {
      title: "Aviso Legal",
      lastUpdated: "01/2026",
      sections: [
        {
          content: "Em cumprimento do disposto na Lei 34/2002, de 11 de julho, de Serviços da Sociedade da Informação e de Comércio Eletrónico (LSSI-CE), é facultada a seguinte informação geral do sítio web https://www.ilustricia.com"
        },
        {
          title: "1. Dados identificativos",
          content: [
            "Titular: ILUSTRICIA SL",
            "Nome comercial: IlustricIA Soluciones Digitales",
            "NIF/CIF: B24927881",
            "E-mail de contacto: info@ilustricia.com",
            "Telefone de contacto: +34 636 251 256",
            "O presente sítio web tem por objeto dar a conhecer a atividade, serviços e projetos da IlustricIA, empresa dedicada à consultoria e desenvolvimento de soluções tecnológicas e Inteligência Artificial."
          ]
        },
        {
          title: "2. Condições de uso",
          content: [
            "O acesso e uso do sítio web atribui a condição de utilizador e supõe a aceitação plena e sem reservas de todas as cláusulas do presente Aviso Legal. Se não estiver de acordo com qualquer uma das condições, deverá abster-se de utilizar este sítio web.",
            "O utilizador compromete-se a fazer um uso adequado do conteúdo e dos serviços que a IlustricIA oferece, e a não os utilizar para atividades ilícitas ou contrárias à boa fé, à ordem pública ou aos direitos de terceiros."
          ]
        },
        {
          title: "3. Propriedade intelectual e industrial",
          content: [
            "Todos os conteúdos do sítio web (textos, imagens, logótipos, marcas, estrutura, design, código fonte, etc.) são titularidade da IlustricIA ou de terceiros que autorizaram o seu uso.",
            "Fica proibida a reprodução, distribuição ou transformação de tais conteúdos sem autorização expressa e por escrito do titular."
          ]
        },
        {
          title: "4. Links externos",
          content: [
            "O sítio web pode incluir links para páginas de terceiros. A IlustricIA não se responsabiliza pelos conteúdos, políticas de privacidade nem pelas práticas de tais sítios externos. A inclusão de links não implica relação, aprovação ou apoio por parte da IlustricIA."
          ]
        },
        {
          title: "5. Limitação de responsabilidade",
          content: [
            "A IlustricIA não garante a disponibilidade permanente do sítio web nem a ausência de erros técnicos. Não se responsabiliza por danos ou prejuízos derivados do uso indevido ou da falta de disponibilidade do sítio."
          ]
        },
        {
          title: "6. Política de privacidade e cookies",
          content: [
            "O tratamento dos dados pessoais recolhidos através do sítio web reger-se-á pelo disposto na Política de Privacidade, e o uso de cookies pela Política de Cookies, ambas disponíveis neste mesmo sítio."
          ]
        },
        {
          title: "7. Legislação aplicável e jurisdição",
          content: [
            "O presente Aviso Legal rege-se pela legislação espanhola. Para a resolução de qualquer controvérsia que possa derivar do acesso ou uso do sítio web, o utilizador submete-se à jurisdição dos Juízos e Tribunais de Elche, salvo se a lei dispuser o contrário."
          ]
        },
        {
          content: [
            "Elche, 01/2026",
            "https://www.ilustricia.com",
            "IlustricIA soluções digitais"
          ]
        }
      ]
    },
    cookiesPage: {
      title: "Política de Cookies",
      lastUpdated: "01/2026",
      sections: [
        {
          title: "1. O que são cookies?",
          content: "Cookies e tecnologias semelhantes (por exemplo, pixels, tags ou identificadores) são arquivos ou dispositivos que são armazenados no seu navegador ou no seu dispositivo quando você navega. Eles servem, entre outras finalidades, para lembrar suas preferências, analisar o uso do site ou personalizar conteúdos."
        },
        {
          title: "2. Que tipos de cookies existem?",
          content: [
            "Segundo quem os gerencia:",
            "Cookies próprios: enviados e gerenciados por este site.",
            "Cookies de terceiros: enviados e gerenciados por outras entidades (provedores de análise, publicidade, redes sociais, etc.).",
            "Segundo sua finalidade (classificação habitual):",
            "Técnicos ou necessários: permitem a navegação e o uso de funções básicas.",
            "De preferências ou personalização: lembram configurações (idioma, região, etc.).",
            "De análise ou medição: ajudam a entender como o site é usado para melhorá-lo.",
            "De publicidade / marketing: medem campanhas e podem mostrar anúncios personalizados."
          ]
        },
        {
          title: "3. Base jurídica",
          content: "De acordo com a normativa aplicável, apenas instalamos cookies não necessários se o usuário prestar seu consentimento, após receber informações claras e completas."
        },
        {
          title: "4. Cookies que este site utiliza",
          content: [
            "Abaixo estão indicados os cookies (ou tecnologias equivalentes) que podem ser utilizados neste site. Complete e ajuste esta tabela com seus cookies reais.",
            "Se você utiliza cookies de terceiros, deve identificar esses terceiros e facilitar o acesso às suas informações (políticas do provedor), além de explicar como gerenciá-los ou eliminá-los se o usuário os aceitou e depois quiser retirá-los."
          ]
        },
        {
          title: "5. Como você pode aceitar, rejeitar ou configurar cookies?",
          content: [
            "Quando você acessa o site, é exibido um aviso (banner) que permite:",
            "Aceitar cookies,",
            "Rejeitar cookies não necessários, e/ou",
            "Configurar suas preferências por categorias.",
            "Você deve poder negar ou revogar o consentimento de forma tão simples quanto concedê-lo, e o acesso ao painel de configuração deve estar disponível de forma acessível e permanente (por exemplo, através do link “Configurar cookies” no rodapé)."
          ]
        },
        {
          title: "6. Como desativar ou excluir cookies do navegador",
          content: "Além do painel de configuração, você pode excluir os cookies das opções do seu navegador. Tenha em conta que, se aceitar cookies de terceiros e posteriormente desejar eliminá-los, pode ser necessário fazê-lo a partir do seu navegador ou dos mecanismos oferecidos pelo próprio terceiro."
        },
        {
          title: "7. Transferências internacionais (se aplicável)",
          content: "Alguns provedores (ex: análise ou marketing) podem tratar dados fora do Espaço Econômico Europeu. Nesses casos, serão aplicadas as garantias previstas pela normativa (por exemplo, cláusulas contratuais padrão ou outros mecanismos válidos)."
        },
        {
          title: "8. Atualização do consentimento e mudanças nos cookies",
          content: "Se as finalidades, os cookies ou os terceiros mudarem, atualizaremos esta Política de Cookies e, quando apropriado, permitiremos que você tome uma nova decisão. Como boa prática, a AEPD considera razoável renovar o consentimento periodicamente (por exemplo, não mais de 24 meses)."
        },
        {
          title: "9. Contato",
          content: "Para dúvidas sobre esta Política de Cookies, você pode nos escrever em: info@ilustricia.com."
        },
        {
          content: [
            "Elche, 01/2026",
            "https://www.ilustricia.com",
            "IlustricIA soluções digitais"
          ]
        }
      ]
    }
  }
};
