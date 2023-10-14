import './sceneone.scss';
import { FullpageSection } from '@ap.cx/react-fullpage';

import Draggable from 'react-draggable';

const SceneOne = () => {
    return (
        <FullpageSection style={{ height: '100vh' }}>
            <div className="header-container-scene-one">
                <div className="section one">
                    <div className="content">
                    </div>

                    <Draggable handle=".title-bar">
                        <div className="mac-window active">
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
                    <Draggable handle=".title-bar">
                        <div className="mac-window active">
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

export default SceneOne;
