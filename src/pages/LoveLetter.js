import { useState } from "react";
import "../styles/gallery.css";

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleLetter = () => setIsOpen(!isOpen);

  // Array gambar tanpa "public/"
  const images = ["galery/foto1.jpg", "galery/foto2.jpg", "galery/foto3.jpg"];

  return (
    <div className="gallery-section">
      <h2 className="section-title">Gallery kita</h2>

      <div className="memory-grid">
        {images.map((src, index) => (
          <div className="kenangan-box" key={index}>
            <div className="love-frame">❤️</div>
            {/* src akan jadi /galery/foto1.jpg */}
            <img src={`/${src}`} alt={`Kenangan ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="letter-wrapper">
        {!isOpen ? (
          <div className="envelope-icon" onClick={toggleLetter}>
            <div className="glow-circle">
              <div className="envelope-body">
                <div className="heart-icon">💖</div>
              </div>
            </div>
            <p className="click-hint">Klik untuk membuka surat </p>
          </div>
        ) : (
          <div className="paper open">
            <p className="love-letter">
              "Di hari spesialmu, aku nggak cuma bersyukur karena kamu lahir—
              aku bersyukur karena semesta mempertemukan kita. Kamu bukan cuma
              cinta, kamu rumahnya hatiku." 💖
              <br />
              <br />
              #dari calon suamimu nanti 😉
            </p>
            <button className="close-button" onClick={toggleLetter}>
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveLetter;
/