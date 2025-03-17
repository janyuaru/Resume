import React, { useState } from "react";
import "../styles/tab.css";

const Tab = ({ setContent }) => {
  const [activeTab, setActiveTab] = useState(""); 

  const handleClick = (type) => {
    setActiveTab(type); 
    const info = {
      contact: `
        <p><strong>Telephone: </strong>098-987-5124</p>
        <p><strong>Email: </strong>silarat_j@silpakorn.edu</p>
        <p><strong>Github: </strong><a href="https://github.com/janyuaru" target="_blank">github.com/janyuaru</a></p>
        <p><strong>Address: </strong>6425 Phetcharat Dormitory 6, Phra Pathom Chedi Subdistrict, Mueang Nakhon Pathom District, Nakhon Pathom, 73000</p>
        <br>
        <p><strong>References</strong></p>
        <p>Dr.Sajjapporn Waijanya</p>
        <p>Adviser</p>
        <p>Email: waijanya_s@silpakorn.edu, sajjaporn.w@gmail.com</p>
      `,
      education: `
        <p><strong>Silpakorn University (Sanamchandra palace campus) </strong></p>
        <p> Bachelor of Science (Information Technology)</p>
        <p>GPA: 3.20 (5 Semester)</p>
        <p>2022 - Present</p>
      `,
      skills: `
        <p><strong>Web Development: </strong> HTML, CSS, Javascript, React, TailwindCSS, Golang</p>
        <p><strong>Programming Languages: </strong>C, Java, Python</p>
        <p><strong>Database Management: </strong> MySQL, Oracle, PostgresSQL</p>
        <p><strong>Tools: </strong>Figma, WordPress</p>
        <p><strong>Other Skills: </strong>Team Collaboration, Time management, Adaptability, Lifelong Learning</p>
      `,
      termprojects: `
        <p><strong> Client Side & Server Side Web Programming </strong></p>
        <p> DIY product-selling web application</p>
        <p>Used React for the client-side, Golang for the server-side, and implemented database preparation to ensure seamless functionality.</p>
        <br>
        <p><strong> Business Information Systems & System Analysis and Design</strong></p>
        <p> Performance Appraisal System (Human Resource)</p>
        <p>Collected data and analyzed the current system, gathered user requirements, and developed a new system using React and Golang.</p>
        <br>
        <p><strong> Human Computer Interaction and User Experience Design</strong></p>
        <p> Design UX/UI for SU Bus Mobile Application</p>
        <p>Applied knowledge from user experience courses to design and develop user-friendly interfaces.</p>
        <p>Project Design: <a href="https://www.figma.com/proto/RRKfccl0gkgVavfD7rodWr/" target="_blank" style="color: blue; text-decoration: underline;">SU-BUS (View in Figma)</a></p>
      `,
      activities: `
        <p>Teacher Assistant Computer Programming Skill I (C) </p>
        <p>(December 2024 - Present)</p>
        <br>
        <p>Teacher Assistant Web Technology (HTML, CSS) </p>
        <p>(December 2023 - March 2024)</p>
      `,
    };
    setContent(info[type]);
  };

  return (
    <div className="tabs">
      <button 
        className={`tab-btn ${activeTab === "contact" ? "active" : ""}`}
        onClick={() => handleClick("contact")}
      >
        Contact
      </button>
      <button 
        className={`tab-btn ${activeTab === "education" ? "active" : ""}`}
        onClick={() => handleClick("education")}
      >
        Education
      </button>
      <button 
        className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
        onClick={() => handleClick("skills")}
      >
        Skills
      </button>
      <button 
        className={`tab-btn ${activeTab === "termprojects" ? "active" : ""}`}
        onClick={() => handleClick("termprojects")}
      >
        Term Project
      </button>
      <button 
        className={`tab-btn ${activeTab === "activities" ? "active" : ""}`}
        onClick={() => handleClick("activities")}
      >
        Activities
      </button>
    </div>
  );
};

export default Tab;
