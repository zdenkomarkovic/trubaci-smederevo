"use client";
import { motion } from "framer-motion";
import { Heart, Star, Gift, Calendar, Music, Clock } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "vencanja",
      icon: Heart,
      title: "Venčanja",
      description: "Trubaci Složna Braća su specijalizovani za venčanja i pružaju kompletnu muzičku uslugu koja uključuje:",
      features: [
        "Dobrodošlicu gostiju na venčanje",
        "Pratnju mladenaca do crkve",
        "Muziku tokom ceremonije",
        "Pratnju do restorana",
        "Muziku tokom proslave",
        "Kolo i narodne igre"
      ],
      conclusion: "Naši trubači poznaju sve tradicionalne melodije za venčanja i prilagođavaju se stilu i željama mladenaca."
    },
    {
      id: "krstenja",
      icon: Star,
      title: "Krštenja",
      description: "Za krštenja pružamo dostojanstvenu i radosnu muziku koja uključuje:",
      features: [
        "Dobrodošlicu gostiju",
        "Pratnju do crkve",
        "Muziku tokom ceremonije krštenja",
        "Pratnju do kuće ili restorana",
        "Muziku tokom proslave",
        "Radostne melodije za dete"
      ],
      conclusion: "Naša muzika će vašem detetu i porodici pružiti nezaboravan dan krštenja."
    },
    {
      id: "korporativni-eventi",
      icon: Gift,
      title: "Korporativni eventi",
      description: "Za korporativne događaje pružamo profesionalnu muziku koja uključuje:",
      features: [
        "Dobrodošlicu gostiju",
        "Muziku tokom ceremonije",
        "Pozadinsku muziku",
        "Muziku za networking",
        "Muziku tokom proslave",
        "Prilagođavanje korporativnom stilu"
      ],
      conclusion: "Naša muzika će vaš korporativni događaj učiniti profesionalnim i nezaboravnim."
    },
    {
      id: "rodendani",
      icon: Calendar,
      title: "Rođendani",
      description: "Za rođendane pružamo veselu i energičnu muziku koja uključuje:",
      features: [
        "Dobrodošlicu gostiju",
        "Rođendanske melodije",
        "Kolo i narodne igre",
        "Modernu i tradicionalnu muziku",
        "Interakciju sa gostima",
        "Posebne melodije za jubileje"
      ],
      conclusion: "Naša muzika će vaš rođendan učiniti nezaboravnim i punim radosti."
    },
    {
      id: "slave",
      icon: Music,
      title: "Slave",
      description: "Za slave pružamo tradicionalnu muziku koja uključuje:",
      features: [
        "Dobrodošlicu gostiju",
        "Muziku tokom slavlja",
        "Kolo i narodne igre",
        "Tradicionalne melodije",
        "Posebne melodije za svetog zaštitnika",
        "Muziku tokom dana"
      ],
      conclusion: "Naša muzika će vašu slavu učiniti autentičnom i punom tradicije."
    },
    {
      id: "ostale",
      icon: Clock,
      title: "Ostale proslave",
      description: "Takođe pružamo usluge za:",
      features: [
        "Korporativne događaje",
        "Građanske ceremonije",
        "Verske praznike",
        "Kulturno-umetničke manifestacije",
        "Festivale i sajmove",
        "Posebne prilike"
      ],
      conclusion: "Naši trubači se prilagođavaju svim vrstama događaja i pružaju kvalitetnu uslugu."
    }
  ];

  return (
    <section id="usluge" className=" py-12 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Naše usluge - Vrste slavlja za koje sviraju trubači
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-xl hover:shadow-primary transition-shadow duration-300"
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-6">
                <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              </div>
              <div className="prose text-slate-700">
                <p className="mb-4">
                  {service.description}
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <p>
                  {service.conclusion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
