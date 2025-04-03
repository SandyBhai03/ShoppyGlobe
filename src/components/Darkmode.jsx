import React from "react";
import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  React.useEffect(() => {
    const htmlElement = document.documentElement;

    if (theme === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative">
      {/* Light Mode Button */}
      {theme === "light" ? (
        <img
          src={LightButton}
          alt="Light Mode"
          onClick={() => setTheme("dark")}
          className="w-12 cursor-pointer transition-all duration-300"
        />
      ) : (
        <img
          src={DarkButton}
          alt="Dark Mode"
          onClick={() => setTheme("light")}
          className="w-12 cursor-pointer transition-all duration-300"
        />
      )}
    </div>
  );
};

export default DarkMode;
