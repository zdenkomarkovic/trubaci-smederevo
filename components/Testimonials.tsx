"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Marko Petrović",
      location: "Smederevo",
      event: "Venčanje",
      rating: 5,
      text: "Trubaci Složna Braća su odlični! Muzika je bila savršena za naše venčanje. Profesionalni pristup i autentična tradicionalna muzika koja je oduševila sve goste."
    },
    {
      id: 2,
      name: "Ana Jovanović",
      location: "Požarevac",
      event: "Krštenje",
      rating: 5,
      text: "Preporučujem svima! Naši trubači su bili divni na krštenju našeg sina. Muzika je bila dostojanstvena i radosna, baš kako smo želeli."
    },
    {
      id: 3,
      name: "Petar Nikolić",
      location: "Mladenovac",
      event: "Slava",
      rating: 5,
      text: "Odličan kvalitet muzike i profesionalan pristup. Naša slava je bila nezaboravna zahvaljujući Trubacima Složna Braća. Hvala vam!"
    },
    {
      id: 4,
      name: "Milica Stojanović",
      location: "Kovin",
      event: "Rođendan",
      rating: 5,
      text: "Fantastični trubači! Muzika je bila energična i vesela, savršena za rođendansku proslavu. Svi gosti su bili oduševljeni."
    },
    {
      id: 5,
      name: "Stefan Đorđević",
      location: "Smederevska Palanka",
      event: "Korporativni događaj",
      rating: 5,
      text: "Profesionalni pristup i odličan kvalitet muzike. Naš korporativni događaj je bio uspešan zahvaljujući Trubacima Složna Braća."
    },
    {
      id: 6,
      name: "Jelena Radović",
      location: "Velika Plana",
      event: "Venčanje",
      rating: 5,
      text: "Najbolji trubači u okolini! Muzika je bila savršena za naše venčanje. Preporučujem svima koji traže kvalitet i profesionalizam."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Šta kažu naši klijenti
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Čitajte iskustva naših zadovoljnih klijenata koji su odabrali Trubaci Složna Braća za svoje posebne trenutke
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-slate-50 p-6 rounded-lg shadow-lg relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-700 mb-6 italic">
              &quot;{testimonial.text}&quot;
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-600">{testimonial.location}</p>
                <p className="text-sm text-primary font-medium">{testimonial.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
