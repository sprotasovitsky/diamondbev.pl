import Layout from '@/components/layout/Layout';
import Services from '@/components/sections/Services';

export default function ServicesPage() {
  return (
    <Layout
      title="Usługi - DiamondBev.pl"
      description="Sprawdź ofertę DiamondBev.pl - produkcja i dostawa napojów alkoholowych i bezalkoholowych."
    >
      <div className="pt-16">
        <Services />
      </div>
    </Layout>
  );
}