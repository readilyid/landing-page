import { motion } from "framer-motion";
import { HelpCircle, Frown, BarChart3, ShieldAlert, UserX, Compass } from "lucide-react";

const pains = [
  { icon: Compass, text: "Bingung mulai belajar TOEFL dari mana" },
  { icon: Frown, text: "Sulit memahami Listening, Structure, dan Reading" },
  { icon: BarChart3, text: "Skor TOEFL stagnan meski sudah belajar" },
  { icon: ShieldAlert, text: "Kurang percaya diri menghadapi tes" },
  { icon: UserX, text: "Tidak punya mentor atau partner belajar" },
  { icon: HelpCircle, text: "Belajar sendiri terasa tidak terarah" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const PainPoints = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-sm font-semibold text-cta uppercase tracking-wider">Kenali Masalahmu</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
          Apakah Kamu Mengalami Hal Ini?
        </h2>
        <p className="text-muted-foreground">
          Banyak orang mengalami kendala serupa saat mempersiapkan TOEFL. Jangan khawatir — kamu tidak sendiri.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pains.map((p, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
              <p.icon size={20} className="text-destructive" />
            </div>
            <p className="text-sm font-medium text-card-foreground leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="inline-block bg-primary-lighter rounded-2xl px-8 py-5">
          <p className="text-base md:text-lg font-semibold text-primary">
            ✨ Readily hadir sebagai solusi belajar yang terarah, efektif, dan menyenangkan.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PainPoints;
