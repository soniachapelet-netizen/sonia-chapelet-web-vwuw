import type { Language } from "./strings";

type PageKey = "home" | "about" | "services" | "portfolio" | "contact";

export function getSeo(
  lang: Language,
  page: PageKey,
): { title: string; description: string } {
  const es: Record<PageKey, { title: string; description: string }> = {
    home: {
      title: "Sonia Chapelet | Fotógrafa en Alicante",
      description:
        "Retrato, maternidad y proyectos artísticos en Alicante. Fotografía con mirada editorial y sensibilidad.",
    },
    about: {
      title: "Sobre mí | Sonia Chapelet",
      description:
        "Fotógrafa en Alicante: retrato, fotografía artística e imagen para memoria, identidad y comunicación.",
    },
    services: {
      title: "Servicios | Sonia Chapelet",
      description:
        "Fotografía artística y publicitaria: retratos, sesiones autorales, marca personal y contenidos visuales.",
    },
    portfolio: {
      title: "Portfolio | Sonia Chapelet",
      description:
        "Retratos, trabajo editorial y proyectos artísticos de Sonia Chapelet, fotógrafa en Alicante.",
    },
    contact: {
      title: "Contacto | Sonia Chapelet",
      description:
        "Contacta para sesiones, colaboraciones o encargos profesionales. Alicante, España.",
    },
  };

  const en: Record<PageKey, { title: string; description: string }> = {
    home: {
      title: "Sonia Chapelet | Photographer in Alicante",
      description:
        "Portrait, motherhood, and artistic projects in Alicante. Editorial, sensitive photography.",
    },
    about: {
      title: "About | Sonia Chapelet",
      description:
        "Photographer in Alicante: portrait, artistic photography, and image for memory, identity, and communication.",
    },
    services: {
      title: "Services | Sonia Chapelet",
      description:
        "Artistic and commercial photography: portraits, authorial sessions, personal branding, and visual content.",
    },
    portfolio: {
      title: "Portfolio | Sonia Chapelet",
      description:
        "Portraits, editorial work, and artistic projects by Sonia Chapelet, photographer in Alicante.",
    },
    contact: {
      title: "Contact | Sonia Chapelet",
      description:
        "Get in touch for sessions, collaborations, or professional commissions. Alicante, Spain.",
    },
  };

  return lang === "es" ? es[page] : en[page];
}
