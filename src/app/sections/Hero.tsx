"use client";

import Me from "@/assets/images/Me.png";
import grainImage from "@/assets/images/grain.jpg";

import ArrowDown from "@/assets/svg/ArrowDown";

import Image from "next/image";
import { HeroOrbit } from "../components/HeroOrbit";
import StarIcon from "@/assets/svg/Star";
import SparkleIcon from "@/assets/svg/Sparkle";

import { scrollToSection } from "@/utils/scrollToSection";

export const HeroSection = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shoudSpin
          spinDuration="3s"
        >
          <SparkleIcon styles="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shoudSpin
          spinDuration="4s"
        >
          <SparkleIcon styles="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-45} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shoudSpin
          spinDuration="8s"
        >
          <SparkleIcon styles="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shoudSpin
          spinDuration="10s"
        >
          <StarIcon styles="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shoudSpin
          spinDuration="10s"
        >
          <StarIcon styles="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-10} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shoudSpin
          spinDuration="3s"
        >
          <SparkleIcon styles="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shoudSpin
          spinDuration="10s"
        >
          <StarIcon styles="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={Me}
            alt="Person peekin from behind laptop"
            className="size-[100px] -mb-4"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-large">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Disponível para novos projetos
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide ">
            A Arte de Criar a Melhor Experiência.
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Especializado em transformar sonhos em realidade através da linha de
            código, entregando uma experiência digital única para o usuário sem
            deixar de lado a segurança e a eficiencia.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 ">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:scale-105 transition duration-300 cursor-pointer" onClick={() => scrollToSection("projects")}>
            <span className="font-semibold ">Explore My Work </span>
            <ArrowDown svgSize="size-4" />
          </button>
          <a
            href="https://wa.me/5554999768893?text=Oi%20👋,%20vi%20seu%20portfólio%20e%20achei%20interessante.%20Podemos%20conversar?"
            target="_blank"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6  hover:scale-105 transition duration-300 h-12 rounded-xl"
          >
            <span className="">👋</span>
            <span className="font-semibold ">Vamos conversar</span>
          </a>
        </div>
      </div>
    </div>
  );
};
