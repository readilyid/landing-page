import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/Providers";
import "../index.css";

export const metadata: Metadata = {
  title: "Readily - Belajar Terarah, Skor Meningkat, Peluang Terbuka",
  description:
    "Naikkan skor TOEFL-mu lebih cepat dengan bimbingan mentor berpengalaman, simulasi tes realistis, dan platform latihan online.",
  authors: [{ name: "Readily" }],
  openGraph: {
    title: "Readily - Belajar TOEFL Lebih Cepat & Efektif",
    description:
      "Bergabung bersama 500+ siswa yang sudah merasakan peningkatan skor TOEFL bersama Readily.",
    type: "website",
    images: [{ url: "https://lovable.dev/opengraph-image-p98pqg.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://lovable.dev/opengraph-image-p98pqg.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
