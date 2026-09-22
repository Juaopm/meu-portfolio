import React, { createContext, useContext, useState } from "react";

type Language = "pt" | "en";

interface LanguageContextData {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextData | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pt");

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de LanguageProvider");
  }

  return context;
};
