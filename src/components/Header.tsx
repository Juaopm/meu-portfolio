import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo personalizada com tags */}
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

        {/* Links de navegação limpos */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#sobre" className="hover:text-[#7b2cbf] transition-colors">
            Sobre
          </a>
          <a
            href="#habilidades"
            className="hover:text-[#7b2cbf] transition-colors"
          >
            Habilidades
          </a>
          <a
            href="#projetos"
            className="hover:text-[#7b2cbf] transition-colors"
          >
            Projetos
          </a>
          <a href="#contato" className="hover:text-[#7b2cbf] transition-colors">
            Contato
          </a>
        </nav>

        {/* Botão "Vamos conversar" redirecionando para o LinkedIn */}
        <a
          href="https://www.linkedin.com/in/jmotam/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-medium text-white bg-[#3C096C] hover:bg-[#5A189A] transition-all rounded-lg shadow-lg shadow-[#3C096C]/30"
        >
          Vamos conversar!
        </a>
      </div>
    </header>
  );
};
