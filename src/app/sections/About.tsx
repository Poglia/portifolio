import { Card } from "../components/Card";
import { SectionHeader } from "../components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "../components/CardHeader";
import { ToolboxItems } from "../components/ToolboxItems";

const hobbies = [
  {
    title: "Traveling",
    memoji: "😊",
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    memoji: "😊",
    left: "50%",
    top: "5%",
  },
  {
    title: "Reading",
    memoji: "😊",
    left: "35%",
    top: "40%",
  },
  {
    title: "Writing",
    memoji: "😊",
    left: "70%",
    top: "45%",
  },
  {
    title: "Coding",
    memoji: "😊",
    left: "10%",
    top: "70%",
  },
  {
    title: "Gaming",
    memoji: "😊",
    left: "60%",
    top: "70%",
  },
];
export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn More About Who I Am, what I Do, and Why I Do It."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              ></CardHeader>
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="book" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <div>
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft expectional digital experiences."
                  className=""
                ></CardHeader>
              </div>
              <ToolboxItems className="" />
              <ToolboxItems
                className="mt-6"
                itemsWrapperClassname="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              ></CardHeader>
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 py-1.5 bg-gradient-to-r
                     from-emerald-300 to-sky-400 rounded-full absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.memoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="w-full h-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
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
