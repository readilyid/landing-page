import { motion } from "framer-motion";
import { BookOpen, Users, ClipboardCheck, LineChart, Zap, Laptop } from "lucide-react";

const values = [
  { icon: BookOpen, title: "Materi Terstruktur", desc: "Kurikulum dari basic ke advanced yang dirancang untuk setiap level kemampuan." },
  { icon: Users, title: "Mentor Berpengalaman", desc: "Dibimbing oleh tutor TOEFL berpengalaman yang suportif dan responsif." },
  { icon: ClipboardCheck, title: "Simulasi Realistis", desc: "Latihan soal dan tryout yang mirip dengan tes TOEFL sesungguhnya." },
  { icon: LineChart, title: "Evaluasi Berkala", desc: "Pantau perkembangan skor dengan evaluasi dan feedback rutin." },
  { icon: Zap, title: "Tips & Strategi", desc: "Pelajari trik menjawab lebih cepat dan efektif untuk setiap section." },
  { icon: Laptop, title: "Akses Online 24/7", desc: "Latihan soal dan materi bisa diakses kapan saja, di mana saja." },
];

const ValueProposition = () => (
  <section id="keunggulan" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Keunggulan Kami</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
          Kenapa Harus Zulzul TOEFL?
        </h2>
        <p className="text-muted-foreground">
          Kami menggabungkan metode belajar terbaik dengan teknologi modern untuk hasil yang maksimal.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all border border-border group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <v.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-card-foreground mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProposition;
