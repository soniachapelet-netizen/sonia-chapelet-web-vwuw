import { useEffect, useState } from "react";
import "./App.css";

import proyecto1 from "./assets/images/proyectos/sonia-chapelet-retrato-mujer-joven-rubia.jpg";
import proyecto2 from "./assets/images/proyectos/sonia-chapelet-retrato-mujer-morena-delante-de-un-faro-en-alicante.jpg";
import proyecto3 from "./assets/images/proyectos/sonia-chapelet-retrato-perfil-mujer-joven-rubia-con-sol-en-la-cara.jpg";
import proyecto4 from "./assets/images/proyectos/sonia-chapelet-retrato-de-mujer-rubia-con-abrigo-simil-piel.jpg";

import retrato1 from "./assets/images/retratos/sonia-chapelet-fotografia-bebe-siesta-bajo-un-arbol.jpg";
import retrato3 from "./assets/images/retratos/sonia-chapelet-madre-de-espaldas-con-bebe.jpg";
import retrato4 from "./assets/images/retratos/sonia-chapelet-retrato-madre-amamantando.jpg";

import trabajo1 from "./assets/images/trabajo/sonia-chapelet-madre-sentada-con-pie-en-silla-amamantando.jpg";

type Section = "home" | "sobre-mi" | "servicios" | "portfolio" | "contacto";
type PortfolioCategory = "retratos" | "trabajo" | "proyectos";
type Language = "es" | "en";

type PortfolioItem = {
  src: string;
  alt: string;
};

function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [activePortfolioCategory, setActivePortfolioCategory] =
    useState<PortfolioCategory>("retratos");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const header = document.querySelector(".site-header");

    const handleScroll = () => {
      if (!header) return;

      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [activeSection, language]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const t = {
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
        ),
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
        ),
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

  const retratos: PortfolioItem[] = [
    {
      src: retrato1,
      alt: "Bebé durmiendo bajo un árbol con luz natural suave",
    },
    {
      src: retrato3,
      alt: "Madre de espaldas con su bebé en brazos en un retrato íntimo",
    },
    {
      src: retrato4,
      alt: "Madre amamantando a su bebé con luz natural, fotografía de maternidad",
    },
  ];

  const trabajo: PortfolioItem[] = [
    {
      src: trabajo1,
      alt: "Madre amamantando sentada en interior con luz lateral suave",
    },
  ];

  const proyectos: PortfolioItem[] = [
    {
      src: proyecto1,
      alt: "Retrato de mujer joven rubia con luz natural, fotografía autoral",
    },
    {
      src: proyecto2,
      alt: "Retrato de mujer frente a un faro en Alicante, fotografía artística en exterior",
    },
    {
      src: proyecto3,
      alt: "Retrato de perfil de mujer joven con luz de sol en el rostro, fotografía autoral",
    },
    {
      src: proyecto4,
      alt: "Retrato de mujer rubia con abrigo simil piel, fotografía editorial con luz cálida",
    },
  ];

  const goToSection = (section: Section) => {
    setActiveSection(section);
  };

  const renderPortfolioGrid = (items: PortfolioItem[]) => {
    return (
      <div className="portfolio-grid">
        {items.map((item) => (
          <button
            key={item.src}
            type="button"
            className="portfolio-item"
            onClick={() => setLightbox(item.src)}
            aria-label={item.alt}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-content">
          <button
            type="button"
            className="site-title"
            onClick={() => goToSection("home")}
            aria-label={t.alt.home}
          >
            Sonia Chapelet
          </button>

          <nav className="nav-links" aria-label="Main navigation">
            <button
              type="button"
              className={activeSection === "sobre-mi" ? "active" : ""}
              onClick={() => goToSection("sobre-mi")}
            >
              {t.nav.about}
            </button>

            <button
              type="button"
              className={activeSection === "servicios" ? "active" : ""}
              onClick={() => goToSection("servicios")}
            >
              {t.nav.services}
            </button>

            <button
              type="button"
              className={activeSection === "portfolio" ? "active" : ""}
              onClick={() => goToSection("portfolio")}
            >
              {t.nav.portfolio}
            </button>

            <button
              type="button"
              className={activeSection === "contacto" ? "active" : ""}
              onClick={() => goToSection("contacto")}
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="lang-switch" aria-label="Language selector">
            <button
              type="button"
              className={language === "es" ? "active" : ""}
              onClick={() => setLanguage("es")}
            >
              ES
            </button>

            <span className="lang-divider">/</span>

            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {activeSection === "home" ? (
        <main className="home-shell">
          <section className="home-view">
            <div className="hero-top">
              <h1 className="hero-quote">{t.home.quote}</h1>
            </div>

            <div className="hero-stage">
              <img
                src="/assets/couple_1.jpg"
                alt={t.alt.hero}
                className="hero-main-image"
              />
            </div>
          </section>
        </main>
      ) : (
        <main className="page-shell">
          {activeSection === "sobre-mi" && (
            <section className="inner-view">
              <div className="text-panel">
                <h2>{t.about.title}</h2>
                <p>{t.about.p1}</p>
                <p className="section-secondary-text">{t.about.p2}</p>
              </div>
            </section>
          )}

          {activeSection === "servicios" && (
            <section className="inner-view">
              <div className="text-panel">
                <h2>{t.services.title}</h2>

                <div className="services-grid">
                  <div className="service-card">
                    <h3>{t.services.artisticTitle}</h3>
                    <p>{t.services.artisticText}</p>
                  </div>

                  <div className="service-card">
                    <h3>{t.services.commercialTitle}</h3>
                    <p>{t.services.commercialText}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === "portfolio" && (
            <section className="inner-view portfolio-view">
              <div className="portfolio-panel">
                <h2>{t.portfolio.title}</h2>

                <div className="portfolio-categories">
                  <button
                    type="button"
                    className={activePortfolioCategory === "retratos" ? "active" : ""}
                    onClick={() => setActivePortfolioCategory("retratos")}
                  >
                    {t.portfolio.retratos}
                  </button>

                  <button
                    type="button"
                    className={activePortfolioCategory === "trabajo" ? "active" : ""}
                    onClick={() => setActivePortfolioCategory("trabajo")}
                  >
                    {t.portfolio.trabajo}
                  </button>

                  <button
                    type="button"
                    className={activePortfolioCategory === "proyectos" ? "active" : ""}
                    onClick={() => setActivePortfolioCategory("proyectos")}
                  >
                    {t.portfolio.proyectos}
                  </button>
                </div>

                {activePortfolioCategory === "retratos" &&
                  renderPortfolioGrid(retratos)}

                {activePortfolioCategory === "trabajo" &&
                  renderPortfolioGrid(trabajo)}

                {activePortfolioCategory === "proyectos" &&
                  renderPortfolioGrid(proyectos)}
              </div>
            </section>
          )}

          {activeSection === "contacto" && (
            <section className="inner-view">
              <div className="contact-panel">
                <h2>{t.contact.title}</h2>

                <p className="contact-intro">{t.contact.intro}</p>
                <p className="contact-location">{t.contact.location}</p>

                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-label">{t.contact.email}</span>
                    <a
                      href="mailto:soniachapelet@gmail.com?subject=Consulta%20fotografía"
                      className="contact-link"
                    >
                      soniachapelet@gmail.com
                    </a>
                  </div>

                  <div className="contact-item">
                    <span className="contact-label">{t.contact.instagram}</span>
                    <a
                      href="https://instagram.com/sonia.chapelet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      @sonia.chapelet
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      )}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label={t.alt.close}
            >
              ×
            </button>

            <img src={lightbox} alt={t.alt.zoom} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;