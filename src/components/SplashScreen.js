import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "../styles/animations.css";
const SplashScreen = ({ onFinish }) => {
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
    return (_jsxs("div", { className: "splash-container", children: [_jsx("div", { className: "heart-bounce", children: "\uD83D\uDC97" }), progress < 100 ? (_jsxs("div", { className: `dot-counter ${fadeOut ? "fade-out" : ""}`, children: [progress, "%"] })) : (_jsx("button", { className: "ready-btn", onClick: onFinish, children: "lets go!" }))] }));
};
export default SplashScreen;
