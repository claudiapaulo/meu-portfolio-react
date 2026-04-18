import React from 'react';

function Header({ toggleTheme, isDarkMode }) {
  return (
    <header className="menu-superior">
      <div className="texto-logotipo">
        <em>Ana C De P </em><span>| Portfólio</span>
      </div>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
        <button id="alternador-tema" aria-label="Alternar tema" onClick={toggleTheme}>
          <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
        </button>
      </nav>
    </header>
  );
}

export default Header;