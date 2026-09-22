import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  const navigation = {
    pt: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
    },
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
  };

  const labels = navigation[language];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-purple-900/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-wider text-white group"
        >
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
            &lt;
          </span>
          <span>João</span>
          <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
            /&gt;
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {[
            { href: "#sobre", label: labels.about },
            { href: "#habilidades", label: labels.skills },
            { href: "#projetos", label: labels.projects },
            { href: "#contato", label: labels.contact },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative hover:text-white transition-colors py-1 group"
            >
              {item.label}
              {/* Linha sutil animada no hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Language Toggle */}
        <div className="flex items-center gap-2 text-sm font-mono">
          <button
            onClick={() => language === "en" && toggleLanguage()}
            className={
              language === "pt"
                ? "text-purple-400 font-semibold"
                : "text-gray-500 hover:text-gray-300 transition-colors"
            }
          >
            PT
          </button>

          <span className="text-gray-700">|</span>

          <button
            onClick={() => language === "pt" && toggleLanguage()}
            className={
              language === "en"
                ? "text-purple-400 font-semibold"
                : "text-gray-500 hover:text-gray-300 transition-colors"
            }
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};
