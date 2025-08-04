import Layout from '@/components/layout/Layout';
import About from '@/components/sections/About';

export default function AboutPage() {
  return (
    <Layout
      title="O Nas - DiamondBev.pl"
      description="Poznaj DiamondBev.pl - firmę specjalizującą się w produkcji i dostawie napojów alkoholowych i bezalkoholowych."
    >
      <div className="pt-16">
        <About />
      </div>
    </Layout>
  );
}