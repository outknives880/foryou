import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "../styles/animations.css";
const HadiahPage = () => {
    const [isOpened, setIsOpened] = useState(false);
    const handleOpenGift = () => {
        setIsOpened(true);
    };
    return (_jsxs("div", { className: "hadiah-page", children: [!isOpened ? (_jsx("div", { className: "gift-box-big", onClick: handleOpenGift, children: "\uD83C\uDF81" })) : (_jsxs("div", { className: "surprise-content", children: [_jsxs("p", { className: "surprise-text", children: ["\u2728TADAAAAAAA\u2728", _jsx("br", {}), "hehe luucuu kan hadiahnya kaya kamu\uD83D\uDC96", _jsx("br", {})] }), _jsx("img", { src: "https://media.tenor.com/dXCpXYXq7IcAAAAm/brown-bear.webp", alt: "Kejutan Spesial", className: "surprise-image" }), _jsx("button", { className: "gift-close", onClick: () => setIsOpened(false), children: "Tutup Kado" })] })), _jsxs("p", { className: "gift-message", children: ["ada hadiah nih buat kamu \uD83D\uDC96", _jsx("br", {}), "mari kita lihaattt"] })] }));
};
export default HadiahPage;
