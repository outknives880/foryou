import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../styles/Gallery.css";
const LoveLetter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleLetter = () => {
        setIsOpen(!isOpen);
    };
    return (_jsxs("div", { className: "gallery-section", children: [_jsx("h2", { className: "section-title", children: "Gallery kita" }), _jsx("div", { className: "memory-grid", children: ["public/galery/foto1.jpg", "public/galery/foto2.jpg", "public/galery/foto3.jpg"].map((src, index) => (_jsxs("div", { className: "kenangan-box", children: [_jsx("div", { className: "love-frame", children: "\u2764\uFE0F" }), _jsx("img", { src: `/${src}`, alt: `Kenangan ${index + 1}` })] }, index))) }), _jsx("div", { className: "letter-wrapper", children: !isOpen ? (_jsxs("div", { className: "envelope-icon", onClick: toggleLetter, children: [_jsx("div", { className: "glow-circle", children: _jsx("div", { className: "envelope-body", children: _jsx("div", { className: "heart-icon", children: "\uD83D\uDC96" }) }) }), _jsx("p", { className: "click-hint", children: "Klik untuk membuka surat " })] })) : (_jsxs("div", { className: "paper open", children: [_jsxs("p", { className: "love-letter", children: ["\"Di hari spesialmu, aku nggak cuma bersyukur karena kamu lahir\u2014aku bersyukur karena semesta mempertemukan kita. Kamu bukan cuma cinta, kamu rumahnya hatiku.\"\uD83D\uDC96", _jsx("br", {}), _jsx("br", {}), "#dari calon suamimu nanti \uD83D\uDE09"] }), _jsx("button", { className: "close-button", onClick: toggleLetter, children: "X" })] })) })] }));
};
export default LoveLetter;
