import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Users, TrendingUp, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-20 md:pt-0">
      <div className="gradient-hero min-h-[90vh] md:min-h-screen flex items-center relative">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full mb-6 border border-primary-foreground/20">
                Platform dan Kelas Persiapan Test TOEFL
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                Naikkan Skor{" "}
                <span className="relative">
                  TOEFL-mu
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C40 2 160 2 198 8" stroke="hsl(25 95% 55%)" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                Lebih Cepat
              </h1>

              <p className="text-primary-foreground/80 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
                Belajar TOEFL jadi lebih terarah, interaktif, dan efektif. Raih skor impianmu
                dengan bimbingan mentor berpengalaman dan latihan soal yang realistis.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#daftar"
                  className="gradient-cta text-cta-foreground px-7 py-3.5 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                >
                  Daftar Kelas <ArrowRight size={18} />
                </a>
                <a
                  href="#latihan"
                  className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-primary-foreground/20 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Play size={18} /> Coba Latihan Gratis
                </a>
              </div>

              {/* Social proof */}
              <div className="flex flex-wrap gap-6 text-primary-foreground/70 text-sm">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-[hsl(25,95%,55%)]" />
                  <span><strong className="text-primary-foreground">500+</strong> siswa terbantu</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={18} className="text-[hsl(25,95%,55%)]" />
                  <span>Skor meningkat <strong className="text-primary-foreground">100+ poin</strong></span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-full">
                <Image
                  src="/hero2.png"
                  alt="Readily Dashboard"
                  width={700}
                  height={600}
                  className="w-full h-auto"
                  priority
                />

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
