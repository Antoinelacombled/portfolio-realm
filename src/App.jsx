import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SceneOne from './components/SceneOne/SceneOne';
import SceneTwo from './components/SceneTwo/SceneTwo';
import SceneThree from './components/SceneThree/SceneThree';

import './fullpage.min.css';
import Fullpage, { FullPageSections } from '@ap.cx/react-fullpage';
import Draggable from 'react-draggable';


function App() {
  return (

    <div className='super-container'>
<Header />
      {/* <Draggable><div>glissez moi </div></Draggable> */}
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
