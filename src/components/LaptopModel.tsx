
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const LaptopModel = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>(null!);

  useFrame((_state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.75, 0]}>
        {/* Base */}
        <mesh>
          <boxGeometry args={[3, 0.1, 2]} />
          <meshStandardMaterial color={'#444444'} />
        </mesh>
        {/* Screen */}
        <mesh rotation={[1.3, 0, 0]} position={[0, 0.05, -0.9]}>
          <boxGeometry args={[3, 1.8, 0.1]} />
          <meshStandardMaterial color={'#222222'} />
        </mesh>
         {/* Screen Content */}
         <mesh rotation={[1.3, 0, 0]} position={[0, 0.05, -0.89]}>
          <planeGeometry args={[2.8, 1.6]} />
          <meshStandardMaterial color={'#66aaff'} emissive={'#3388ff'} emissiveIntensity={1} />
        </mesh>
      </group>
    </group>
  );
};

export default LaptopModel;
