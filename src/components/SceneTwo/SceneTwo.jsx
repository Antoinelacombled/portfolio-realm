import "./scenetwo.scss";
import { FullpageSection } from "@ap.cx/react-fullpage";
import { useContext } from "react";
import DarkModeContext from "../../store/DarkModeContext";
import videoAll3d from "../../assets/3d-website-all.mp4";
import videodisney from "../../assets/Sequencedisney.mp4";

const SceneTwo = ({ projectNameTwo }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <FullpageSection className="header-container-scene-two">
      <div className="section one">
        <div className="project-two">
          <div className="marquee-container">
            <div className="marquee">{projectNameTwo}</div>
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
              src={videodisney}
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
      </div>
      <div className="scroll-indicator">
        <div className="arrow"></div>
      </div>
    </FullpageSection>
  );
};

export default SceneTwo;
