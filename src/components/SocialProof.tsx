import { motion } from "framer-motion";
import { Users, FileText, TrendingUp, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Siswa Belajar" },
  { icon: FileText, value: "1.000+", label: "Latihan Soal Dikerjakan" },
  { icon: TrendingUp, value: "85%", label: "Siswa Skor Naik" },
  { icon: Star, value: "4.9/5", label: "Rating Kepuasan" },
];

const SocialProof = () => (
  <section className="py-16 md:py-20 gradient-hero">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <s.icon size={28} className="text-accent mx-auto mb-3" />
            <p className="text-3xl md:text-4xl font-extrabold text-primary-foreground">{s.value}</p>
            <p className="text-sm text-primary-foreground/70 mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
