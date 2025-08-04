export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  code: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  siteName: string;
  locale: string;
}

export interface LocaleProps {
  locale: string;
  locales: string[];
  defaultLocale: string;
}