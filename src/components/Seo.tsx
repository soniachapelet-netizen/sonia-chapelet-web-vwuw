import { Helmet } from "react-helmet-async";
import { getSiteBaseUrl } from "../site";

type Props = {
  lang: "es" | "en";
  title: string;
  description: string;
  path: string;
};

export function Seo({ lang, title, description, path }: Props) {
  const base = getSiteBaseUrl();
  const url = base ? `${base}${path}` : path;
  const ogImage = base ? `${base}/og-default.jpg` : "/og-default.jpg";
  const locale = lang === "es" ? "es_ES" : "en_US";

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      {base ? <link rel="canonical" href={url} /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image" content={ogImage} />
      {base ? <meta property="og:url" content={url} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
