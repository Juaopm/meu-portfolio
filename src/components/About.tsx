import React from "react";
import { motion } from "framer-motion";
import PerfilImage from "../assets/perfil.jpeg";
import { useLanguage } from "../context/LanguageContext";

export const About: React.FC = () => {
  const { language } = useLanguage();

  const textos = {
    pt: {
      label: "// Quem sou eu",
      titulo: "Sobre Mim",
      descricao: (
        <>
          Sou estudante de{" "}
          <span className="text-white font-medium">
            Análise e Desenvolvimento de Sistemas
          </span>{" "}
          e desenvolvedor em formação. Gosto de aprender construindo,
          transformando ideias e problemas reais em aplicações funcionais. Tenho
          experiência prática em projetos utilizando{" "}
          <span className="text-white font-medium">
            React, TypeScript, Java, Spring Boot, SQL e automação com n8n
          </span>
          , explorando desde a construção de interfaces até APIs, bancos de
          dados e integrações. Atualmente, meu foco é evoluir como desenvolvedor
          Full Stack, fortalecendo principalmente meus conhecimentos em
          back-end, arquitetura e integração de sistemas.
        </>
      ),
      cta: "Conheça meus projetos",
    },

    en: {
      label: "// About me",
      titulo: "About Me",
      descricao: (
        <>
          I'm a student of{" "}
          <span className="text-white font-medium">
            Systems Analysis and Development
          </span>{" "}
          and a developer in training. I enjoy learning by building, turning
          real-world ideas and problems into functional applications. I have
          hands-on experience with projects using{" "}
          <span className="text-white font-medium">
            React, TypeScript, Java, Spring Boot, SQL, and n8n automation
          </span>
          , exploring everything from interface development to APIs, databases,
          and system integrations. Currently, my focus is on growing as a
          Full-Stack Developer, with an emphasis on back-end development,
          architecture, and system integration.
        </>
      ),
      cta: "Explore my projects",
    },
  };

  const texto = textos[language];

  return (
    <section
      id="sobre"
      className="min-h-[calc(100vh-5rem)] py-20 px-6 flex items-center justify-center scroll-mt-20"
    >
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Lado Esquerdo: Foto de Perfil */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border border-[#5A189A]/40 shadow-[0_0_30px_rgba(90,24,154,0.25)] group">
            <img
              src={PerfilImage}
              alt="João Pedro"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Detalhe de gradiente sutil sobre a foto */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0d0b14]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Lado Direito: Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-start gap-5 text-left"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-purple-400 text-sm tracking-wider uppercase">
              {texto.label}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {texto.titulo}
            </h2>
          </div>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            {texto.descricao}
          </p>

          <a
            href="#projetos"
            className="inline-flex items-center gap-2 mt-1 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>{texto.cta}</span>

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
