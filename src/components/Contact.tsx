import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";

const contacts = {
  pt: [
    {
      label: "GitHub",
      description: "Meus projetos e código",
      href: "https://github.com/Juaopm",
      icon: faGithub,
    },
    {
      label: "LinkedIn",
      description: "Minha trajetória profissional",
      href: "https://linkedin.com/in/jmotam/",
      icon: faLinkedin,
    },
    {
      label: "E-mail",
      description: "Vamos conversar por e-mail",
      href: "mailto:joaopedromachado830@gmail.com",
      icon: faEnvelope,
    },
  ],
  en: [
    {
      label: "GitHub",
      description: "My projects and code",
      href: "https://github.com/Juaopm",
      icon: faGithub,
    },
    {
      label: "LinkedIn",
      description: "My professional journey",
      href: "https://linkedin.com/in/jmotam/",
      icon: faLinkedin,
    },
    {
      label: "E-mail",
      description: "Let's talk by email",
      href: "mailto:joaopedromachado830@gmail.com",
      icon: faEnvelope,
    },
  ],
};

export function Contact() {
  const { language } = useLanguage();

  const texts = {
    pt: {
      label: "// VAMOS CONVERSAR",
      title: "Vamos construir algo juntos?",
      description:
        "Estou aberto a oportunidades, projetos freelance e conversas sobre tecnologia. Se você tem uma ideia ou quer trocar uma ideia, pode me chamar.",
      cta: "Baixar Currículo",
      status: "aberto a novas oportunidades",
    },
    en: {
      label: "// LET'S TALK",
      title: "Let's build something together?",
      description:
        "I'm open to opportunities, freelance projects, and conversations about technology. If you have an idea or just want to talk, feel free to reach out.",
      cta: "Download Resume",
      status: "open to new opportunities",
    },
  };

  const currentContacts = contacts[language];
  const text = texts[language];

  return (
    <section
      id="contato"
      className="min-h-screen py-28 px-6 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-purple-400">
            {text.label}
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            {text.title}
          </h2>

          <div className="w-14 h-1 bg-linear-to-r from-purple-500 to-purple-300 rounded-full mx-auto mt-6" />

          <p className="mt-8 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            {text.description}
          </p>
        </motion.div>

        {/* Contacts */}
        <div className="grid md:grid-cols-3 gap-4 mt-14">
          {currentContacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              className="group rounded-2xl border border-[#5A189A]/20 bg-[#13111c]/60 backdrop-blur-sm p-6 text-left transition-all duration-300 hover:border-purple-500/40 hover:bg-[#1a1726]"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                  <FontAwesomeIcon icon={contact.icon} />
                </div>

                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-gray-600 group-hover:text-purple-400 transition-colors text-sm"
                />
              </div>

              <h3 className="mt-5 text-white font-semibold">{contact.label}</h3>

              <p className="mt-1 text-sm text-gray-500">
                {contact.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* CTA (Download CV) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12"
        >
          <a
            href="/public/Curriculo.pdf"
            download="Joao_Pedro_Curriculo.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors shadow-lg shadow-purple-600/20"
          >
            <FontAwesomeIcon icon={faFileArrowDown} />
            <span>{text.cta}</span>
          </a>
        </motion.div>

        {/* Status */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 font-mono text-xs text-gray-600"
        >
          <span className="text-purple-400">●</span> {text.status}
        </motion.p>
      </div>
    </section>
  );
}
