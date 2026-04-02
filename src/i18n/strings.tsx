import type { ReactNode } from "react";

export type Language = "es" | "en";

export function getTranslations(language: Language) {
  return {
    es: {
      nav: {
        about: "Sobre mí",
        services: "Servicios",
        portfolio: "Portfolio",
        contact: "Contacto",
      },
      home: {
        quote: (
          <>
            cuando <span>la mirada</span> escucha historias
          </>
        ) as ReactNode,
      },
      about: {
        title: "Sobre mí",
        p1: "Soy Sonia Chapelet, fotógrafa basada en Alicante, España, enfocada en la imagen como herramienta de memoria, identidad y comunicación.",
        p2: "Desarrollo proyectos de retrato, fotografía artística y encargos visuales con una mirada sensible, editorial y autoral.",
      },
      services: {
        title: "Servicios",
        artisticTitle: "Fotografía artística",
        artisticText:
          "Retratos, sesiones autorales y proyectos con identidad visual propia.",
        commercialTitle: "Fotografía publicitaria",
        commercialText:
          "Imagen de producto, marca personal y contenidos visuales para comunicación y presencia online.",
      },
      portfolio: {
        title: "Portfolio",
        retratos: "Retratos",
        trabajo: "Trabajo",
        proyectos: "Proyectos artísticos",
      },
      contact: {
        title: "Contacto",
        intro:
          "Si deseas información sobre sesiones, colaboraciones o encargos profesionales, puedes escribirme directamente.",
        location: "Alicante, España",
        email: "Email",
        instagram: "Instagram",
      },
      alt: {
        hero: "Fotografía de Sonia Chapelet",
        zoom: "Imagen ampliada",
        close: "Cerrar imagen",
        home: "Ir al inicio",
      },
    },
    en: {
      nav: {
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
      },
      home: {
        quote: (
          <>
            when <span>the gaze</span> listens to stories
          </>
        ) as ReactNode,
      },
      about: {
        title: "About",
        p1: "I am Sonia Chapelet, a photographer based in Alicante, Spain, focused on image as a tool for memory, identity, and communication.",
        p2: "I develop portrait projects, artistic photography, and commissioned visual work with a sensitive, editorial, and authorial gaze.",
      },
      services: {
        title: "Services",
        artisticTitle: "Artistic photography",
        artisticText:
          "Portraits, authorial sessions, and projects with a strong visual identity.",
        commercialTitle: "Commercial photography",
        commercialText:
          "Product imagery, personal branding, and visual content for communication and online presence.",
      },
      portfolio: {
        title: "Portfolio",
        retratos: "Portraits",
        trabajo: "Work",
        proyectos: "Artistic projects",
      },
      contact: {
        title: "Contact",
        intro:
          "If you would like information about sessions, collaborations, or professional commissions, you can write to me directly.",
        location: "Alicante, Spain",
        email: "Email",
        instagram: "Instagram",
      },
      alt: {
        hero: "Photograph by Sonia Chapelet",
        zoom: "Expanded image",
        close: "Close image",
        home: "Go to home",
      },
    },
  }[language];
}
