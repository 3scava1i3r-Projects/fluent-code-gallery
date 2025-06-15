
import { Canvas } from '@react-three/fiber';
import LaptopModel from './LaptopModel';

const LaptopScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <LaptopModel position={[0, 0, 0]} scale={1.2} />
    </Canvas>
  );
};

export default LaptopScene;
