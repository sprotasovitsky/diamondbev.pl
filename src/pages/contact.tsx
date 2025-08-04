import Layout from '@/components/layout/Layout';
import Contact from '@/components/sections/Contact';

export default function ContactPage() {
  return (
    <Layout
      title="Kontakt - DiamondBev.pl"
      description="Skontaktuj się z DiamondBev.pl. Specjalizujemy się w produkcji i dostawie napojów."
    >
      <div className="pt-16">
        <Contact />
      </div>
    </Layout>
  );
}