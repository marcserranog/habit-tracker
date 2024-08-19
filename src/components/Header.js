import React from "react";
import { useTheme } from "../theme/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="relative flex items-center p-4 bg-gray-800 text-white mb-6">
      <img
        src="habitTrackerIcon.png"
        alt="Habit Tracker Icon"
        className="w-14 h-14"
      />
      <h1 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold">
        Habit Tracker
      </h1>
      <button
        onClick={toggleTheme}
        className="ml-auto text-2xl focus:outline-none"
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>
    </header>
  );
};

export default Header;
