import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "TOEFL Basic",
    desc: "Fondasi kuat untuk memulai perjalanan TOEFL-mu.",
    target: "Pemula & pelajar SMA/Mahasiswa",
    duration: "4 Minggu",
    result: "Target skor 450+",
    features: ["12x pertemuan online", "Materi dasar 3 section", "Bank soal 200+", "Grup diskusi", "Sertifikat kelulusan"],
    popular: false,
  },
  {
    name: "TOEFL Intensive",
    desc: "Program intensif untuk peningkatan skor signifikan dalam waktu singkat.",
    target: "Mahasiswa & fresh graduate",
    duration: "8 Minggu",
    result: "Target skor 500+",
    features: ["24x pertemuan online", "Materi lengkap + strategi", "Simulasi tes 4x", "Review personal", "Bank soal 500+", "Konsultasi target skor"],
    popular: true,
  },
  {
    name: "TOEFL Private",
    desc: "Bimbingan personal 1-on-1 dengan mentor senior untuk hasil maksimal.",
    target: "Profesional & persiapan beasiswa",
    duration: "Fleksibel",
    result: "Target skor 550+",
    features: ["Jadwal fleksibel", "Mentor senior 1-on-1", "Simulasi tes unlimited", "Analisis performa detail", "Materi custom", "Garansi skor*"],
    popular: false,
  },
];

const Programs = () => (
  <section id="program" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-sm font-semibold text-primary-light uppercase tracking-wider">Program Kelas</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
          Pilih Program yang Tepat Untukmu
        </h2>
        <p className="text-muted-foreground">
          Setiap program dirancang untuk kebutuhan dan level yang berbeda. Temukan yang paling cocok.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative bg-card rounded-2xl p-6 lg:p-8 border transition-all hover:shadow-card-hover ${
              pkg.popular ? "border-primary shadow-card-hover scale-[1.02]" : "border-border shadow-card"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-cta text-cta-foreground text-xs font-bold px-4 py-1 rounded-full">
                Paling Populer
              </div>
            )}

            <h3 className="text-xl font-extrabold text-card-foreground mb-2">{pkg.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>

            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cocok untuk</span>
                <span className="font-medium text-card-foreground">{pkg.target}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Durasi</span>
                <span className="font-medium text-card-foreground">{pkg.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hasil</span>
                <span className="font-semibold text-accent">{pkg.result}</span>
              </div>
            </div>

            <div className="border-t border-border pt-5 mb-6">
              <ul className="space-y-3">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-card-foreground">
                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://readily-practice-1083714527574.asia-southeast1.run.app/"
              target="_blank"
              className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                pkg.popular
                  ? "gradient-cta text-cta-foreground hover:opacity-90"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              Daftar Sekarang <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Programs;
