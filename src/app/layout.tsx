import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://yuridev.vercel.app"),
  title: "Yuri Alves // Desenvolvedor Front-End",
  description:
    "Sou um desenvolvedor especializado em front-end. Com experiência em criar interfaces responsivas e dinâmicas usando JavaScript, React, Bootstrap, Tailwind CSS e outras tecnologias modernas. Confira meus projetos que vão de sites interativos a sistemas escaláveis e funcionais, utilizando as melhores práticas de desenvolvimento web para entregar resultados eficientes e de alto desempenho.",
  keywords: [
    "Yuri Alves",
    "Desenvolvedor Front-End",
    "Portfólio",
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Desenvolvimento Web",
    "UI/UX",
    "Projetos Web",
    "Freelancer",
    "Programação",
    "Web Developer",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Yuri Alves // Desenvolvedor Front-End",
    description:
      "Meu nome é Yuri Alves! Veja meu portfólio, com projetos de front-end e back-end.",
    url: "https://yuridev.vercel.app",
    siteName: "Yuri Dev",
    images: [
      {
        url: "/logoTwitter.png",
        width: 1200,
        height: 630,
        alt: "Yuri Alves // Desenvolvedor Front-End",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio - Dev Yuri",
    description: "Yuri Alves, desenvolvedor front-end e back-end.",
    images: ["https://yuridev.vercel.app/logoTwitter.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yuri Alves",
              url: "https://yuridev.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/yurizzxz/",
                "https://github.com/yurizzxz",
              ],
              jobTitle: "Desenvolvedor Front-End",
              alumniOf: "FATEC Itu",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Yuri Alves // Desenvolvedor Front-End",
              url: "https://yuridev.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://yuridev.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <Navbar />
        <div className="bg-background pt-4">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
