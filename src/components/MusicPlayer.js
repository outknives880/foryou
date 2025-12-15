import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/MusicPlayer.tsx
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const MusicPlayer = ({ setIsPlaying, autoPlay }) => {
    const audioRef = useRef(null);
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
        if (!audioRef.current)
            return;
        if (!playing) {
            try {
                await audioRef.current.play(); // mulai musik
                setPlaying(true);
                setIsPlaying(true); // kirim status ke App.tsx
            }
            catch {
                // autoplay blocked → user harus klik tombol
            }
        }
        else {
            audioRef.current.pause(); // berhenti musik
            setPlaying(false);
            setIsPlaying(false); // kirim status ke App.tsx
        }
    };
    return (_jsxs("div", { className: "music-player", children: [_jsx("button", { className: "music-toggle", onClick: toggleMusic, children: playing ? "⏸" : "🔊" }), _jsx("button", { className: "gift-top-btn", onClick: () => navigate("/hadiah"), children: "\uD83C\uDF81" }), _jsx("audio", { ref: audioRef, src: "/birthday.mp3", loop: true, preload: "auto" })] }));
};
export default MusicPlayer;
