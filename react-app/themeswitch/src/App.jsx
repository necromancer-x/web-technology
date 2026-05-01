import { ThemeProvider } from "./context/ThemeProvider";
import Background from "./components/Background";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import FooterNote from "./components/FooterNote";

function AppContent() {
  return (
    <div className="min-h-screen w-full bg-stone-50 dark:bg-stone-950 transition-colors duration-300 font-[Outfit,sans-serif]">
      <Background />
      <Header />
      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-16 gap-10">
        <Hero />
        <Card />
        <FooterNote />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
