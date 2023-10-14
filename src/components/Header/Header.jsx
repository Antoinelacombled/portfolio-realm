import React, { useState, useEffect } from 'react';
import './header.scss'
import Draggable from 'react-draggable';


const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    };

    return (

        <div className='sup-header-container'>


            <div className="header-content">
                <div className="location">
                    PARIS, FR -
                </div>
                <div className="current-time">
                    {currentTime.toLocaleTimeString('fr-FR', timeOptions)}
                </div>
            </div>

            <div className='toolbar-header'>
                <div className='menu'></div>
                <div className="gradient-bar"></div>
                <div className='smiley'></div>
            </div>


        </div>
    );
};

export default Header;
