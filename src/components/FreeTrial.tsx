import { motion } from "framer-motion";
import { Gift, Target, ClipboardList, ArrowRight } from "lucide-react";

const offers = [
  { icon: ClipboardList, title: "Gratis Placement Test", desc: "Ketahui level TOEFL-mu saat ini tanpa biaya." },
  { icon: Target, title: "Gratis Konsultasi Target", desc: "Diskusikan target skor dan strategi belajarmu." },
  { icon: Gift, title: "Gratis 1x Simulasi TOEFL", desc: "Rasakan pengalaman tryout seperti tes sesungguhnya." },
];

const FreeTrial = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-sm font-semibold text-cta uppercase tracking-wider">Bonus Gratis</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
          Coba Dulu, Gratis!
        </h2>
        <p className="text-muted-foreground">
          Belum yakin? Coba beberapa layanan gratis kami dan rasakan sendiri kualitasnya.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {offers.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border text-center hover:shadow-card-hover transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl bg-cta/10 flex items-center justify-center mx-auto mb-4">
              <o.icon size={28} className="text-cta" />
            </div>
            <h3 className="font-bold text-card-foreground mb-2">{o.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{o.desc}</p>
            <a href="#daftar" className="inline-flex items-center gap-1 text-sm font-semibold text-cta hover:underline">
              Coba Sekarang <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FreeTrial;
