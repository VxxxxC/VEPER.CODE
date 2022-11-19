import React, { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

function ThemeToggle() {
  const themes = ["light", "dark"];
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== undefined && localStorage.getItem("theme")) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    const color = theme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", color);
    setTheme(color);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="flex justify-center p-[1px] rounded-full bg-orange-500 dark:bg-purple-500">
      {themes.map((color) => {
        const toggle = color === theme;
        return (
          <button
            key={color}
            className={`${
              toggle ? "bg-white text-black" : ""
            }  p-2 rounded-full flex justify-center w-[100%]`}
            onClick={() => toggleTheme()}
          >
            {color === "dark" ? <IoMoon /> : <IoSunny />}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
}

export default ThemeToggle;
