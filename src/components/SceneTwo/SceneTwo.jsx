import './scenetwo.scss';
import { FullpageSection } from '@ap.cx/react-fullpage';
import { useContext } from 'react';
import DarkModeContext from '../../store/DarkModeContext';

import Draggable from 'react-draggable';

const SceneTwo = () => {


 const { darkMode, toggleDarkMode } = useContext(DarkModeContext);



    return (
        <FullpageSection style={{ height: '100vh' }}>
            <div className="sup-container-scene-two">
                <div className="section one">
                    <div className="content">
                    </div>

                    <Draggable
                        handle=".title-bar"
                        defaultPosition={{ x: 170, y: 110 }}>
                        <div className="mac-window medium">
                            <div  className={`title-bar ${darkMode ? 'dark-bar' : 'light-bar'}`}>
                                <div className="buttons">
                                    <div className="close"></div>
                                    <div className="minimize"></div>
                                    <div className="maximize"></div>
                                </div>
                                <div className={`title ${darkMode ? 'dark-title' : 'light-title'}`}>
                                    Mac Window Modal
                                </div>
                            </div>
                            <div className="window">
                            </div>
                        </div>
                    </Draggable>
                    <Draggable handle=".title-bar"
                        defaultPosition={{ x: -150, y: -170 }}>
                        <div className="mac-window small">
                            <div  className={`title-bar ${darkMode ? 'dark-bar' : 'light-bar'}`}>
                                <div className="buttons">
                                    <div className="close"></div>
                                    <div className="minimize"></div>
                                    <div className="maximize"></div>
                                </div>
                                <div className={`title ${darkMode ? 'dark-title' : 'light-title'}`}>
                                    Mac Window Modal
                                </div>
                            </div>
                            <div className="window">
                            </div>
                        </div>
                    </Draggable>
                    <Draggable handle=".title-bar"
                        defaultPosition={{ x: -200, y: 50 }}>
                        <div className="mac-window big">
                            <div  className={`title-bar ${darkMode ? 'dark-bar' : 'light-bar'}`}>
                                <div className="buttons">
                                    <div className="close"></div>
                                    <div className="minimize"></div>
                                    <div className="maximize"></div>
                                </div>
                                <div className={`title ${darkMode ? 'dark-title' : 'light-title'}`}>
                                    Mac Window Modal
                                </div>
                            </div>
                            <div className="window">
                            </div>
                        </div>
                    </Draggable>


                </div>
            </div>
        </FullpageSection>
    );
};


export default SceneTwo;
