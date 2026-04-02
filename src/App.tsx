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
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeSection, language]);

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

  const renderPortfolioGrid = (items: PortfolioItem[]) => {
    return (
      <div className="portfolio-grid">
        {items.map((item) => (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            onClick={() => setLightbox(item.src)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-content">
          <button className="site-title" onClick={() => setActiveSection("home")}>
            Sonia Chapelet
          </button>

          <nav className="nav-links">
            <button onClick={() => setActiveSection("sobre-mi")}>Sobre mí</button>
            <button onClick={() => setActiveSection("servicios")}>Servicios</button>
            <button onClick={() => setActiveSection("portfolio")}>Portfolio</button>
            <button onClick={() => setActiveSection("contacto")}>Contacto</button>
          </nav>
        </div>
      </header>

      {activeSection === "home" ? (
        <main className="home-shell">
          <section className="home-view">
            <div className="hero-top">
              <h1 className="hero-quote">
                cuando <span>la mirada</span> escucha historias
              </h1>
            </div>

            <div className="hero-stage">
              <img
                src="/assets/couple_1.jpg"
                alt="Fotografía de Sonia Chapelet"
                className="hero-main-image"
              />
            </div>
          </section>
        </main>
      ) : (
        <main className="page-shell page-shell-inner">
          {activeSection === "portfolio" && (
            <section className="portfolio-view">
              <h2>Portfolio</h2>

              <div className="portfolio-categories">
                <button onClick={() => setActivePortfolioCategory("retratos")}>
                  Retratos
                </button>
                <button onClick={() => setActivePortfolioCategory("trabajo")}>
                  Trabajo
                </button>
                <button onClick={() => setActivePortfolioCategory("proyectos")}>
                  Proyectos
                </button>
              </div>

              {activePortfolioCategory === "retratos" &&
                renderPortfolioGrid(retratos)}

              {activePortfolioCategory === "trabajo" &&
                renderPortfolioGrid(trabajo)}

              {activePortfolioCategory === "proyectos" &&
                renderPortfolioGrid(proyectos)}
            </section>
          )}
        </main>
      )}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Imagen ampliada" />
        </div>
      )}
    </div>
  );
}

export default App;