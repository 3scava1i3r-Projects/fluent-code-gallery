
import React, { useRef } from 'react';
import { useFrame, GroupProps } from '@react-three/fiber';
import * as THREE from 'three';

const LaptopModel = (props: GroupProps) => {
  const group = useRef<THREE.Group>(null!);

  useFrame((_state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={group} {...props}>
      {/* --- Debug box to ensure scene works --- */}
      {/* <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'hotpink'} />
      </mesh> */}

      {/* Laptop base */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[3, 0.15, 2]} />
        <meshStandardMaterial color={'#444'} />
      </mesh>
      {/* Laptop screen */}
      <mesh rotation={[-1.2, 0, 0]} position={[0, 0.11, -0.9]}>
        <boxGeometry args={[3, 1.8, 0.08]} />
        <meshStandardMaterial color={'#222'} />
      </mesh>
      {/* Screen content (moved forward a bit to prevent z-fighting) */}
      <mesh rotation={[-1.2, 0, 0]} position={[0, 0.13, -0.88]}>
        <planeGeometry args={[2.7, 1.5]} />
        <meshStandardMaterial color={'#66aaff'} emissive={'#3388ff'} emissiveIntensity={0.8} />
      </mesh>
      {/* Optional: add keyboard or touchpad here for more detail */}
    </group>
  );
};

export default LaptopModel;
