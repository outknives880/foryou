import React from "react";
import "../styles/HeartRain.css";

const HeartRain: React.FC = () => {
  return (
    <div className="falling-hearts">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className={`heart heart-${i}`}>💗</div>
      ))}
    </div>
  );
};

export default HeartRain;
