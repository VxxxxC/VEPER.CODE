import React, { useEffect, useState } from "react";

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
    <div className="inline-flex justify-center p-1 rounded-3xl bg-gray-600">
      {themes.map((color) => {
        const toggle = color === theme;
        return (
          <button
            key={color}
            className={`${
              toggle ? "bg-white text-black" : "text-white"
            } cursor-pointer p-2 rounded-3xl`}
            onClick={() => toggleTheme()}
          >
            {color}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
}

export default ThemeToggle;
