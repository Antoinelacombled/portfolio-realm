import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SceneOne from './components/SceneOne/SceneOne';
import SceneTwo from './components/SceneTwo/SceneTwo';
import SceneThree from './components/SceneThree/SceneThree';
import './fullpage.min.css';
import Fullpage, { FullPageSections } from '@ap.cx/react-fullpage';
import { useState } from 'react';



function App() {

  const [currentSection, setCurrentSection] = useState(1);


  return (

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
  )

}

export default App;
