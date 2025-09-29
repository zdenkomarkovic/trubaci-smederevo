"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Locations() {
  const mainCities = [
    { name: "Smederevo", description: "glavna lokacija" },
    { name: "Požarevac", description: "Braničevski okrug" },
    { name: "Mladenovac", description: "Grad Beograd" },
    { name: "Kovin", description: "Južno Banatski okrug" }
  ];

  const otherLocations = [
    "Smederevska Palanka",
    "Velika Plana",
    "Lozovik",
    "Grocka",
    "Svilajnac"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Lokacije gde sviraju Trubaci Složna Braća
        </motion.h2>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="mb-6">
              Trubaci Složna Braća pružaju svoje usluge u celoj Srbiji, a najčešće smu u:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
               
                <ul className="space-y-2">
                  {mainCities.map((city, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                    Trubači  <strong>{city.name}</strong>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
           
                <ul className="space-y-2">
                  {otherLocations.map((location, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Trubači  <strong>{location}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <p className="mb-6">
              Naši trubači su spremni da putuju u sve navedene lokacije i pruže kvalitetnu uslugu bez obzira na udaljenost. 
              Imamo iskustvo u radu sa lokalnim crkvama, restoranima, salama i drugim prostorima za organizovanje događaja.
            </p>
            
            <p className="mb-6">
              Za događaje van navedenih lokacija, molimo vas da nas kontaktirate kako bismo razmotrili mogućnost dolaska. 
              Naša fleksibilnost i profesionalizam omogućavaju nam da pružimo usluge i u drugim gradovima Srbije.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
