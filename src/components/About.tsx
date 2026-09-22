import React from "react";
import { motion } from "framer-motion";
import PerfilImage from "../assets/perfil.jpeg";

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="min-h-[80vh] py-28 px-6 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Lado Esquerdo: Foto de Perfil */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-[#5A189A]/40 shadow-[0_0_30px_rgba(90,24,154,0.25)] group">
            <img
              src={PerfilImage}
              alt="João Pedro"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Detalhe de gradiente sutil sobre a foto */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0d0b14]/60 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Lado Direito: Textos (Estilo Clean / Solto) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-purple-400 text-sm tracking-wider uppercase">
              // Quem sou eu
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Sobre Mim
            </h2>
          </div>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light">
            Sou estudante de{" "}
            <span className="text-white font-medium">
              Análise e Desenvolvimento de Sistemas
            </span>{" "}
            e desenvolvedor em formação. Gosto de aprender construindo,
            transformando ideias e problemas reais em aplicações funcionais.
            Tenho experiência prática em projetos utilizando{" "}
            <span className="text-white font-medium">
              React, TypeScript, Java, Spring Boot, SQL e automação com n8n
            </span>{" "}
            explorando desde a construção de interfaces até APIs, bancos de
            dados e integrações. Atualmente, meu foco é evoluir como
            desenvolvedor Full Stack, fortalecendo principalmente meus
            conhecimentos em back-end, arquitetura e integração de sistemas.
          </p>

          <div className="pt-2">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Vamos conversar?</span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};
