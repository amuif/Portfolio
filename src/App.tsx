import Hero from "./components/hero";
import NavBar from "./components/nav-bar";
import { Projects } from "./components/projects";
import { Experience } from "./components/experience";
import { TechStacks } from "./components/tech-stacks";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="font-grotesk min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <TechStacks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
