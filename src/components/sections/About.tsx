import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Award } from 'lucide-react';
import Card from '../ui/Card';

const About: React.FC = () => {

  const stats = [
    { icon: Users, number: '50+', label: 'Rodzajów napojów' },
    { icon: Award, number: '100%', label: 'Certyfikacja jakości' },
    { icon: Target, number: '24/7', label: 'Wsparcie klienta' },
    { icon: CheckCircle, number: 'EU', label: 'Standardy UE' }
  ];

  const values = [
    'Jakość i Niezawodność',
    'Innowacyjność',
    'Obsługa Klienta',
    'Profesjonalizm',
    'Uczciwość w Biznesie'
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title"
            >
              O Firmie DiamondBev.pl
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-secondary-600 mb-6"
            >
              Specjalizacja w Produkcji i Dostawie Napojów
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-secondary-700 mb-8 leading-relaxed"
            >
              DiamondBev.pl to firma specjalizująca się w produkcji i dostawie wysokiej jakości napojów alkoholowych i bezalkoholowych. Nasze doświadczenie w branży napojowej pozwala nam oferować kompleksowe rozwiązania dostosowane do potrzeb klientów.
            </motion.p>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Nasza Misja
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Produkcja i dostawa najwyższej jakości napojów, budowanie długotrwałych relacji z klientami oraz wspieranie rozwoju biznesu w branży napojowej.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Nasze Wartości
              </h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-secondary-700">{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Content - Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-3xl font-bold text-secondary-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-secondary-600">
                      {stat.label}
                    </div>
                  </Card>
                );
              })}
            </motion.div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <Card className="p-6 bg-gradient-to-br from-primary-50 to-gold-50 border-primary-200">
                <h4 className="font-semibold text-lg text-secondary-900 mb-2">
                  Dlaczego DiamondBev.pl?
                </h4>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  Specjalizujemy się w produkcji i dostawie napojów alkoholowych i bezalkoholowych 
                  najwyższej jakości. Nasze produkty spełniają wszystkie europejskie standardy 
                  i certyfikacje, zapewniając bezpieczeństwo i satysfakcję naszych klientów.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;