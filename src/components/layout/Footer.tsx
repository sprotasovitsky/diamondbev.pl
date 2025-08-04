import Link from 'next/link';
import { Diamond, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {

  const services = [
    { key: 'wholesale_general', code: '46.90.Z' },
    { key: 'food_production', code: '10' },
    { key: 'beverage_production', code: '11' },
    { key: 'automotive_trade', code: '45' },
    { key: 'wholesale_trade', code: '46' },
    { key: 'retail_trade', code: '47' },
    { key: 'land_transport', code: '49' },
    { key: 'warehousing', code: '52' },
    { key: 'advertising', code: '73' },
    { key: 'rental', code: '77' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-gold-600 rounded-lg flex items-center justify-center">
                <Diamond className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                DiamondBev<span className="text-primary-400">.pl</span>
              </span>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              DiamondBev.pl - Specjalizacja w produkcji i dostawie napojów alkoholowych i bezalkoholowych.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-secondary-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Warszawa, Polska</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+48 514 415 653</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">darya.pratasavitska@diamondbev.pl</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Strona główna</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Usługi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-4">Nasze Usługi</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="text-secondary-300 text-sm">
                <span className="text-primary-400 font-medium">Produkcja</span>
                {' - Napoje alkoholowe i bezalkoholowe'}
              </div>
              <div className="text-secondary-300 text-sm">
                <span className="text-primary-400 font-medium">Dostawa</span>
                {' - Logistyka i transport napojów'}
              </div>
              <div className="text-secondary-300 text-sm">
                <span className="text-primary-400 font-medium">Certyfikacja</span>
                {' - Standardy UE i bezpieczeństwo'}
              </div>
              <div className="text-secondary-300 text-sm">
                <span className="text-primary-400 font-medium">Import/Export</span>
                {' - Handel międzynarodowy'}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-400 text-sm">
              © 2024 DiamondBev.pl. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-secondary-400 hover:text-white transition-colors duration-200">
                Polityka Prywatności
              </Link>
              <Link href="/terms" className="text-secondary-400 hover:text-white transition-colors duration-200">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;