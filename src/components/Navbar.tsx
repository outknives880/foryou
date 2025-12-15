import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/main.css";
import React from "react";

interface NavbarProps {
  toggleMusic: () => void;   // fungsi dari MusicPlayer
  playing: boolean;          // status musik
}

const Navbar: React.FC<NavbarProps> = ({ toggleMusic, playing }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="capsule-wrapper">
      {/* Kapsul navbar */}
      <div className="capsule-nav">
       <div className="capsule-container">
  <Link
    to="/"
    className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
  >
    🏠
  </Link>
  <Link
    to="/birthday"
    className={`nav-item ${location.pathname === "/birthday" ? "active" : ""}`}
  >
    🎂
  </Link>
  <Link
    to="/love"
    className={`nav-item ${location.pathname === "/love" ? "active" : ""}`}
  >
    💌
  </Link>
</div>

        <div className="creator-name">#Zaky</div>
      </div>
    </div>
  );
};

export default Navbar;
