import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "Derkaoui Yassir | Full Stack Developer & IT Trainer";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = description || "Portfolio of Derkaoui Yassir, a passionate Full Stack Developer and IT Trainer specializing in React, Next.js, Laravel, and Spring Boot.";
  const siteKeywords = keywords || "Derkaoui Yassir, Full Stack Developer, IT Trainer, React, Next.js, Laravel, Spring Boot";
  const siteUrl = "https://yourportfolio.com/";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const siteImage = image || "https://yourportfolio.com/og-image.png";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />

      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
