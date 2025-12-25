import { AnimatedMenuDemo } from './components/layout/AnimatedMenuDemo';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import { Glass } from './components/ui/glass';

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased font-mona-sans relative">
          <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          </div>
        <AnimatedMenuDemo />
        <div className="container mx-auto px-8 pt-36">
          <Glass borderRadius={60} blur={1} followMouse ripple  />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
