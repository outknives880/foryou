import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
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
const App = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false);
    return (_jsx(Router, { children: showSplash ? (_jsx(SplashScreen, { onFinish: () => {
                setShowSplash(false);
                setAutoPlay(true); // ✅ musik langsung nyala setelah splash
            } })) : (_jsxs("div", { className: "app-container", children: [_jsx(MusicPlayer, { setIsPlaying: setIsPlaying, autoPlay: autoPlay }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/birthday", element: _jsx(BirthdayPage, {}) }), _jsx(Route, { path: "/love", element: _jsx(LoveLetter, {}) }), _jsx(Route, { path: "/hadiah", element: _jsx(HadiahPage, {}) })] }), isPlaying && (_jsx("div", { className: "heart-container", children: _jsx(HeartRain, {}) })), _jsx(Navbar, { toggleMusic: function () {
                        throw new Error("Function not implemented.");
                    }, playing: false })] })) }));
};
export default App;
