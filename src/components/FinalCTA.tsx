import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const FinalCTA = () => (
  <section id="daftar" className="py-20 md:py-28 gradient-hero relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-cta/10 rounded-full blur-3xl" />

    <div className="container relative z-10 text-center max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-5 leading-tight">
          Siap Naikkan Skor TOEFL-mu?
        </h2>
        <p className="text-primary-foreground/80 text-base md:text-lg mb-10 max-w-xl mx-auto">
          Jangan tunda lagi. Bergabung bersama 500+ siswa yang sudah merasakan peningkatan skor bersama Readily. Mulai sekarang, raih peluangmu!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#daftar"
            className="gradient-cta text-cta-foreground px-8 py-4 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
          >
            Daftar Sekarang <ArrowRight size={18} />
          </a>
          <a
            href="#latihan"
            className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-foreground/20 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Play size={18} /> Coba Latihan Gratis
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
