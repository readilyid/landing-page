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
                <Star size={14} className="fill-current" /> Platform Belajar TOEFL #1 di Indonesia
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
                  <Users size={18} className="text-accent" />
                  <span><strong className="text-primary-foreground">500+</strong> siswa terbantu</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp size={18} className="text-accent" />
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
              <div className="relative w-full max-w-md">
                {/* Mock dashboard card */}
                <div className="bg-card rounded-2xl shadow-card-hover p-6 border border-border">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-sm">TB</div>
                    <div>
                      <p className="text-sm font-semibold text-card-foreground">Dashboard Readily</p>
                      <p className="text-xs text-muted-foreground">Progress Belajarmu</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Listening", pct: 78, color: "bg-primary" },
                      { label: "Structure", pct: 65, color: "bg-accent" },
                      { label: "Reading", pct: 82, color: "bg-cta" },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground font-medium">{s.label}</span>
                          <span className="font-semibold text-card-foreground">{s.pct}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${s.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${s.pct}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 p-4 bg-primary-lighter rounded-xl">
                    <p className="text-xs font-medium text-muted-foreground mb-1">Estimasi Skor</p>
                    <p className="text-3xl font-extrabold text-primary">523</p>
                    <p className="text-xs text-accent font-semibold">↑ +87 dari awal</p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-cta text-cta-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  🔥 Naik 100+ poin
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
