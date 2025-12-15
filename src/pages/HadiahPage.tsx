import React, { useState } from "react";
import "../styles/animations.css";

const HadiahPage: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenGift = () => {
    setIsOpened(true);
  };

  return (
    <div className="hadiah-page">
      {!isOpened ? (
        <div className="gift-box-big" onClick={handleOpenGift}>🎁</div>
      ) : (
        <div className="surprise-content">
          <p className="surprise-text">
            ✨TADAAAAAAA✨<br />
            hehe luucuu kan hadiahnya kaya kamu💖<br />
          </p>
          <img src="https://media.tenor.com/dXCpXYXq7IcAAAAm/brown-bear.webp" alt="Kejutan Spesial" className="surprise-image" />
          <button className="gift-close" onClick={() => setIsOpened(false)}>Tutup Kado</button>
        </div>
      )}

      <p className="gift-message">
        ada hadiah nih buat kamu 💖<br />
        mari kita lihaattt
      </p>
    </div>
  );
};

export default HadiahPage;
