import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rina Amelia",
    role: "Mahasiswa S1",
    text: "Skor saya naik dari 430 ke 520 dalam 2 bulan. Materinya terstruktur dan mentor sangat membantu!",
    score: "430 → 520",
  },
  {
    name: "Dimas Pratama",
    role: "Fresh Graduate",
    text: "Berkat Readily, saya berhasil memenuhi syarat TOEFL untuk daftar beasiswa LPDP. Terima kasih!",
    score: "460 → 540",
  },
  {
    name: "Sarah Putri",
    role: "Karyawan Swasta",
    text: "Belajar online tapi tetap terasa personal. Sesi private mentoring benar-benar game changer.",
    score: "480 → 560",
  },
  {
    name: "Arif Setiawan",
    role: "Mahasiswa S2",
    text: "Simulasi tesnya realistis banget! Jadi lebih siap dan percaya diri saat tes sungguhan.",
    score: "410 → 510",
  },
  {
    name: "Mega Sari",
    role: "Fresh Graduate",
    text: "Tips strateginya sangat berguna. Sekarang saya bisa menjawab soal lebih cepat dan tepat.",
    score: "440 → 530",
  },
  {
    name: "Budi Susanto",
    role: "Profesional",
    text: "Fleksibel banget jadwalnya, cocok untuk yang sudah kerja. Platform latihannya lengkap dan modern.",
    score: "450 → 550",
  },
];

const Testimonials = () => (
  <section id="testimoni" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Testimoni</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
          Apa Kata Mereka tentang Readily?
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border"
          >
            <Quote size={24} className="text-primary-light/30 mb-3" />
            <p className="text-sm text-card-foreground leading-relaxed mb-4">"{t.text}"</p>
            <div className="flex items-center gap-1 mb-4">
              {Array(5).fill(0).map((_, j) => (
                <Star key={j} size={14} className="text-cta fill-cta" />
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <div>
                <p className="text-sm font-semibold text-card-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
              <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{t.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
