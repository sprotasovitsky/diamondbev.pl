import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import type { ContactFormData } from '@/types';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactSchema = z.object({
    name: z.string().min(2, 'Pole wymagane'),
    email: z.string().email('Pole wymagane'),
    phone: z.string().optional(),
    company: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, 'Pole wymagane'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would normally send the data to your API
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitMessage('Dziękujemy za wiadomość! Skontaktujemy się z Państwem wkrótce.');
      reset();
    } catch (error) {
      setSubmitMessage('Wystąpił błąd podczas wysyłania wiadomości. Prosimy spróbować ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Adres',
      value: 'Warszawa, Polska',
      color: 'text-blue-600'
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+48 514 415 653',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'darya.pratasavitska@diamondbev.pl',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      label: 'Godziny pracy',
      value: 'Pon-Pt: 8:00-17:00',
      color: 'text-orange-600'
    }
  ];

  const services = [
    'wholesale_general',
    'food_production', 
    'beverage_production',
    'automotive_trade',
    'wholesale_trade',
    'retail_trade',
    'land_transport',
    'warehousing',
    'advertising',
    'rental'
  ];

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
            Skontaktuj się z nami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subtitle mx-auto"
          >
            Jesteśmy tutaj, aby pomóc Ci rozwijać Twój biznes w branży napojowej
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                Informacje kontaktowe
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center">
                          <IconComponent className={`w-5 h-5 ${info.color}`} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-secondary-900 mb-1">
                          {info.label}
                        </h4>
                        <p className="text-secondary-600 text-sm">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Jan Kowalski"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      E-mail *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="jan@przykład.pl"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      Telefon
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="+48 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-900 mb-2">
                      Firma
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Nazwa firmy"
                    />
                  </div>
                </div>

                <div>
                                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                  Rodzaj usługi
                </label>
                <select 
                  {...register('service')}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                >
                  <option value="">Wybierz usługę</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service === 'beverage_production' ? 'Produkcja Napojów' :
                         service === 'food_production' ? 'Produkcja Spożywcza' :
                         service === 'wholesale_general' ? 'Handel Hurtowy' :
                         service === 'automotive_trade' ? 'Handel Motoryzacyjny' :
                         service === 'wholesale_trade' ? 'Handel Hurtowy' :
                         service === 'retail_trade' ? 'Handel Detaliczny' :
                         service === 'land_transport' ? 'Transport Lądowy' :
                         service === 'warehousing' ? 'Magazynowanie' :
                         service === 'advertising' ? 'Reklama' :
                         service === 'rental' ? 'Wynajem' : service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                                  <label className="block text-sm font-medium text-secondary-900 mb-2">
                  Wiadomość *
                </label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Opisz swoje potrzeby biznesowe..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  loading={isSubmitting}
                  className="w-full sm:w-auto"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Wyślij wiadomość
                </Button>

                {submitMessage && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800">{submitMessage}</p>
                  </div>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;