"use client";
import { motion } from "framer-motion";
import { Star, MapPin, Heart } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: "15+",
      title: "Godina iskustva",
      description: "Preko 15 godina profesionalnog rada sa trubačima"
    },
    {
      icon: Star,
      title: "Kvalitet",
      description: "Najbolji kvalitet muzike i profesionalnog pristupa"
    },
    {
      icon: MapPin,
      title: "Lokacije",
      description: "Radimo u celoj Srbiji i rado dolazimo na vašu lokaciju"
    },
    {
      icon: Heart,
      title: "Tradicija",
      description: "Autentična tradicionalna muzika i običaji"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Zašto izabrati Trubaci Složna Braća?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {typeof feature.icon === "string" ? (
                  <span className="text-2xl font-bold">{feature.icon}</span>
                ) : (
                  <feature.icon className="w-8 h-8" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
              <p className="text-slate-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
