import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/svg/CheckCircle";
import ArrowUpRight from "@/assets/svg/ArrowUpRight";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";

const portfolioProjects = [
  {
    company: "Poglia Advogados",
    year: "2024",
    title: "Light Saas Landing Page",
    results: [
      { title: "Aumento de 21,5% nas vendas" },
      { title: "Expansão de 39% no alcance de clientes" },
      { title: "Aumento de 50% na velocidade do site" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Aumento de 35% no tráfego mobile" },
      { title: "Aprimoramento de 40% na experiência do usuário" },
      { title: "Aumento de 200% na velocidade do site" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Tráfego móvel aumentado em 35%" },
      { title: "Melhora na retenção de usuários em 20%" },
      { title: "Redução de custos operacionais em 25%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projetos">
      <div className="container">
        <SectionHeader
          eyebrow="Resultados Reais"
          title="Projetos em Destaque"
          description="Veja como transformo conteitos em experiências digitais cativantes."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt:12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase 
                  tracking-widest text-sm text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5  mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50 "
                      >
                        <CheckCircleIcon styles="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl 
                  font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:scale-105 transition duration-300 cursor-pointer"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight styles="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none hover:scale-105 transition duration-300 cursor-pointer"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
