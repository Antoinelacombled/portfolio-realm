import "./App.css";
import Header from "./components/Header/Header";
import SceneOne from "./components/SceneOne/SceneOne";
import SceneTwo from "./components/SceneTwo/SceneTwo";
import SceneThree from "./components/SceneThree/SceneThree";
import "./fullpage.min.css";
import Fullpage, { FullPageSections } from "@ap.cx/react-fullpage";
import { useEffect, useState } from "react";
import DarkModeContext from "./store/DarkModeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [slide, setSlide] = useState(0);

  // controler le scroll, if scroll down == +1, if scroll up == -1
  // onScroll / useRef

  function slideCount() {
    setSlide();
  }

  useEffect(() => {
    console.log(slide);
  }, [slide]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className="super-container">
        <Header />
        <Fullpage onChange={(e) => slideCount}>
          <FullPageSections>
            <SceneOne />
            <SceneTwo />
            <SceneThree />
            <SceneThree />
            <SceneThree />
            <SceneThree />
          </FullPageSections>
        </Fullpage>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
