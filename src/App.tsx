import About from './components/About';
import Expreince from './components/Expreince';
import Projects from './components/Projects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Expreince />
    </main>
  );
}

export default App;
