import React, { useEffect, useState } from "react";
import "./Hero.css";
import Nav from "../Nav/Nav";

const Hero = () => {
  const words = [
    "Innovation",
    "Ecommerce",
    "Creativity",
    "Ambition",
    "Branding",
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [words.length]);

  return (
    <div className="background-container">
      <Nav />
      <div className="overlay-text">
        <h2 className="company-name">Voxizo Solution</h2>
        <div className="dynamic-text-container">
          <h1>
            RAISE THE BAR WITH NEXAS
            <br/>
            <span className="dynamic-word company-name">{words[currentWord]}</span>
          </h1>
        </div>
        <p className="description">
          An agency specialized in e-marketing. We offer a range of high quality
          services. Our strength lies in the presence of a special team in the
          African market, and another team in the Gulf and Moroccan markets.
        </p>
      </div>
    </div>
  );
};

export default Hero;
