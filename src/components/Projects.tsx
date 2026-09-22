import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import nailStudioImage from "../assets/Nail-Studio.jpg";
import automationFlowImage from "../assets/automation-flow.jpg";
import matchTrackerImage from "../assets/matchTrackerImage.png";

interface ProjectRepository {
  label: string;
  url: string;
}

interface Project {
  title: string;
  type: string;
  status?: string;
  description: string;
  technologies: string[];
  image: string;
  live?: string;
  repositories?: ProjectRepository[];
  highlights: string[];
}

const projects: Record<"pt" | "en", Project[]> = {
  pt: [
    {
      title: "MatchTracker",
      type: "Projeto pessoal",
      status: "Em desenvolvimento",
      description:
        "Plataforma para registrar partidas de CS2, acompanhar desempenho e visualizar estatísticas ao longo do tempo.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: matchTrackerImage,
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/Juaopm/matchtracker-web",
        },
      ],
      highlights: [
        "Componentização e reutilização de interfaces",
        "Dashboard com estatísticas e visualização de dados",
        "Organização de estados e histórico de partidas",
      ],
    },

    {
      title: "Nail Studio",
      type: "Projeto real",
      status: "Em desenvolvimento",
      description:
        "Aplicação desenvolvida para um estúdio de unhas, unindo apresentação de serviços, portfólio e fluxo de solicitação de agendamento.",
      technologies: ["React", "TypeScript", "Java", "Spring Boot", "Supabase"],
      image: nailStudioImage,
      repositories: [
        {
          label: "Front-end",
          url: "https://github.com/Juaopm/studio-nail-web",
        },
        {
          label: "Back-end",
          url: "https://github.com/Juaopm/studio-nail-api",
        },
      ],
      highlights: [
        "Interface responsiva e mobile-first",
        "Integração entre front-end, back-end e banco de dados",
        "Formulário de solicitação e persistência de dados",
      ],
    },

    {
      title: "Fluxo de Reuniões",
      type: "Projeto de automação",
      status: "Concluído",
      description:
        "Workflow de automação desenvolvido para identificar reuniões próximas, validar dias úteis e enviar notificações automaticamente via Discord.",
      technologies: ["n8n", "JavaScript", "Google Sheets", "Discord API"],
      image: automationFlowImage,
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/Juaopm/task-notification-automation",
        },
      ],
      highlights: [
        "Automação do fluxo de notificações de reuniões",
        "Validação de dias úteis e janela de execução",
        "Integração entre Google Sheets, n8n e Discord",
      ],
    },
  ],

  en: [
    {
      title: "MatchTracker",
      type: "Personal project",
      status: "In development",
      description:
        "A platform for recording CS2 matches, tracking performance, and visualizing statistics over time.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      image: matchTrackerImage,
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/Juaopm/matchtracker-web",
        },
      ],
      highlights: [
        "Componentization and reusable interfaces",
        "Dashboard with statistics and data visualization",
        "State organization and match history",
      ],
    },

    {
      title: "Nail Studio",
      type: "Real-world project",
      status: "In development",
      description:
        "An application developed for a nail studio, combining service presentation, portfolio, and appointment request flow.",
      technologies: ["React", "TypeScript", "Java", "Spring Boot", "Supabase"],
      image: nailStudioImage,
      repositories: [
        {
          label: "Front-end",
          url: "https://github.com/Juaopm/studio-nail-web",
        },
        {
          label: "Back-end",
          url: "https://github.com/Juaopm/studio-nail-api",
        },
      ],
      highlights: [
        "Responsive, mobile-first interface",
        "Integration between front-end, back-end, and database",
        "Request form and data persistence",
      ],
    },

    {
      title: "Meeting Flow",
      type: "Automation project",
      status: "Completed",
      description:
        "An automation workflow designed to identify upcoming meetings, validate business days, and automatically send notifications via Discord.",
      technologies: ["n8n", "JavaScript", "Google Sheets", "Discord API"],
      image: automationFlowImage,
      repositories: [
        {
          label: "GitHub",
          url: "https://github.com/Juaopm/task-notification-automation",
        },
      ],
      highlights: [
        "Automated meeting notification workflow",
        "Business-day and execution-window validation",
        "Integration between Google Sheets, n8n, and Discord",
      ],
    },
  ],
};

export const Projects: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    pt: {
      label: "// O QUE EU CONSTRUÍ",
      title: "Projetos",
      description:
        "Projetos que representam minha evolução e minha forma de transformar ideias em aplicações.",
      explored: "// O QUE EXPLOREI",
      viewProject: "Ver projeto →",
      footerLabel: "// SEMPRE CONSTRUINDO",
      footerDescription:
        "Novos projetos e aprendizados fazem parte da jornada.",
    },
    en: {
      label: "// WHAT I BUILT",
      title: "Projects",
      description:
        "Projects that reflect my growth and how I turn ideas into applications.",
      explored: "// WHAT I EXPLORED",
      viewProject: "View project →",
      footerLabel: "// ALWAYS BUILDING",
      footerDescription:
        "New projects and new lessons are always part of the journey.",
    },
  };

  const currentProjects = projects[language];
  const text = texts[language];

  return (
    <section
      id="projetos"
      className="min-h-screen py-28 px-6 flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col">
        {/* Título da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 mb-20 text-center"
        >
          <span className="font-mono text-purple-400 text-sm tracking-wider uppercase">
            {text.label}
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {text.title}
          </h2>

          <p className="max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed mt-2">
            {text.description}
          </p>

          <div className="w-16 h-1 bg-linear-to-r from-purple-500 to-[#5A189A] rounded-full mt-2"></div>
        </motion.div>

        {/* Lista de Projetos */}
        <div className="flex flex-col gap-24">
          {currentProjects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Preview do Projeto */}
              <div
                className={`relative group ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute -inset-1 bg-linear-to-r from-purple-500/20 to-[#5A189A]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative overflow-hidden rounded-2xl border border-[#5A189A]/20 bg-[#13111c]/60 backdrop-blur-md shadow-xl">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Preview do projeto ${project.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>

              {/* Informações do Projeto */}
              <div
                className={`flex flex-col ${
                  index % 2 !== 0 ? "lg:order-1" : ""
                }`}
              >
                {/* Identificação */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-purple-400 text-xs tracking-wider uppercase">
                    {project.type}
                  </span>

                  {project.status && (
                    <>
                      <span className="text-gray-600">•</span>

                      <span className="font-mono text-xs text-gray-500">
                        {project.status}
                      </span>
                    </>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-5">
                  {project.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-xl mb-6">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 bg-[#1a1726] border border-[#5A189A]/30 rounded-xl text-xs sm:text-sm font-medium text-gray-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* O que explorei */}
                <div className="mb-8">
                  <span className="font-mono text-xs tracking-wider uppercase text-purple-400">
                    {text.explored}
                  </span>

                  <ul className="mt-4 flex flex-col gap-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-gray-400"
                      >
                        <span className="text-purple-500 mt-0.5">›</span>

                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {project.live || project.repositories?.length ? (
                  <div className="flex flex-wrap items-center gap-6">
                    {/* Projeto publicado */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        {text.viewProject}
                      </a>
                    )}

                    {/* Repositórios */}
                    {project.repositories?.map((repository) => (
                      <a
                        key={repository.label}
                        href={repository.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {repository.label} ↗
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Rodapé da seção */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center mt-28"
        >
          <span className="font-mono text-purple-400 text-sm">
            {text.footerLabel}
          </span>

          <p className="text-gray-500 text-sm mt-3">{text.footerDescription}</p>
        </motion.div>
      </div>
    </section>
  );
};
