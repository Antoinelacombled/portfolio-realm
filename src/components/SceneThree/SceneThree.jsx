import './scenethree.scss';
import { FullpageSection } from '@ap.cx/react-fullpage';
import Draggable from 'react-draggable';

const SceneThree = () => {


    return (
        <FullpageSection style={{ height: '100vh' }}>
            <div className="sup-container-scene-three ">
                <div className="section one">
                    <div className="content">
                    </div>

                    <Draggable
                        handle=".title-bar"
                        defaultPosition={{ x: 200, y: 200 }}>
                        <div className="mac-window small">
                            <div className="title-bar">
                                <div className="buttons">
                                    <div className="close"></div>
                                    <div className="minimize"></div>
                                    <div className="maximize"></div>
                                </div>
                                <div className="title">
                                    Mac Window Modal
                                </div>
                            </div>
                            <div className="window">
                            </div>
                        </div>
                    </Draggable>
                    <Draggable handle=".title-bar"
                        defaultPosition={{ x: -300, y: -130 }}>
                        <div className="mac-window medium">
                            <div className="title-bar">
                                <div className="buttons">
                                    <div className="close"></div>
                                    <div className="minimize"></div>
                                    <div className="maximize"></div>
                                </div>
                                <div className="title">
                                    Mac Window Modal
                                </div>
                            </div>
                            <div className="window">
                            </div>
                        </div>
                    </Draggable>
                    <Draggable handle=".title-bar"
                        defaultPosition={{ x: -130, y: -30 }}>
                        <div className="mac-window big" >
                            <div className="title-bar">
                                <div className="buttons">
                                    <div className="close"></div>
                                    <div className="minimize"></div>
                                    <div className="maximize"></div>
                                </div>
                                <div className="title">
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

export default SceneThree;
