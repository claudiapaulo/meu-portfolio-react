import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('modo-noturno');
    } else {
      document.body.classList.remove('modo-noturno');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <div className="fundo-decorativo"></div>
      
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      
      <main className="caixa-principal">
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}

export default App;