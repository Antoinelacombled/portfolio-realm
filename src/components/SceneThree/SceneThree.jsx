import "./scenethree.scss";
import { FullpageSection } from "@ap.cx/react-fullpage";
import { useContext } from "react";
import DarkModeContext from "../../store/DarkModeContext";
import videothree from "../../assets/3Dportfolio.mp4";

const SceneThree = ({ projectNameThree }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <FullpageSection className="header-container-scene-three">
      <div className="section one">
        <div className="project-three">
          <div className="marquee-container-three">
            <div className="marquee-three">{projectNameThree}</div>
          </div>
        </div>

        <div className="mac-window central-window">
          <div className={`title-bar ${darkMode ? "dark-bar" : "light-bar"}`}>
            <div className="buttons">
              <div className="close"></div>
              <div className="minimize"></div>
              <div className="maximize"></div>
            </div>
            <div className={`title ${darkMode ? "dark-title" : "light-title"}`}>
              3d-Product-Page
            </div>
          </div>
          <div className="window">
            <video
              src={videothree}
              autoPlay
              loop
              muted
              playsInline
              className="video-scene-one"
            />
            <div className="overlay">
              <a
                href="https://github.com/Antoinelacombled/e-commerce-immersive"
                className="github-link"
              >
                Voir le code sur Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="arrow"></div>
      </div>
    </FullpageSection>
  );
};

export default SceneThree;
