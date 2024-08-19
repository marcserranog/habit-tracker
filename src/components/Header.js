import React from "react";
import { useTheme } from "../theme/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img
          src="habitTrackerIcon.png"
          alt="Habit Tracker Icon"
          className="w-12 h-12 mr-2"
        />
        <h1 className="text-4xl font-bold">Habit Tracker</h1>
      </div>
      <button onClick={toggleTheme} className="text-2xl focus:outline-none">
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
};

export default Header;
