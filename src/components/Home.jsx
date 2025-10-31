import React from "react";
import "./Home.css";

// Import renamed video from assets
import bgVideo from "../components/assets/bg-video.mp4";

const Home = () => {
  return (
    <div className="home"id="home">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay">
        <h1>WELCOME TO SQUARE ONE</h1>
        <p>We bring your ideas to life with style and innovation.</p>
      </div>
    </div>
  );
};

export default Home;
