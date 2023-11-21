import "./Scenefour.scss";
import { FullpageSection } from "@ap.cx/react-fullpage";
import { useContext } from "react";
import DarkModeContext from "../../store/DarkModeContext";
import composantsvideo from "../../assets/sequencecomposants.mp4";

const SceneFour = ({ projectNameFour }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <FullpageSection className="header-container-scene-four">
      <div className="section one">
        <div className="project-four">
          <div className="marquee-container">
            <div className="marquee">{projectNameFour}</div>
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
              src={composantsvideo}
              autoPlay
              loop
              muted
              playsInline
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
      </div>
    </FullpageSection>
  );
};

export default SceneFour;
