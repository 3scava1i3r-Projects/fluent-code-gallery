
import React, { useRef } from 'react';
import { useFrame, GroupProps } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Make sure you have uploaded 'macbook.glb' to your public folder.
const MODEL_PATH = '/macbook.glb';

const LaptopModel = (props: GroupProps) => {
  const group = useRef<THREE.Group>(null!);
  const { scene } = useGLTF(MODEL_PATH);

  // Optional: Add slow rotation
  useFrame((_state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={group} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default LaptopModel;
