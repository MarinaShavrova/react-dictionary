import React from "react";
import "../../index.css";
import HeaderVideo from "../images/video.mp4";
import Video from "../Video/Video";
import "../../index.css";

const Header = () => {
  return (
    <section className="header">
      <header className="header">
        <h1 className="header-h1">Welcome Dictionary App</h1>
        <h3 className="header-h3">The best way to explore the world</h3>
      </header>
      <Video type={HeaderVideo}> </Video>
    </section>
  );
};

export default Header;
