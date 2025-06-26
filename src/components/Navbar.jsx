import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">SPA-портфолио</div>
      
      {/* Мобильное меню */}
      <button 
        className="menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Меню"
      >
        <svg 
          className="menu-icon" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24"
        >
          <path 
            d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z 
                M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z 
                M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" 
            fill="currentColor"
          />
        </svg>

      </button>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Главная</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Проекты</Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}>Навыки</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Контакты</Link>
      </div>

      <button 
        onClick={toggleTheme} 
        className="theme-toggle"
        aria-label="Сменить тему"
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
};

export default Navbar;