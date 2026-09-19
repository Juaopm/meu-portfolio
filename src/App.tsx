import { Header } from "./components/Header";

export function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      <Header />

      {/* Espaçamento temporário para testarmos a rolagem */}
      <main className="pt-32 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white">
          Bem-vindo ao meu Portfólio 🚀
        </h1>
        <p className="mt-4 text-gray-400">
          Estrutura inicial configurada com sucesso. Vamos construir as próximas
          seções!
        </p>
      </main>
    </div>
  );
}

export default App;
