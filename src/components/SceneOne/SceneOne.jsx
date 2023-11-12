import "./sceneone.scss";
import { FullpageSection } from "@ap.cx/react-fullpage";
import { useContext } from "react";
import DarkModeContext from "../../store/DarkModeContext";
import { motion } from "framer-motion";
import test from "../../assets/test.avif";

import Draggable from "react-draggable";

const SceneOne = ({ projectNameOne }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <FullpageSection style={{ height: "100vh" }}>
      <div className="header-container-scene-one">
        <div className="section one">
          <div className="project-one">{projectNameOne}</div>
          <div className="content"></div>

          <Draggable handle=".title-bar" defaultPosition={{ x: 170, y: 110 }}>
            <div className="mac-window big">
              <div
                className={`title-bar ${darkMode ? "dark-bar" : "light-bar"}`}
              >
                <div className="buttons">
                  <div className="close"></div>
                  <div className="minimize"></div>
                  <div className="maximize"></div>
                </div>
                <div
                  className={`title ${darkMode ? "dark-title" : "light-title"}`}
                >
                  3d-Product-Page
                </div>
              </div>
              <div className="window"></div>
            </div>
          </Draggable>
          <Draggable handle=".title-bar" defaultPosition={{ x: 200, y: 110 }}>
            <div className="mac-window medium">
              <div
                className={`title-bar ${darkMode ? "dark-bar" : "light-bar"}`}
              >
                <div className="buttons">
                  <div className="close"></div>
                  <div className="minimize"></div>
                  <div className="maximize"></div>
                </div>
                <div
                  className={`title ${darkMode ? "dark-title" : "light-title"}`}
                >
                  3d-Product-Page
                </div>
              </div>
              <div className="window">
                <img src={test} alt="" />
              </div>
            </div>
          </Draggable>

          <Draggable handle=".title-bar" defaultPosition={{ x: 170, y: -200 }}>
            <div className="mac-window small">
              <div
                className={`title-bar ${darkMode ? "dark-bar" : "light-bar"}`}
              >
                <div className="buttons">
                  <div className="close"></div>
                  <div className="minimize"></div>
                  <div className="maximize"></div>
                </div>
                <div
                  className={`title ${darkMode ? "dark-title" : "light-title"}`}
                >
                  3d-Product-Page
                </div>
              </div>
              <div className="window"></div>
            </div>
          </Draggable>

          <Draggable handle=".title-bar" defaultPosition={{ x: -150, y: 210 }}>
            <div className="mac-window large">
              <div
                className={`title-bar ${darkMode ? "dark-bar" : "light-bar"}`}
              >
                <div className="buttons">
                  <div className="close"></div>
                  <div className="minimize"></div>
                  <div className="maximize"></div>
                </div>
                <div
                  className={`title ${darkMode ? "dark-title" : "light-title"}`}
                >
                  3d-Product-Page
                </div>
              </div>
              <div className="window"></div>
            </div>
          </Draggable>

          <div>
            <div className="button-container">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="motion-dev"
              />
            </div>
          </div>
        </div>
      </div>
    </FullpageSection>
  );
};

export default SceneOne;
