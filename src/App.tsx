import About from './components/Discover';
import Expreince from './components/Expreince';
import Projects from './components/Projects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tools from './components/Tools';
function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Expreince />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
