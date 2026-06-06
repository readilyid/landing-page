import { Mail, Phone, Instagram, Youtube } from "lucide-react";

const Footer = () => (
  <footer id="kontak" className="bg-foreground text-background/80 pt-16 pb-8">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-extrabold text-background mb-2">
            Readily
          </h3>
          <p className="text-sm leading-relaxed mb-4 text-background/60">
            Belajar Terarah, Skor Meningkat, Peluang Terbuka.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-background mb-3 text-sm">Navigasi</h4>
          <ul className="space-y-2 text-sm text-background/60">
            {["Home", "Program", "Keunggulan", "Testimoni", "FAQ"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-background transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Program */}
        <div>
          <h4 className="font-semibold text-background mb-3 text-sm">Program</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>TOEFL Basic</li>
            <li>TOEFL Intensive</li>
            <li>TOEFL Private</li>
            <li>Latihan Gratis</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-background mb-3 text-sm">Hubungi Kami</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li className="flex items-center gap-2">
              <Mail size={16} /> hello@toeflboost.id
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +62 812-3456-7890
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a href="#" className="hover:text-background transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-background transition-colors"><Youtube size={20} /></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 text-center text-xs text-background/40">
        © {new Date().getFullYear()} Readily. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
