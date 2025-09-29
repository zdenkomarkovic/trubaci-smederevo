"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Kontaktirajte nas danas
        </motion.h2>
        
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="prose prose-lg max-w-none text-slate-700 mb-8">
            <p className="mb-6">
              Spremni ste da organizujete svoj događaj? Kontaktirajte Trubaci Složna Braća danas i rezervišite svoj termin. 
              Naši trubači će vam pružiti nezaboravan muzički doživljaj koji će vaš događaj učiniti posebnim.
            </p>
            
            <p className="mb-8">
              <strong>Telefon:</strong> <a href="tel:+381621120641" className="text-white hover:underline">062/11-20-641</a><br/>
              <strong>Radno vreme:</strong> 24/7 - uvek dostupni za vaše potrebe
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+381621120641"
              className="bg-gray-800 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Pozovite sada
            </a>
            <a 
              href="https://www.facebook.com/share/1BTYvR5QAM/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:text-gray-300 transition-colors flex items-center justify-center gap-2"
            >
              <span>Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/trubaci.sloznabraca?igsh=MTNlaHA2ZW5uZ3Vraw=="
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-gray-300 transition-colors flex items-center justify-center gap-2"
            >
              <span>Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
