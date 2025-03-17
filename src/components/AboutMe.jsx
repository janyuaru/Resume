import React from "react";
import resume from "../assets/Resume_Jaruporn.pdf";
import profilePic from "../assets/mafuang2.jpg";
import "../styles/about.css";

const AboutMe = () => {
  return (
    <div className="about-me" id="about-me">
      <div className="about-left">
        <h2>About Me</h2>
        <h1>Jaruporn Silarat</h1>
        <p>A third-year Information Technology student passionate
          about programming and web development, seeking to gain
          experience in the IT field, with a strong commitment to
          applying academic knowledge to real-world projects and
          continuously learning new skills</p>
        <button onClick={() => window.open(resume)}>Download Resume</button>
      </div>
      <div className="about-right">
        <img src={profilePic} alt="Jaruporn" />
      </div>
    </div>

  );
};

export default AboutMe;