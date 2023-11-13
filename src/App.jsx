import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import SceneOne from "./components/SceneOne/SceneOne";
import SceneTwo from "./components/SceneTwo/SceneTwo";
import SceneThree from "./components/SceneThree/SceneThree";
import Godrays from "./components/GodRays/Godrays";
import DarkModeContext from "./store/DarkModeContext";
import "./App.css";
import "./fullpage.min.css";
import Fullpage, { FullPageSections } from "@ap.cx/react-fullpage";

const PortfolioScenes = () => (
  <Fullpage>
    <FullPageSections>
      <SceneOne projectNameOne={"'3D PRODUCT PAGE'"} />
      <SceneTwo projectNameTwo={"'POKER SOLVER'"} />
      <SceneThree projectNameThree={"'E-COMMERCE IMMERSIF'"} />
    </FullPageSections>
  </Fullpage>
);

const MainContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Godrays />} />
        <Route path="/portfolio" element={<PortfolioScenes />} />
      </Routes>
    </>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Router>
        <div className="super-container">
          <MainContent />
        </div>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
