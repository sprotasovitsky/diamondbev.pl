import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Link from 'next/link';

const Hero: React.FC = () => {

  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Sparkles className="w-6 h-6 text-gold-400" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse animation-delay-1000">
        <Sparkles className="w-4 h-4 text-gold-400" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse animation-delay-2000">
        <Sparkles className="w-5 h-5 text-gold-400" />
      </div>

      <div className="container relative z-10">
        <div className="section-padding py-20 lg:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">DiamondBev.pl</span>
                <span className="block text-gradient bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                  Produkcja i Dostawa Napojów
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-primary-100 mb-8 leading-relaxed max-w-3xl"
            >
              Specjalizujemy się w produkcji i dostawie wysokiej jakości napojów alkoholowych i bezalkoholowych. Oferujemy kompleksowe rozwiązania dla branży napojowej.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/services">
                <Button size="lg" className="bg-gold-600 hover:bg-gold-700 focus:ring-gold-500 group">
                  Poznaj nasze usługi
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Skontaktuj się z nami
                </Button>
              </Link>
            </motion.div>

            {/* Service Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-primary-500"
            >
              <p className="text-primary-200 text-sm mb-4">Nasza specjalizacja:</p>
              <div className="flex flex-wrap gap-3">
                {['Produkcja Napojów', 'Dostawa Alkoholu', 'Bezalkoholowe', 'Import/Export', 'Certyfikacja'].map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-primary-500/30 text-primary-100 text-xs font-medium rounded-full backdrop-blur-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 lg:h-24 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;