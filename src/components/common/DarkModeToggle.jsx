import { useDarkMode } from "../../hooks/useDarkMode";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-200" />}
    </button>
  );
};

export default DarkModeToggle;
