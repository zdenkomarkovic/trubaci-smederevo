"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counts, setCounts] = useState({
    events: 0,
    years: 0,
    cities: 0,
    clients: 0
  });

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Održanih događaja",
      description: "Preko 500 uspešno održanih događaja"
    },
    {
      number: 15,
      suffix: "+",
      label: "Godina iskustva",
      description: "Preko 15 godina profesionalnog rada"
    },
    {
      number: 100,
      suffix: "+",
      label: "Gradova i opština",
      description: "Radimo u Celoj Srbiji"
    },
    {
      number: 1000,
      suffix: "+",
      label: "Zadovoljnih klijenata",
      description: "Preko 1000 zadovoljnih klijenata"
    }
  ];

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      stats.forEach((stat, index) => {
        const target = stat.number;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }

          setCounts(prev => ({
            ...prev,
            events: index === 0 ? Math.floor(current) : prev.events,
            years: index === 1 ? Math.floor(current) : prev.years,
            cities: index === 2 ? Math.floor(current) : prev.cities,
            clients: index === 3 ? Math.floor(current) : prev.clients
          }));
        }, stepDuration);
      });
    }
  }, [inView]);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Naši rezultati govore sami za sebe
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Brojke koje potvrđuju našu profesionalnost i kvalitet usluge
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {index === 0 && counts.events}
                {index === 1 && counts.years}
                {index === 2 && counts.cities}
                {index === 3 && counts.clients}
                {stat.suffix}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-slate-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
