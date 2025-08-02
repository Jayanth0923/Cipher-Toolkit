import React from "react";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = ({ isDark, setIsDark }) => {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full border border-gray-400 dark:border-gray-200"
      title="Toggle Dark Mode"
    >
      {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
    </button>
  );
};

export default DarkModeToggle;
