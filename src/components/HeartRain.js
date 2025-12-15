import { jsx as _jsx } from "react/jsx-runtime";
import "../styles/HeartRain.css";
const HeartRain = () => {
    return (_jsx("div", { className: "falling-hearts", children: Array.from({ length: 20 }).map((_, i) => (_jsx("div", { className: `heart heart-${i}`, children: "\uD83D\uDC97" }, i))) }));
};
export default HeartRain;
