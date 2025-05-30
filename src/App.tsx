import About from './components/Discover';
import Expreince from './components/Expreince';
import Projects from './components/Projects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Tools from './components/Tools';
import { ThemeProvider } from './components/Theme-Provider';
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Expreince />
      <Tools />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
