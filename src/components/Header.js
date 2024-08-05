import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>Habit Tracker</h1>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
};

export default Header;
