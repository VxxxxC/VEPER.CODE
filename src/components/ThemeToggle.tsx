import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const themes = ["light", "dark"];

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

  useEffect(()=>{
    const root = document.documentElement;

    if(theme === "light"){
     root.classList.remove('dark');
    }else{
      root.classList.add('dark');
    }
  },[theme])

  return(
    <>
  <button onClick={() => toggleTheme()}>click me!</button>
    <p>{theme}</p>
    </>
  )
}

export default ThemeToggle;
