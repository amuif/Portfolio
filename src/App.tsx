import About from './components/Discover';
import Expreince from './components/Expreince';
import Projects from './components/Projects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Tools from './components/Skills';
import { ThemeProvider } from './components/Theme-Provider';
import { DockNav } from './components/DockNav';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
      <DockNav />
      <Hero />
      <About />
      <Projects />
      <Tools />
      <Expreince />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
