import { useEffect, useState } from "react";
import "./App.css";

type Section = "home" | "sobre-mi" | "servicios" | "portfolio" | "contacto";
type PortfolioCategory = "retratos" | "trabajo" | "proyectos";
type Language = "es" | "en";

type PortfolioItem = {
  src: string;
  alt: string;
};

function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [activePortfolioCategory, setActivePortfolioCategory] = useState<PortfolioCategory>("retratos");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const header = document.querySelector(".site-header");
    const handleScroll = () => {
      if (!header) return;
      window.scrollY > 20 ? header.classList.add("scrolled") : header.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeSection, language]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => window.removeEventListener("keydown", handleEscape);
  }, [lightbox]);

  const t = {
    es: {
      nav: { about: "Sobre mí", services: "Servicios", portfolio: "Portfolio", contact: "Contacto" },
      home: { quote: <>cuando <span>la mirada</span> escucha historias</> },
      about: { title: "Sobre mí", p1: "Soy Sonia Chapelet, fotógrafa basada en Alicante...", p2: "Desarrollo proyectos de retrato..." },
      services: { title: "Servicios", artisticTitle: "Fotografía artística", artisticText: "Retratos, sesiones autorales...", commercialTitle: "Fotografía publicitaria", commercialText: "Imagen de producto..." },
      portfolio: { title: "Portfolio", retratos: "Retratos", trabajo: "Trabajo", proyectos: "Proyectos artísticos" },
      contact: { title: "Contacto", intro: "Si deseas información...", location: "Alicante, España", email: "Email", instagram: "Instagram" },
      alt: { hero: "Fotografía de Sonia Chapelet", zoom: "Imagen ampliada", close: "Cerrar", home: "Inicio" }
    },
    en: {
      nav: { about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact" },
      home: { quote: <>when <span>the gaze</span> listens to stories</> },
      about: { title: "About", p1: "I am Sonia Chapelet...", p2: "I develop portrait projects..." },
      services: { title: "Services", artisticTitle: "Artistic photography", artisticText: "Portraits...", commercialTitle: "Commercial photography", commercialText: "Product imagery..." },
      portfolio: { title: "Portfolio", retratos: "Portraits", trabajo: "Work", proyectos: "Artistic projects" },
      contact: { title: "Contact", intro: "If you would like information...", location: "Alicante, Spain", email: "Email", instagram: "Instagram" },
      alt: { hero: "Photograph by Sonia Chapelet", zoom: "Expanded image", close: "Close", home: "Home" }
    }
  }[language];

  const retratos: PortfolioItem[] = [
    { src: "/assets/retratos/sonia-chapelet-madre-de-espaldas-con-bebe.jpg", alt: "madre e hijo" },
    { src: "/assets/retratos/sonia-chapelet-madre-con-bebe-torso-desnudo-sentada-en-silla.jpg", alt: "maternidad" },
    { src: "/assets/retratos/sonia-chapelet-retrato-adolescente-sentada-en-escalera-con-paraguas-transparente.jpg", alt: "adolescente" },
    { src: "/assets/retratos/sonia-chapelet-retrato-madre-amamantando.jpg", alt: "amamantando" },
    { src: "/assets/retratos/sonia-chapelet-mujer-embarazada-parada-de-espaldas-frente-espejo.jpg", alt: "embarazo" },
    { src: "/assets/retratos/sonia-chapelet-retrato-mujer-embarazada-sentada-en-el-piso-envuelta-en-tules.jpg", alt: "tules" }
  ];

  const trabajo: PortfolioItem[] = [
    { src: "/assets/trabajo/sonia-chapelet-fotografia-bebe-siesta-bajo-un-arbol.jpg", alt: "bebe siesta" },
    { src: "/assets/trabajo/sonia-chapelet-madre-sentada-con-pie-en-silla-amamantando.jpg", alt: "madre amamantando" },
    { src: "/assets/trabajo/sonia-chapelet-retrato-niña-recien-nacida-durmiendo-con-tutu.jpg", alt: "newborn" }
  ];

  const proyectos: PortfolioItem[] = [
    { src: "/assets/proyectos/sonia-chapelet-retrato-mujer-joven-rubia.jpg", alt: "mujer rubia" },
    { src: "/assets/proyectos/sonia-chapelet-retrato-mujer-morena-delante-de-un-faro-en-alicante.jpg", alt: "mujer faro" },
    { src: "/assets/proyectos/sonia-chapelet-retrato-mujer-rubia-joven-con-abrigo-simil-piel.jpg", alt: "abrigo piel" },
    { src: "/assets/proyectos/sonia-chapelet-retrato-perfil-mujer-joven-rubia-con-sol-en-la-cara.jpg", alt: "perfil sol" }
  ];

  const renderPortfolioGrid = (items: PortfolioItem[]) => (
    <div className="portfolio-grid">
      {items.map((item) => (
        <button key={item.src} className="portfolio-item" onClick={() => setLightbox(item.src)}>
          <img src={item.src} alt={item.alt} loading="lazy" />
        </button>
      ))}
    </div>
  );

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-content">
          <button className="site-title" onClick={() => setActiveSection("home")}>Sonia Chapelet</button>
          <nav className="nav-links">
            <button className={activeSection === "sobre-mi" ? "active" : ""} onClick={() => setActiveSection("sobre-mi")}>{t.nav.about}</button>
            <button className={activeSection === "servicios" ? "active" : ""} onClick={() => setActiveSection("servicios")}>{t.nav.services}</button>
            <button className={activeSection === "portfolio" ? "active" : ""} onClick={() => setActiveSection("portfolio")}>{t.nav.portfolio}</button>
            <button className={activeSection === "contacto" ? "active" : ""} onClick={() => setActiveSection("contacto")}>{t.nav.contact}</button>
          </nav>
          <div className="lang-switch">
            <button className={language === "es" ? "active" : ""} onClick={() => setLanguage("es")}>ES</button>
            <span>/</span>
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button>
          </div>
        </div>
      </header>
      <main>
        {activeSection === "home" && (
          <section className="home-section">
            <div className="hero-image"><img src="/assets/retratos/sonia-chapelet-madre-con-bebe-torso-desnudo-sentada-en-silla.jpg" alt="Hero" /></div>
            <h1 className="quote">{t.home.quote}</h1>
          </section>
        )}
        {activeSection === "sobre-mi" && <section className="section-content"><h2>{t.about.title}</h2><p>{t.about.p1}</p></section>}
        {activeSection === "portfolio" && (
          <section className="section-content">
            <h2>{t.portfolio.title}</h2>
            <nav className="portfolio-nav">
              <button onClick={() => setActivePortfolioCategory("retratos")}>{t.portfolio.retratos}</button>
              <button onClick={() => setActivePortfolioCategory("trabajo")}>{t.portfolio.trabajo}</button>
              <button onClick={() => setActivePortfolioCategory("proyectos")}>{t.portfolio.proyectos}</button>
            </nav>
            {activePortfolioCategory === "retratos" && renderPortfolioGrid(retratos)}
            {activePortfolioCategory === "trabajo" && renderPortfolioGrid(trabajo)}
            {activePortfolioCategory === "proyectos" && renderPortfolioGrid(proyectos)}
          </section>
        )}
      </main>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Zoom" />
        </div>
      )}
    </div>
  );
}

export default App;
