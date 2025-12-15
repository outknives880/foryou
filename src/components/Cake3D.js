import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
useGLTF.preload("/cake/Cake.glb");
const CakeModel = () => {
    const { scene } = useGLTF("/cake/Cake.glb");
    return _jsx("primitive", { object: scene, scale: 0.6, position: [0, -0.5, 0] });
};
const Cake3D = () => {
    return (_jsx("div", { className: "cake-wrapper", children: _jsxs(Canvas, { camera: { position: [0, 0, 3] }, children: [_jsx("ambientLight", { intensity: 0.5 }), _jsx("directionalLight", { position: [5, 5, 5] }), _jsx(Suspense, { fallback: _jsx("span", { children: "Loading cake..." }), children: _jsx(CakeModel, {}) }), _jsx(OrbitControls, { enableZoom: false, autoRotate: true, autoRotateSpeed: 2 })] }) }));
};
export default Cake3D;
