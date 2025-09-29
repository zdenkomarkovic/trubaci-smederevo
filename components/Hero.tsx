"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Image from "next/image";
import hero from "../public/6.webp";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0">
          <Image 
            src={hero} 
            alt="hero" 
            fill 
            className="object-cover"
            unoptimized
            // style={{
            //   objectPosition: isMobile ? '0% 20%' : '0% 15%'
            // }}
          />
        </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-20 left-0 right-0  text-center max-w-4xl mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Trubaci Složna Braća
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Profesionalni trubači za sve vrste slavlja u Smederevu i okolini
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center w-fit mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="tel:+381621120641"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            062/11-20-641
          </a>
          <a 
            href="#usluge"
            className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
          >
            Naše usluge
          </a>
        </motion.div>
      </div>
    </section>
  );
}
