"use client";
import { motion } from "framer-motion";
import Slider from "./Slider";

export default function About() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-2 md:px-4">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            O nama - Trubaci Složna Braća
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {" "}
            <motion.div
              className="prose prose-lg max-w-none text-slate-700 col-span-1 md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="mb-6">
                Trubaci Složna Braća su renomirani profesionalni trubači sa
                dugogodišnjim iskustvom u organizovanju muzičkih programa za sve
                vrste slavlja i događaja. Naša grupa trubača pruža autentičnu i
                tradicionalnu muziku koja će vaš događaj učiniti nezaboravnim.
              </p>
              <p className="mb-6">
                Sa preko 15 godina iskustva u industriji, Trubaci Složna Braća
                su postali sinonim za kvalitet, profesionalizam i autentičnost u
                Smederevu, Požarevcu, Mladenovcu, Kovinu, Smederevskoj Palanci,
                Velikoj Plani, Lozoviku, Grockoj i Svilajncu.
              </p>
              <p className="mb-6">
                Naša misija je da svaki vaš poseban trenutak - bilo da se radi o
                venčanju, krštenju, sahrani, rođendanu ili slavi - bude obeležen
                najboljom tradicionalnom muzikom koja će ostati u sećanju svih
                prisutnih.
              </p>
            </motion.div>
            <motion.div
              className="prose prose-lg max-w-none text-slate-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <video
                controls
                autoPlay
                loop
                muted
                className="w-full aspect-video object-cover rounded-xl"
              >
                {" "}
                <source
                  src="/video-300c5ab2763173b9c12cea0538b42d5c-V.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
