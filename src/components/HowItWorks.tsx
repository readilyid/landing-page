import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Pilih Program", desc: "Tentukan program yang sesuai dengan kebutuhanmu." },
  { num: "02", title: "Daftar & Konsultasi", desc: "Buat akun dan konsultasikan target skormu." },
  { num: "03", title: "Mulai Belajar", desc: "Ikuti kelas dan latihan soal secara rutin." },
  { num: "04", title: "Evaluasi Berkala", desc: "Pantau progress dan terima feedback dari mentor." },
  { num: "05", title: "Capai Target Skor", desc: "Raih skor impianmu dengan percaya diri!" },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28 bg-muted/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold text-cta uppercase tracking-wider">Cara Kerja</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
          Mulai Perjalananmu dalam 5 Langkah
        </h2>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex items-center md:block gap-6 mb-12 last:mb-0 group"
          >
            {/* Number Circle */}
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-extrabold text-sm shrink-0 z-10 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
              {s.num}
            </div>

            {/* Content Card */}
            <div
              className={`bg-card rounded-2xl p-6 shadow-sm border border-border flex-1 md:w-[45%] md:flex-none transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
              }`}
            >
              <h3 className="text-xl font-bold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
