import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Facebook, Instagram, Clock } from "lucide-react";

export default function KontaktPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
            Kontakt - Trubaci Složna Braća
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kontakt informacije */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Kontaktirajte nas</h2>
                <p className="text-slate-700 mb-8">
                  Spremni ste da organizujete svoj događaj? Kontaktirajte Trubaci Složna Braća danas i rezervišite svoj termin. 
                  Naši trubači će vam pružiti nezaboravan muzički doživljaj koji će vaš događaj učiniti posebnim.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Telefon</h3>
                    <a 
                      href="tel:+381621120641" 
                      className="text-primary hover:underline text-lg font-medium"
                    >
                      062/11-20-641
                    </a>
                    <p className="text-slate-600 text-sm mt-1">
                      Pozovite nas bilo kada - uvek smo dostupni
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Radno vreme</h3>
                    <p className="text-slate-700">24/7 - uvek dostupni za vaše potrebe</p>
                    <p className="text-slate-600 text-sm mt-1">
                      Radimo svih dana u nedelji, uključujući vikende i praznike
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Lokacije</h3>
                    <p className="text-slate-700 mb-2">Radimo u sledećim gradovima:</p>
                    <div className="text-slate-600 text-sm space-y-1">
                      <p>Smederevo, Požarevac, Mladenovac, Kovin</p>
                      <p>Smederevska Palanka, Velika Plana, Lozovik</p>
                      <p>Grocka, Svilajnac i okolina</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Pratite nas na društvenim mrežama</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/share/1BTYvR5QAM/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/trubaci.sloznabraca?igsh=MTNlaHA2ZW5uZ3Vraw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Informacije o uslugama */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Naše usluge</h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Venčanja</h3>
                    <p className="text-slate-700 text-sm">
                      Kompletna muzička usluga za venčanja - od dobrodošlice gostiju do kola i narodnih igara
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Krštenja</h3>
                    <p className="text-slate-700 text-sm">
                      Dostojanstvena i radosna muzika za krštenja - od ceremonije do proslave
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Sahrane</h3>
                    <p className="text-slate-700 text-sm">
                      Emotivna i dostojanstvena muzika za sahrane sa poštovanjem i dostojanstvom
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Rođendani i slave</h3>
                    <p className="text-slate-700 text-sm">
                      Vesela i energična muzika za rođendane, slave i ostale proslave
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Zašto izabrati nas?</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Preko 15 godina iskustva
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Profesionalni pristup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Autentična tradicionalna muzika
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Fleksibilnost i prilagođavanje
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Rad u 9 gradova i opština
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <a 
                  href="tel:+381621120641"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Pozovite sada
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
