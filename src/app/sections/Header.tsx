"use client";
import { useEffect, useMemo, useState } from "react";
import { scrollToSection } from "@/utils/scrollToSection";

export const Header = () => {
  const sections = useMemo(() => ["home", "projects", "about", "contact"], []);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) {
        return null;
      }
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3, rootMargin: "-100px 0px 0px 0px" }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [sections]);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToSection(id, e)}
            className={`nav-item ${
              active === id ? "bg-white text-gray-900" : ""
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
};
