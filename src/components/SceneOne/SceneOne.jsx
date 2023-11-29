import "./sceneone.scss";
import { FullpageSection } from "@ap.cx/react-fullpage";
import { useContext } from "react";
import DarkModeContext from "../../store/DarkModeContext";
import videoAll3d from "../../assets/Séquence_CYBERFIGHTER.mp4";

import NoteButton from "../NoteButton/NoteButton";

const SceneOne = ({ projectNameOne }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <FullpageSection className="header-container-scene-one">
      <NoteButton
        content={
          <p>
            Je conçois l'ensemble des designs de mes projets. J'utilise ReactJS,
            Tailwind, Sass, Jquery, GraphQL, SQL, ThreeJS, WebGL et maitrise de
            nombreux logiciels tel que Photoshop, Illustrator, Figma ou encore
            Unreal Engine.
          </p>
        }
      />
      <div className="section one">
        <div className="project-one">
          <div className="marquee-container">
            <div className="marquee">{projectNameOne}</div>
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
              CYBERFIGHTER - 3D
            </div>
          </div>
          <div className="window">
            <video
              src={videoAll3d}
              autoPlay
              loop
              muted
              playsInline
              className="video-scene-one"
            />
            <div className="overlay">
              <a
                href="https://github.com/Antoinelacombled/3D-project"
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

export default SceneOne;
