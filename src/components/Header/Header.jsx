import { useState, useEffect, useContext } from "react";
import DarkModeContext from "../../store/DarkModeContext";
import { motion } from "framer-motion";
import "./header.scss";
import logo from "../../assets/logoA.png";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="sup-header-container">
      <div className="header-content">
        <div className="location">PARIS, FR -</div>
        <div className="current-time">
          {currentTime.toLocaleTimeString("fr-FR", timeOptions)}
        </div>
      </div>

      <div className="toolbar-header">
        <img src={logo} className="logogo" />
        <div className="gradient-bar"></div>
        <button
          className={`smiley ${darkMode ? "dark-button" : "light-button"}`}
          onClick={toggleDarkMode}
        >
          <div className="emoji">{darkMode ? "🌝" : "🌚"}</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
