import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  noIndex?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  description, 
  noIndex = false 
}) => {
  const siteName = 'DiamondBev.pl';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://diamondbev.pl';
  
  const pageTitle = title ? `${title} | ${siteName}` : `${siteName} - Produkcja i Dostawa Napojów`;
  const pageDescription = description || 'Specjalizujemy się w produkcji i dostawie wysokiej jakości napojów alkoholowych i bezalkoholowych. Kompleksowe rozwiązania dla branży napojowej.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="canonical" href={siteUrl} />
        
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DiamondBev.pl",
              "url": siteUrl,
              "description": pageDescription,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+48-123-456-789",
                "contactType": "customer service",
                "availableLanguage": ["Polish", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PL",
                "addressLocality": "Warsaw"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;