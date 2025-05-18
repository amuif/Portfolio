import Hero from './components/custom/Hero';
import NavBar from './components/custom/NavBar';
import Projects from './components/custom/projects';

function App() {
  return (
    <div className="font-geist [background-image:linear-gradient(to_right,_#241931_60%,_#000000_100%)]">
      <div className="relative h-screen ">
        <NavBar />
        <Hero />
      </div>
      <Projects />
    </div>
  );
}

export default App;
