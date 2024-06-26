import type { Metadata } from "next";
import { REM } from "next/font/google";
import { type ReactNode } from "react";
import Image from "next/image";
import NextTopLoader from "nextjs-toploader";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";

import "@/assets/css/style.css";

const AppProvidersWrapper = dynamic(
  () => import("@/components/AppsProviderWrapper"),
  { ssr: false }
);
const BackToTop = dynamic(() => import("@/components/BackToTop"));

const rem = REM({
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Solusi Website untuk UMKM | Lebah Dev",
    template: "%s | Lebah Dev",
  },
  description:
    "LebahDev membantu UMKM memperluas jangkauan bisnis dengan layanan pembuatan website profesional. Dapatkan website custom, desain responsif, dan optimasi SEO untuk mengembangkan bisnis Anda. Hubungi LebahDev sekarang!",
  keywords:
    "web development UMKM, jasa pembuatan website UMKM, desain web UMKM, optimasi SEO UMKM, pembuatan website custom UMKM, LebahDev, pengembangan web UMKM, web development Indonesia, layanan web development UMKM, desain website UMKM.",
};

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style>{splashScreenStyles}</style>
      </head>

      <body className={rem.className}>
        <div id="splash-screen">
          <Image
            alt="Logo"
            width={355}
            height={83}
            src={"/splash-screen.png"}
            style={{ height: "10%", width: "auto" }}
            className="object-scale-down"
          />
        </div>
        <NextTopLoader color="#ea580c" showSpinner={false} />
        <div id="__next_splash">
          <AppProvidersWrapper>
            {children}
            <BackToTop />
            <Toaster richColors />
          </AppProvidersWrapper>
        </div>
      </body>
    </html>
  );
}
