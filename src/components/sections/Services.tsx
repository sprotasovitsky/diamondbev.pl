import { motion } from 'framer-motion';
import { 
  Package, 
  UtensilsCrossed, 
  Coffee, 
  Car, 
  Warehouse, 
  ShoppingCart, 
  Truck, 
  Archive, 
  Megaphone, 
  KeyRound 
} from 'lucide-react';
import Card from '../ui/Card';

const Services: React.FC = () => {

  const services = [
    {
      key: 'wholesale_general',
      code: '46.90.Z',
      icon: Package,
      color: 'text-blue-600'
    },
    {
      key: 'food_production',
      code: '10',
      icon: UtensilsCrossed,
      color: 'text-green-600'
    },
    {
      key: 'beverage_production',
      code: '11',
      icon: Coffee,
      color: 'text-orange-600'
    },
    {
      key: 'automotive_trade',
      code: '45',
      icon: Car,
      color: 'text-purple-600'
    },
    {
      key: 'wholesale_trade',
      code: '46',
      icon: Warehouse,
      color: 'text-indigo-600'
    },
    {
      key: 'retail_trade',
      code: '47',
      icon: ShoppingCart,
      color: 'text-pink-600'
    },
    {
      key: 'land_transport',
      code: '49',
      icon: Truck,
      color: 'text-cyan-600'
    },
    {
      key: 'warehousing',
      code: '52',
      icon: Archive,
      color: 'text-yellow-600'
    },
    {
      key: 'advertising',
      code: '73',
      icon: Megaphone,
      color: 'text-red-600'
    },
    {
      key: 'rental',
      code: '77',
      icon: KeyRound,
      color: 'text-teal-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Nasze Usługi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle mx-auto"
          >
            Oferujemy szeroką gamę usług w branży napojowej
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.key} variants={itemVariants}>
                <Card hover className="p-6 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                        <IconComponent className={`w-6 h-6 ${service.color}`} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-mono bg-secondary-200 text-secondary-700 px-2 py-1 rounded">
                          {service.code}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg text-secondary-900 mb-2 leading-tight">
                        {service.key === 'beverage_production' ? 'Produkcja Napojów' :
                         service.key === 'food_production' ? 'Produkcja Spożywcza' :
                         service.key === 'wholesale_general' ? 'Handel Hurtowy' :
                         service.key === 'automotive_trade' ? 'Handel Motoryzacyjny' :
                         service.key === 'wholesale_trade' ? 'Handel Hurtowy' :
                         service.key === 'retail_trade' ? 'Handel Detaliczny' :
                         service.key === 'land_transport' ? 'Transport Lądowy' :
                         service.key === 'warehousing' ? 'Magazynowanie' :
                         service.key === 'advertising' ? 'Reklama' :
                         service.key === 'rental' ? 'Wynajem' : 'Usługa'}
                      </h3>
                      <p className="text-secondary-600 text-sm leading-relaxed">
                        {service.key === 'beverage_production' ? 'Produkcja wysokiej jakości napojów alkoholowych i bezalkoholowych' :
                         service.key === 'food_production' ? 'Wytwarzanie produktów spożywczych' :
                         service.key === 'wholesale_general' ? 'Handel hurtowy różnorodnych produktów' :
                         service.key === 'automotive_trade' ? 'Sprzedaż pojazdów samochodowych' :
                         service.key === 'wholesale_trade' ? 'Dystrybucja towarów' :
                         service.key === 'retail_trade' ? 'Sprzedaż detaliczna' :
                         service.key === 'land_transport' ? 'Usługi transportu lądowego' :
                         service.key === 'warehousing' ? 'Usługi magazynowe i logistyczne' :
                         service.key === 'advertising' ? 'Usługi reklamowe i marketingowe' :
                         service.key === 'rental' ? 'Wynajem i dzierżawa sprzętu' : 'Kompleksowe usługi biznesowe'}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Każda z naszych usług realizowana jest z najwyższą starannością i profesjonalizmem. 
            Dostosowujemy nasze rozwiązania do indywidualnych potrzeb każdego klienta.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;