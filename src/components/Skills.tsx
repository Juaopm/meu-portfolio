import React from "react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: { name: string; description: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Front-End",
    skills: [
      {
        name: "React",
        description: "Biblioteca para construção de interfaces modernas.",
      },
      {
        name: "TypeScript",
        description: "JavaScript com tipagem estática e segura.",
      },
      {
        name: "JavaScript",
        description: "Linguagem de programação para desenvolvimento web.",
      },
      {
        name: "Tailwind CSS",
        description: "Framework CSS utilitário para estilização de interfaces.",
      },
      {
        name: "HTML5 / CSS3",
        description: "Fundamentos de estrutura e estilização para a web.",
      },
    ],
  },
  {
    title: "Back-End",
    skills: [
      {
        name: "Java",
        description:
          "Linguagem orientada a objetos para desenvolvimento de aplicações.",
      },
      {
        name: "Spring Boot",
        description: "Framework para construção de aplicações e APIs em Java.",
      },
    ],
  },
  {
    title: "Dados & Ferramentas",
    skills: [
      {
        name: "MySQL",
        description: "Sistema de gerenciamento de banco de dados relacional.",
      },
      {
        name: "PostgreSQL",
        description: "Banco de dados relacional robusto e extensível.",
      },
      {
        name: "Git / GitHub",
        description:
          "Versionamento e colaboração no desenvolvimento de software.",
      },
      {
        name: "n8n",
        description:
          "Ferramenta de automação de fluxos de trabalho e integração de sistemas.",
      },
      {
        name: "Supabase",
        description:
          "Plataforma de backend como serviço com integração de banco de dados e autenticação.",
      },
    ],
  },
];

const marqueeSkills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Java",
  "Spring Boot",
  "SQL",
  "Git",
  "GitHub",
  "Supabase",
  "n8n",
];

export const Skills: React.FC = () => {
  return (
    <section
      id="habilidades"
      className="min-h-screen py-28 px-6 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 mb-16 text-center"
        >
          <span className="font-mono text-purple-400 text-sm tracking-wider uppercase">
            // MINHA STACK
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Tecnologias
          </h2>

          <p className="max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed mt-2">
            Tecnologias que venho utilizando para transformar ideias em projetos
            e evoluir como desenvolvedor.
          </p>

          <div className="w-16 h-1 bg-linear-to-r from-purple-500 to-[#5A189A] rounded-full mt-2"></div>
        </motion.div>

        {/* Grid de Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#13111c]/60 border border-[#5A189A]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl hover:border-[#5A189A]/40 transition-all group"
            >
              {/* Cabeçalho do Card estilo Terminal */}
              <div className="flex items-center justify-between border-b border-purple-900/30 pb-4">
                <h3 className="text-lg font-mono font-semibold text-purple-300">
                  {category.title}
                </h3>

                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-900/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-600/60"></div>
                </div>
              </div>

              {/* Lista de Skills em formato de Pílulas */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/pill relative px-3.5 py-1.5 bg-[#1a1726] border border-[#5A189A]/30 rounded-xl text-xs sm:text-sm font-medium text-gray-200 hover:text-white hover:border-purple-400 hover:bg-[#231e33] transition-all cursor-default"
                  >
                    <span>{skill.name}</span>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-[#0d0b14] border border-[#5A189A]/40 text-gray-300 text-xs rounded-lg shadow-xl opacity-0 pointer-events-none group-hover/pill:opacity-100 group-hover/pill:pointer-events-auto transition-all duration-200 z-20 text-center font-light">
                      {skill.description}

                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0d0b14]"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Marquee */}
        <div className="w-full mt-20 overflow-hidden relative">
          <div className="flex w-max marquee">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <React.Fragment key={`${skill}-${index}`}>
                <span className="font-mono text-sm text-gray-400 whitespace-nowrap">
                  {skill}
                </span>

                <span className="mx-6 text-purple-500/60">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Animação do Infinite Marquee */}
      <style>
        {`
          @keyframes marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .marquee {
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};
