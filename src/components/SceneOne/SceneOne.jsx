import "./sceneone.scss";
import { FullpageSection } from "@ap.cx/react-fullpage";
import { useContext, useState, useEffect } from "react";
import DarkModeContext from "../../store/DarkModeContext";
import videoAll3d from "../../assets/3d-website-all.mp4";
import Draggable from "react-draggable";

const SceneOne = ({ projectNameOne }) => {
  const { darkMode } = useContext(DarkModeContext);
  const [windowPosition, setWindowPosition] = useState({ x: -550, y: -320 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        // Position pour les petits écrans
        setWindowPosition({ x: 0, y: 0 });
      } else {
        // Position pour les écrans plus grands
        setWindowPosition({ x: -550, y: -320 });
      }
    };

    // Écouter le changement de taille de l'écran
    window.addEventListener("resize", handleResize);

    // Appeler la fonction au premier rendu du composant
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <FullpageSection style={{ height: "100vh" }}>
      <div className="header-container-scene-one">
        <div className="section one">
          <div className="project-one">
            <div className="marquee-container">
              <div className="marquee">{projectNameOne}</div>
            </div>
          </div>

          <Draggable handle=".title-bar" defaultPosition={windowPosition}>
            <div className="mac-window central-window">
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
                <video
                  src={videoAll3d}
                  autoPlay
                  loop
                  muted
                  className="video-scene-one"
                />
                <div className="overlay">
                  <a
                    href="https://github.com/your-username/your-repo"
                    className="github-link"
                  >
                    Voir le code sur Github
                  </a>
                </div>
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    </FullpageSection>
  );
};

export default SceneOne;
