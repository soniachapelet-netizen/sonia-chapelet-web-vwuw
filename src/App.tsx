import { Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "./layout/SiteLayout";
import {
  AboutPage,
  ContactPage,
  HomePage,
  PortfolioPage,
  ServicesPage,
} from "./pages/Pages";

import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/es" replace />} />
      <Route path="/:lang" element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre-mi" element={<AboutPage />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio/:category" element={<PortfolioPage />} />
        <Route path="contacto" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/es" replace />} />
    </Routes>
  );
}
