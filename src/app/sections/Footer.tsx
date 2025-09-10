import ArrowUpRight from "@/assets/svg/ArrowUpRight";

const footerLinks = [
  // {
  //   title: "Youtube",
  //   href: "https://www.youtube.com/@pogliaplays",
  // },
  {
    title: "Github",
    href: "https://github.com/Poglia"
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/pedropoglia/",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/pedropoglia/",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; Todos os direitos reservados. Pedro Poglia.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight styles="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
