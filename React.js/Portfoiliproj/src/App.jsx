import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import LandingRoom from "./components/LandingRoom";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [enterPortfolio, setEnterPortfolio] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {enterPortfolio ? (
        <>
        <Hero />
        <Skills />
        <Projects/>
        <Contact/>
        
        </>
      ) : (
        <LandingRoom
          openPortfolio={() => setEnterPortfolio(true)}
        />
      )}
    </AnimatePresence>
  );
}

export default App;