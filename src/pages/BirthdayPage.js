import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Cake3D from "../components/Cake3D.js";
import "../styles/main.css";
const BirthdayPage = () => {
    const targetDate = new Date("2025-12-20T00:00:00");
    const [countdown, setCountdown] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { className: "birthday-page", children: [_jsx("h1", { className: "title", children: "cake buat ayang hehe" }), _jsx(Cake3D, {}), _jsx("div", { className: "countdown", children: countdown }), _jsx("p", { className: "date", children: "20 Desember 2025 \u2013 tanggal di mana senyumanmu akan menerangi hatiku " })] }));
};
export default BirthdayPage;
