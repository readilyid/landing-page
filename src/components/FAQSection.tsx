import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Apakah program ini cocok untuk pemula?", a: "Tentu! Kami punya program TOEFL Basic yang dirancang khusus untuk pemula. Materi dimulai dari fondasi dasar hingga kamu siap mengerjakan soal TOEFL." },
  { q: "Apakah kelas dilakukan secara online?", a: "Ya, semua kelas dilakukan secara online melalui platform video meeting. Kamu bisa belajar dari mana saja dengan koneksi internet." },
  { q: "Berapa durasi program?", a: "Durasi program bervariasi: Basic (4 minggu), Intensive (8 minggu), dan Private (fleksibel sesuai kebutuhan)." },
  { q: "Apakah ada tryout atau simulasi tes?", a: "Ya! Setiap program sudah termasuk simulasi tes TOEFL. Program Intensive mendapat 4x simulasi, dan Private mendapat simulasi unlimited." },
  { q: "Apakah tersedia latihan gratis?", a: "Kami menyediakan placement test gratis dan 1x simulasi TOEFL gratis untuk kamu yang ingin mencoba dulu sebelum mendaftar." },
  { q: "Apakah bisa private class?", a: "Bisa! Program TOEFL Private menyediakan bimbingan 1-on-1 dengan mentor senior. Jadwal bisa disesuaikan dengan kesibukanmu." },
  { q: "Apakah ada sertifikat?", a: "Ya, setelah menyelesaikan program kamu akan mendapatkan sertifikat kelulusan dari Zulzul TOEFL." },
  { q: "Apakah bisa konsultasi target skor dulu?", a: "Tentu! Kamu bisa melakukan konsultasi target skor secara gratis sebelum memutuskan program mana yang paling cocok." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 bg-muted/50">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary-light uppercase tracking-wider">FAQ</span>
        <h2 className="text-2xl md:text-4xl font-extrabold text-foreground mt-3 mb-4">
          Pertanyaan yang Sering Ditanyakan
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl border border-border shadow-card px-5"
            >
              <AccordionTrigger className="text-sm font-semibold text-card-foreground hover:no-underline py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
