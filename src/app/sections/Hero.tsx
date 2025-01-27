import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/svg/ArrowDown";
import ArrowUpRight from "@/assets/svg/ArrowUpRight";
import CheckCircle from "@/assets/svg/CheckCircle";
import Chrome from "@/assets/svg/Chrome";
import Css3 from "@/assets/svg/Css3";
import Github from "@/assets/svg/Github";
import Html5 from "@/assets/svg/Html5";
import ReactIcon from "@/assets/svg/React";
import Sparkle from "@/assets/svg/Sparkle";
import SquareJs from "@/assets/svg/SquareJs";
import Star from "@/assets/svg/Star";

import Image from "next/image";


export const HeroSection = () => {
  return (
  <div>
    <div className="container">
      <Image src={memojiImage} alt="Person peekin from behind laptop" />
      <div>
        <div></div>
        <div>Available for new projects</div>
      </div>
      <h1>building Exceptional User Experiences </h1>
      <p>I specializing in transforming designs into functional, high-performing web applications. Let&apos;s discuss your next project</p>
      <div>
        <button>
          <span>Explore My Work </span>
          <ArrowDown />
          <ArrowUpRight />
          <CheckCircle />
          <Chrome />
          <Css3 />
          <Github />
          <Html5 />
          <ReactIcon />
          <Sparkle />
          <SquareJs />
          <Star />
        </button>
        <button>
          <span>👋</span>
          <span>Let&apos;s connect</span>
        </button>
      </div>
    </div>
  </div>);
};
