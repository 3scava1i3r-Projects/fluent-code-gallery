
import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

const Model = () => {
  const obj = useLoader(OBJLoader, '/mac2.obj');
  
  // Since .obj files don't have materials, we'll apply one to make it look good.
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: new THREE.Color('#d1d5db'), // A nice silver color
        metalness: 0.8,
        roughness: 0.4,
      });
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={obj} scale={0.1} />;
};

const LaptopModel = () => {
  return (
    <div className="rounded-3xl aspect-[4/5] w-full overflow-hidden border border-border/60">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} adjustCamera>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default LaptopModel;
