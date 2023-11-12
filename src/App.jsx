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
  //state INTEGER numéro de la slide
  const [slide, setSlide] = useState(0);
  //state scroll position
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);

  console.log(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > prevScrollPosition) {
        //scrolling down
        setSlide((prevSlide) => prevSlide + 1);
      } else if (currentScrollPosition < prevScrollPosition) {
        //scrolling up
        setSlide((prevSlide) => Math.max(0, prevSlide - 1));
      }
      setPrevScrollPosition(currentScrollPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  //console.log

  useEffect(() => {
    console.log(`slide state = ${slide}`);
  }, [slide]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className="super-container">
        <Header />
        <Fullpage>
          <FullPageSections>
            <SceneOne projectNameOne={"'3D PRODUCT PAGE'"} />
            <SceneTwo projectNameTwo={"'POKER SOLVER'"} />
            <SceneThree projectNameThree={"'E-COMMERCE IMMERSIF'"} />
          </FullPageSections>
        </Fullpage>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
