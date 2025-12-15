// src/components/MusicPlayer.tsx
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface MusicPlayerProps {
  setIsPlaying: (val: boolean) => void; // prop dari App.tsx
  autoPlay: boolean;                    // prop baru dari App.tsx
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ setIsPlaying, autoPlay }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // ✅ Auto-play ketika SplashScreen selesai
  useEffect(() => {
    if (autoPlay && audioRef.current && !playing) {
      audioRef.current.play()
        .then(() => {
          setPlaying(true);
          setIsPlaying(true);
        })
        .catch(() => {
          // autoplay bisa diblok browser → user harus klik tombol
        });
    }
  }, [autoPlay]);
  const navigate = useNavigate();
  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (!playing) {
      try {
        await audioRef.current.play(); // mulai musik
        setPlaying(true);
        setIsPlaying(true);            // kirim status ke App.tsx
      } catch {
        // autoplay blocked → user harus klik tombol
      }
    } else {
      audioRef.current.pause();        // berhenti musik
      setPlaying(false);
      setIsPlaying(false);             // kirim status ke App.tsx
    }
  };

return (
  <div className="music-player">
    {/* Tombol musik */}
    <button className="music-toggle" onClick={toggleMusic}>
      {playing ? "⏸" : "🔊"}
    </button>

    {/* Tombol hadiah spesial */}
    <button className="gift-top-btn" onClick={() => navigate("/hadiah")}>
      🎁
    </button>

    {/* akses file di public/ dengan path root */}
    <audio ref={audioRef} src="/birthday.mp3" loop preload="auto" />
  </div>
);
};

export default MusicPlayer;
