import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Lebih paham format dan pola soal TOEFL",
  "Strategi menjawab lebih cepat dan efektif",
  "Lebih percaya diri menghadapi tes",
  "Persiapan lebih matang untuk beasiswa, kuliah, dan kerja",
  "Peningkatan skor yang lebih terukur",
  "Belajar lebih terarah dan konsisten",
];

const Benefits = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Hasil Nyata</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
            Apa yang Akan Kamu Dapatkan?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            Setelah mengikuti program Zulzul TOEFL, kamu akan merasakan perubahan nyata dalam kemampuan dan kepercayaan dirimu.
          </p>

          <div className="space-y-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-foreground">{b}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-primary-lighter rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "100+", label: "Rata-rata kenaikan skor" },
                { value: "85%", label: "Siswa capai target" },
                { value: "4.9/5", label: "Rating kepuasan" },
                { value: "2 bln", label: "Rata-rata waktu belajar" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Benefits;
