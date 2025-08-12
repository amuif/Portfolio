import Expreince from './components/Expreince';
import Projects from './components/Projects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Tools from './components/Skills';
import { ThemeProvider } from './components/Theme-Provider';
import { DockNav } from './components/DockNav';
import { useIsMobile } from './hooks/isMobile';
function App() {
  const isMobile = useIsMobile();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
      <div>
        {!isMobile && <DockNav />}
        <Hero />
        <Projects />
        <Expreince />
        <Tools />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
