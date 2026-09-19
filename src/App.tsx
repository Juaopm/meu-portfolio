import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export function App() {
  return (
    <div className="min-h-screen text-gray-100">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
