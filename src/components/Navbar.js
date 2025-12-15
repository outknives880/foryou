import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/main.css";
const Navbar = ({ toggleMusic, playing }) => {
    const location = useLocation();
    const navigate = useNavigate();
    return (_jsx("div", { className: "capsule-wrapper", children: _jsxs("div", { className: "capsule-nav", children: [_jsxs("div", { className: "capsule-container", children: [_jsx(Link, { to: "/", className: `nav-item ${location.pathname === "/" ? "active" : ""}`, children: "\uD83C\uDFE0" }), _jsx(Link, { to: "/birthday", className: `nav-item ${location.pathname === "/birthday" ? "active" : ""}`, children: "\uD83C\uDF82" }), _jsx(Link, { to: "/love", className: `nav-item ${location.pathname === "/love" ? "active" : ""}`, children: "\uD83D\uDC8C" })] }), _jsx("div", { className: "creator-name", children: "#Zaky" })] }) }));
};
export default Navbar;
