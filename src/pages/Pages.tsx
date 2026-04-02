import { useEffect, useState } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useParams,
} from "react-router-dom";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import {
  heroImage,
  proyectos,
  retratos,
  trabajo,
  type PortfolioItem,
} from "../data/portfolio";
import { getSeo } from "../i18n/seo";
import { getTranslations } from "../i18n/strings";
import type { Language } from "../i18n/strings";

function useLang(): Language {
  const { lang } = useParams();
  return (lang === "en" ? "en" : "es") as Language;
}

export function HomePage() {
  const lang = useLang();
  const location = useLocation();
  const t = getTranslations(lang);
  const seo = getSeo(lang, "home");

  return (
    <>
      <Seo
        lang={lang}
        title={seo.title}
        description={seo.description}
        path={location.pathname}
      />
      <main className="home-shell">
        <section className="home-view">
          <div className="hero-top">
            <h1 className="hero-quote">{t.home.quote}</h1>
          </div>

          <div className="hero-stage">
            <ResponsiveImage
              meta={heroImage}
              alt={t.alt.hero}
              className="hero-main-image"
              sizes="(max-width: 720px) 100vw, min(1200px, 92vw)"
              fetchPriority="high"
            />
          </div>
        </section>
      </main>
    </>
  );
}

export function AboutPage() {
  const lang = useLang();
  const location = useLocation();
  const t = getTranslations(lang);
  const seo = getSeo(lang, "about");

  return (
    <>
      <Seo
        lang={lang}
        title={seo.title}
        description={seo.description}
        path={location.pathname}
      />
      <main className="page-shell">
        <section className="inner-view">
          <div className="text-panel">
            <h2>{t.about.title}</h2>
            <p>{t.about.p1}</p>
            <p className="section-secondary-text">{t.about.p2}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export function ServicesPage() {
  const lang = useLang();
  const location = useLocation();
  const t = getTranslations(lang);
  const seo = getSeo(lang, "services");

  return (
    <>
      <Seo
        lang={lang}
        title={seo.title}
        description={seo.description}
        path={location.pathname}
      />
      <main className="page-shell">
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
      </main>
    </>
  );
}

export type PortfolioCategory = "retratos" | "trabajo" | "proyectos";

const CATEGORIES: PortfolioCategory[] = ["retratos", "trabajo", "proyectos"];

function itemsForCategory(cat: PortfolioCategory): PortfolioItem[] {
  if (cat === "retratos") return retratos;
  if (cat === "trabajo") return trabajo;
  return proyectos;
}

export function PortfolioPage() {
  const { lang, category } = useParams();
  const location = useLocation();
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
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

  if (!lang || (lang !== "es" && lang !== "en")) {
    return <Navigate to="/es" replace />;
  }

  const language = lang as Language;
  const base = `/${lang}`;
  const t = getTranslations(language);
  const seo = getSeo(language, "portfolio");

  if (!category && location.pathname.match(/\/portfolio$/)) {
    return <Navigate to={`${base}/portfolio/retratos`} replace />;
  }

  const activeCategory: PortfolioCategory =
    (category as PortfolioCategory) ?? "retratos";

  if (!CATEGORIES.includes(activeCategory)) {
    return <Navigate to={`${base}/portfolio/retratos`} replace />;
  }

  const renderPortfolioGrid = (items: PortfolioItem[]) => (
    <div className="portfolio-grid">
      {items.map((item) => (
        <button
          key={item.grid.src}
          type="button"
          className="portfolio-item"
          onClick={() => setLightbox(item.lightbox)}
          aria-label={item.alt}
        >
          <ResponsiveImage
            meta={item.grid}
            alt={item.alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
            loading="lazy"
          />
        </button>
      ))}
    </div>
  );

  return (
    <>
      <Seo
        lang={language}
        title={seo.title}
        description={seo.description}
        path={location.pathname}
      />
      <main className="page-shell">
        <section className="inner-view portfolio-view">
          <div className="portfolio-panel">
            <h2>{t.portfolio.title}</h2>

            <div className="portfolio-categories">
              <Link
                to={`${base}/portfolio/retratos`}
                className={activeCategory === "retratos" ? "active" : ""}
              >
                {t.portfolio.retratos}
              </Link>

              <Link
                to={`${base}/portfolio/trabajo`}
                className={activeCategory === "trabajo" ? "active" : ""}
              >
                {t.portfolio.trabajo}
              </Link>

              <Link
                to={`${base}/portfolio/proyectos`}
                className={activeCategory === "proyectos" ? "active" : ""}
              >
                {t.portfolio.proyectos}
              </Link>
            </div>

            {renderPortfolioGrid(itemsForCategory(activeCategory))}
          </div>
        </section>
      </main>

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
    </>
  );
}

export function ContactPage() {
  const lang = useLang();
  const location = useLocation();
  const t = getTranslations(lang);
  const seo = getSeo(lang, "contact");

  return (
    <>
      <Seo
        lang={lang}
        title={seo.title}
        description={seo.description}
        path={location.pathname}
      />
      <main className="page-shell">
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
      </main>
    </>
  );
}
