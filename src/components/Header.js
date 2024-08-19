import React from "react";
import { useTheme } from "../theme/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`fixed top-0 left-0 w-full p-4 bg-gray-800 text-white z-50 ${theme === 'light' ? 'bg-gray-800' : 'bg-gray-900'}`}>
      <div className="flex items-center justify-between">
        <img
          src="habitTrackerIcon.png"
          alt="Habit Tracker Icon"
          className="w-14 h-14"
        />
        <h1 className="text-4xl font-bold text-center flex-grow">
          Habit Tracker
        </h1>
        <button
          onClick={toggleTheme}
          className="text-2xl focus:outline-none"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
