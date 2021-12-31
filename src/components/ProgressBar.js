//components/ProgressBar.js

import React from "react";

function ProgressBar({ skill, skillLvl }) {
  return (
    <div className="container">
      <div className="skill">{skill + " - " + skillLvl} </div>
      <div className="skill__progress-bar">
        <div
          className="skill__progress-bar__content"
          style={{ width: skillLvl }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
