"use client";
import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center">
      {theme == "dark" ? (
        <button
          onClick={() => {
            setTheme("light");
          }}
        >
          <span className="text-primary">
          <CiLight />
          </span>
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <span className="text-primary">
          <MdDarkMode />
          </span>
        </button>
      )}
    </div>
  );
};

export default ThemeToggler;
