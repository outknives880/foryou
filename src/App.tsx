import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import MusicPlayer from "./components/MusicPlayer.js";
import HeartRain from "./components/HeartRain.js";
import SplashScreen from "./components/SplashScreen.js";
import Navbar from "./components/Navbar.js";

// Pages
import Home from "./pages/Home.js";
import BirthdayPage from "./pages/BirthdayPage.js";
import LoveLetter from "./pages/LoveLetter.js";
import HadiahPage from "./pages/HadiahPage.js";

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen
          onFinish={() => {
            setShowSplash(false);
            setAutoPlay(true); // ✅ musik langsung nyala setelah splash
          }}
        />
      ) : (
        <div className="app-container">
          {/* 🎵 MusicPlayer global */}
          <MusicPlayer setIsPlaying={setIsPlaying} autoPlay={autoPlay} />

          {/* 📄 Routing halaman */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/birthday" element={<BirthdayPage />} />
            <Route path="/love" element={<LoveLetter />} />
            <Route path="/hadiah" element={<HadiahPage />} />
          </Routes>

          {/* 💖 Efek hati muncul hanya saat musik ON */}
          {isPlaying && (
            <div className="heart-container">
              <HeartRain />
            </div>
          )}

          {/* 📌 Navbar global */}
          <Navbar toggleMusic={function (): void {
              throw new Error("Function not implemented.");
            } } playing={false} />
        </div>
      )}
    </Router>
  );
};

export default App;
