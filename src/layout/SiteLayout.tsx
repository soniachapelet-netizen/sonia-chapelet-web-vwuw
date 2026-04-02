import { useEffect } from "react";
import {
  Link,
  NavLink,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getTranslations } from "../i18n/strings";
import type { Language } from "../i18n/strings";

export function SiteLayout() {
  const { lang } = useParams();
  const location = useLocation();
  const isValidLanguage = lang === "es" || lang === "en";

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
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  if (!isValidLanguage) {
    return <Navigate to="/es" replace />;
  }

  const language = lang as Language;
  const t = getTranslations(language);

  const base = `/${lang}`;
  const pathEs = location.pathname.replace(/^\/(es|en)/, "/es");
  const pathEn = location.pathname.replace(/^\/(es|en)/, "/en");

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-content">
          <Link to={base} className="site-title" aria-label={t.alt.home}>
            Sonia Chapelet
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            <NavLink
              to={`${base}/sobre-mi`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t.nav.about}
            </NavLink>

            <NavLink
              to={`${base}/servicios`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t.nav.services}
            </NavLink>

            <NavLink
              to={`${base}/portfolio`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t.nav.portfolio}
            </NavLink>

            <NavLink
              to={`${base}/contacto`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t.nav.contact}
            </NavLink>
          </nav>

          <div className="lang-switch" aria-label="Language selector">
            <Link to={pathEs} className={language === "es" ? "active" : ""}>
              ES
            </Link>

            <span className="lang-divider">/</span>

            <Link to={pathEn} className={language === "en" ? "active" : ""}>
              EN
            </Link>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
