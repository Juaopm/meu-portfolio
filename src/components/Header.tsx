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
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-wider text-white group"
        >
          <span className="text-[#5A189A] group-hover:text-[#7b2cbf] transition-colors">
            &lt;
          </span>

          <span>João</span>

          <span className="text-[#5A189A] group-hover:text-[#7b2cbf] transition-colors">
            /&gt;
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#sobre" className="hover:text-[#7b2cbf] transition-colors">
            {labels.about}
          </a>

          <a
            href="#habilidades"
            className="hover:text-[#7b2cbf] transition-colors"
          >
            {labels.skills}
          </a>

          <a
            href="#projetos"
            className="hover:text-[#7b2cbf] transition-colors"
          >
            {labels.projects}
          </a>

          <a href="#contato" className="hover:text-[#7b2cbf] transition-colors">
            {labels.contact}
          </a>
        </nav>

        {/* Language Toggle */}
        <div className="flex items-center gap-2 text-sm font-mono">
          <button
            onClick={() => language === "en" && toggleLanguage()}
            className={
              language === "pt"
                ? "text-purple-400"
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
                ? "text-purple-400"
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
