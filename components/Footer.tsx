"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className=" py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-2 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Kontakt informacije */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-primary">Kontakt</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+381621120641" className="hover:text-primary transition-colors">
                  062/11-20-641
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Facebook className="w-5 h-5" />
                <a 
                  href="https://www.facebook.com/share/1BTYvR5QAM/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Instagram className="w-5 h-5" />
                <a 
                  href="https://www.instagram.com/trubaci.sloznabraca?igsh=MTNlaHA2ZW5uZ3Vraw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Lokacije */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-primary">Lokacije</h3>
            <div className="space-y-1 text-sm">
              <p>Trubači Smederevo</p>
              <p>Trubači Požarevac</p>
              <p>Trubači Mladenovac</p>
              <p>Trubači Kovin</p>
              <p>Trubači Smederevska Palanka</p>
              <p>Trubači Velika Plana</p>
              <p>Trubači Lozovik</p>
              <p>Trubači Grocka</p>
              <p>Trubači Svilajnac</p>
            </div>
          </div>

          {/* Usluge */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-primary">Usluge</h3>
            <div className="space-y-1 text-sm">
              <p>Trubači  Venčanja</p>
              <p>Trubači Krštenja</p>
              <p>Trubači Rođendani</p>
              <p>Trubači Slave</p>
              <p>Trubači Proslave</p>
              <p>Korporativni događaji</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-center gap-2 md:gap-10 border-t-[1px] border-cool-green mt-10 pt-5">
          <p>
            &copy; {new Date().getFullYear()} Trubaci Složna Braća. Sva prava zadržana.
          </p>
          <a href="https://www.manikamwebsolutions.com/" target="_blank">
            izrada sajta:{" "}
            <span className="font-bold text-primary"> ManikamWebSolutions</span>
          </a>{" "}
        </div>
      </div>
    </motion.footer>
  );
}
