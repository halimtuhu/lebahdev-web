"use client";
import bgLine2Img from "@/assets/images/other/bg-lines-2.png";
import bgLine2DarkImg from "@/assets/images/other/bg-lines-2-dark.png";
import hero from "@/assets/images/landing/agency-2/hero.png";
import { LuArrowUpRight, LuPhoneCall } from "react-icons/lu";
import Link from "next/link";
import { useLayoutContext } from "@/context";
import Image from "next/image";
import { waLink } from "../data";

const Hero = () => {
  const { themeMode } = useLayoutContext();
  return (
    <section
      id="home"
      className={"bg-cover bg-no-repeat py-40"}
      style={{
        backgroundImage: `url(${themeMode === "light" ? bgLine2Img.src : bgLine2DarkImg.src})`,
      }}
    >
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <div className="max-w-lg text-center lg:text-start">
              <h2 className="text-4xl font-medium text-default-950 sm:text-5xl lg:text-6xl/tight">
                Buat bisnismu dikenal oleh lebih banyak orang
              </h2>
              <p className="my-6 text-base">
                Kami tim web developer profesional yang siap membantu
                meningkatkan perkembangan bisnismu
              </p>
              <Link
                href={waLink}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/50 bg-primary/10 px-6 py-2 text-primary transition-all duration-300 hover:bg-primary hover:text-white"
              >
                Hubungi Kami
                <LuPhoneCall className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <Image alt="heroImg" src={hero} className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
