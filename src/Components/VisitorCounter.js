import React, { useState } from "react";
import "../assest/css/indexx.css";
const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(0);
  return (
    <div className="buttonContainer">
      <p>
        <strong>{visitors} Visitors</strong>
      </p>
      <button className="button" onClick={() => setVisitors(visitors + 1)}>
        Visited
      </button>
    </div>
  );
};

export default VisitorCounter;
