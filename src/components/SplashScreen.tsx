import React, { useState, useEffect } from "react";
import "../styles/animations.css";

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true); // mulai fade-out angka
          return 100;
        }
        return prev + 5;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="splash-container">
      {/* Animasi hati bouncing */}
      <div className="heart-bounce">💗</div>

      {/* Angka loading fade-out saat 100% */}
      {progress < 100 ? (
        <div className={`dot-counter ${fadeOut ? "fade-out" : ""}`}>
          {progress}%
        </div>
      ) : (
        <button className="ready-btn" onClick={onFinish}>
          lets go!
        </button>
      )}
    </div>
  );
};

export default SplashScreen;
