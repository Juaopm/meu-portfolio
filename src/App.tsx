import { About } from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export function App() {
  return (
    <div className="min-h-screen text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
