import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lottie } from "lottie-react";
import robotAnimation from "../assets/robot-animation.json";

const titulosDinamicos = [
  "Full-Stack Developer em formação",
  "Estudante de ADS",
  "Apaixonado por Tecnologia",
];

export const Hero: React.FC = () => {
  const [indiceTitulo, setIndiceTitulo] = useState(0);

  // Efeito para alternar o subtítulo dinamicamente
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceTitulo((prev) => (prev + 1) % titulosDinamicos.length);
    }, 4000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen pt-32 pb-16 px-6 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Lado Esquerdo: Textos e Identidade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start justify-center gap-6"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Olá, eu sou <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-[#5A189A]">
              João Pedro
            </span>
          </h1>

          {/* Subtítulo dinâmico */}
          <div className="h-8 flex items-center text-xl sm:text-2xl font-mono text-purple-300">
            <span>&gt; </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={indiceTitulo}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="ml-2 font-semibold"
              >
                {titulosDinamicos[indiceTitulo]}
              </motion.span>
            </AnimatePresence>
            <span className="animate-ping ml-1 w-2 h-5 bg-purple-500 inline-block"></span>
          </div>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Explorando o desenvolvimento de software de ponta a ponta, unindo a
            robustez do back-end com a fluidez e interatividade do front-end
            moderno.
          </p>

          {/* Ícones de Redes Sociais */}
          <div className="flex items-center gap-4 pt-2">
            {/* GitHub */}
            <a
              href="https://github.com/Juaopm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-[#13111c] hover:bg-[#3C096C] border border-[#5A189A]/30 text-gray-300 hover:text-white transition-all rounded-xl shadow-md hover:scale-105"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/jmotam/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-[#13111c] hover:bg-[#3C096C] border border-[#5A189A]/30 text-gray-300 hover:text-white transition-all rounded-xl shadow-md hover:scale-105"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Lado Direito: Robozinho Lottie centralizado e ampliado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="w-full max-w-md h-96 flex items-center justify-center drop-shadow-[0_0_30px_rgba(90,24,154,0.3)]">
            <Lottie src={robotAnimation} autoplay loop />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
