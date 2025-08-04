import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout
      title="DiamondBev.pl - Produkcja i Dostawa Napojów"
      description="Specjalizujemy się w produkcji i dostawie wysokiej jakości napojów alkoholowych i bezalkoholowych. Kompleksowe rozwiązania dla branży napojowej."
    >
      <Hero />
      <Services />
      <About />
      <Contact />
    </Layout>
  );
}