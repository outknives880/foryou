import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

useGLTF.preload("/cake/Cake.glb");

const CakeModel: React.FC = () => {
  const { scene } = useGLTF("/cake/Cake.glb");
  return <primitive object={scene} scale={0.6} position={[0, -0.5, 0]} />;
};

const Cake3D: React.FC = () => {
  return (
    <div className="cake-wrapper">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={<span>Loading cake...</span>}>
          <CakeModel />
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default Cake3D;
