import './App.css';
import Header from './components/Header/Header';
import SceneOne from './components/SceneOne/SceneOne';
import SceneTwo from './components/SceneTwo/SceneTwo';
import SceneThree from './components/SceneThree/SceneThree';
import './fullpage.min.css';
import Fullpage, { FullPageSections } from '@ap.cx/react-fullpage';
import { useState } from 'react';
import DarkModeContext from './store/DarkModeContext';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
  };

  return (
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
          <div className='super-container'>
              <Header />
              <Fullpage>
                  <FullPageSections>
                      <SceneOne />
                      <SceneTwo />
                      <SceneThree />
                  </FullPageSections>
              </Fullpage>
          </div>
      </DarkModeContext.Provider>
  );
}

export default App;
