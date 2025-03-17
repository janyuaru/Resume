import React, { useState } from "react";
import Tab from "./Tab";
import "../styles/information.css";

const Information = () => {
  const [content, setContent] = useState("Select a tab to view information");

  return (
    <div className="information" id="information">
      <h2 className="info-topic">Information</h2>
      <p className="info-desc">Get to know more about my education, skills, and projects.</p>
      <Tab setContent={setContent} />
      <div className="info-box">
        <div className="info-content" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default Information;