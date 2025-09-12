import ArrowUpRight from "@/assets/svg/ArrowUpRight";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 py-8 px-10 rounded-3xl text-gray-900 text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Vamos criar algo incrível juntos
              </h2>
              <p className="text-sm md:text-base mt-2">
                Pronto para dar vida ao seu próximo projeto? Vamos conversar e discutir como posso ajudar você a alcançar seus objetivos.
              </p>
            </div>
            <div className="">
              <a className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:scale-105 transition duration-300 cursor-pointer" href="https://wa.me/5554999768893?text=Oi,%20vi%20seu%20portfólio%20e%20achei%20interessante.%20Podemos%20conversar?"
              target="_blank">
                <span className="font-semibold">Fale comigo</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
