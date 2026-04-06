import { motion } from "framer-motion";
import { Database, Timer, MessageSquare, BarChart2, Headphones, PenTool, BookOpenCheck, LayoutDashboard, Activity } from "lucide-react";

const features = [
  { icon: Database, title: "Bank Soal TOEFL", desc: "Ribuan soal tersedia untuk latihan mandiri" },
  { icon: Timer, title: "Simulasi Tes", desc: "Tryout dengan timer seperti tes nyata" },
  { icon: MessageSquare, title: "Pembahasan Jawaban", desc: "Penjelasan detail untuk setiap soal" },
  { icon: BarChart2, title: "Progress Tracking", desc: "Pantau kemajuanmu secara real-time" },
  { icon: Headphones, title: "Latihan Listening", desc: "Audio berkualitas tinggi untuk latihan" },
  { icon: PenTool, title: "Latihan Structure", desc: "Drill grammar dan structure secara intensif" },
  { icon: BookOpenCheck, title: "Latihan Reading", desc: "Passage beragam topik untuk melatih comprehension" },
  { icon: LayoutDashboard, title: "Dashboard Hasil", desc: "Lihat rekap hasil latihan dalam satu tempat" },
  { icon: Activity, title: "Analisis Performa", desc: "Identifikasi kekuatan dan kelemahanmu" },
];

const PlatformFeatures = () => (
  <section id="latihan" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="text-sm font-semibold text-primary-light uppercase tracking-wider">Platform Digital</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
          Platform Latihan TOEFL yang Lengkap
        </h2>
        <p className="text-muted-foreground">
          Akses fitur latihan modern yang dirancang untuk memaksimalkan skor TOEFL-mu.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all group flex gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <f.icon size={20} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold text-card-foreground text-sm mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformFeatures;
