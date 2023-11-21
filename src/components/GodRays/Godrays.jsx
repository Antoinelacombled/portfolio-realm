import React, { useState, useEffect } from "react";
import "./Godrays.css";
import { Link } from "react-router-dom";

function Godrays() {
  const [showSecondText, setShowSecondText] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowSecondText(true);
      const timer2 = setTimeout(() => {
        setShowButton(true);
      }, 1000); // Le bouton apparaîtra 2 secondes après le second texte
      return () => clearTimeout(timer2);
    }, 2000); // Le second texte apparaît 2 secondes après le premier
    return () => clearTimeout(timer1);
  }, []);

  return (
    <main className="dark">
      <div className="relative flex flex-col h-[100vh] items-center justify-center bg-black transition-bg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="jumbo absolute -inset-[10px] opacity-60"></div>
        </div>
        <div className="main-content">
          <h1 className="text-5xl font-bold text-white opacity-95 typing-effect">
            Bonjour, je suis Antoine Lacombled ☝️
          </h1>
          {showSecondText && (
            <p className="text-xl text-white typing-effect-second">
              Je suis développeur front-end
            </p>
          )}
          {showButton && (
            <Link to="/portfolio">
              <button className="custom-button mt-8 px-5 py-2 rounded-full text-black bg-white font-bold button-styled">
                Découvrir mes réalisations
              </button>
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

export default Godrays;
