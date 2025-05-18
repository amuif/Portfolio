import Hero from './components/custom/Hero';
import NavBar from './components/custom/NavBar';

function App() {
  return (
    <div className="font-geist ">
      <div className="relative h-screen [background-image:linear-gradient(to_right,_#241931_60%,_#000000_100%)]">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
