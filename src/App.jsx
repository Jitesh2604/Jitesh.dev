import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/common/CustomCursor";

function App() {
  return (
    <div className="bg-black text-gray-100 min-h-screen font-inter">
      <CustomCursor />
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
    </div>
  );
};

export default App
