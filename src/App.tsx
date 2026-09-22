import { About } from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";

export function App() {
  return (
    <div className="min-h-screen text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
