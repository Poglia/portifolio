"use client";
import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import livro from "@/assets/images/livro.png";
import Image from "next/image";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "../components/CardHeader";
import { ToolboxItems } from "../components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const hobbies = [
  { title: "Travel", memoji: "🌍", left: "2%", top: "0%" },
  { title: "Study languages", memoji: "🗺️", left: "20%", top: "5%" },
  { title: "Read books", memoji: "📚", left: "5%", top: "40%" },
  { title: "Soccer", memoji: "⚽", left: "70%", top: "45%" },
  { title: "Game development", memoji: "🕹️", left: "10%", top: "70%" },
  { title: "Play video games", memoji: "🎮", left: "60%", top: "80%" },
  { title: "Comedy series", memoji: "📺", left: "55%", top: "0%" },
  { title: "Gym", memoji: "🏋️", left: "35%", top: "35%" },
];
export const AboutSection = () => {
  const constrainRef = useRef(null);

  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn More About Who I Am, what I Do, and Why I Do It."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-5">
            <Card className="h-[320px] md:col-span-2 lg:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              ></CardHeader>
              <div className="max-w-64 mx-auto mt-2 md:-mt-20 hover:scale-110 hover:cursor-pointer">
                <Image src={livro} alt="book" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-3">
              <div>
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft expectional digital experiences."
                  className=""
                ></CardHeader>
              </div>
              <ToolboxItems
                className=""
                itemsWrapperClassname="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                className="mt-6 "
                itemsWrapperClassname="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Para Além do Código"
                description="Explore meus interesses e hobbies além do mundo digital."
                className="px-6 py-6"
              ></CardHeader>
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r
                     from-emerald-300 to-sky-400 rounded-full absolute cursor-pointer"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium md:font-bold text-gray-950">
                      {hobby.title}
                    </span>
                    <span className="md:text-xl">{hobby.memoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="w-full h-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
