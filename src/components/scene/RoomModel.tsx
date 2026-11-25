import React, { useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useGLTF, useTexture } from '@react-three/drei';
import { useOSStore } from '../../store/useOSStore';
import { soundManager } from '../../utils/audio';

export const RoomModel: React.FC = () => {
  const { setCameraMode } = useOSStore();

  // Load GLB models
  const computerGLTF = useGLTF('/models/Computer/computer_setup.glb');
  const decorGLTF = useGLTF('/models/Decor/decor.glb');
  const envGLTF = useGLTF('/models/World/environment.glb');

  // Load baked textures
  const computerTexture = useTexture('/models/Computer/baked_computer.jpg');
  const decorTexture = useTexture('/models/Decor/baked_decor.jpg');
  const envTexture = useTexture('/models/World/baked_environment.jpg');

  // Configure textures
  useMemo(() => {
    [computerTexture, decorTexture, envTexture].forEach((tex) => {
      tex.flipY = false;
      tex.colorSpace = THREE.SRGBColorSpace;
    });
  }, [computerTexture, decorTexture, envTexture]);

  // Apply baked materials and scale
  const computerScene = useMemo(() => {
    const scene = computerGLTF.scene.clone(true);
    const material = new THREE.MeshBasicMaterial({ map: computerTexture });
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.scale.set(900, 900, 900);
        child.material = material;
      }
    });
    return scene;
  }, [computerGLTF, computerTexture]);

  const decorScene = useMemo(() => {
    const scene = decorGLTF.scene.clone(true);
    const material = new THREE.MeshBasicMaterial({ map: decorTexture });
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.scale.set(900, 900, 900);
        child.material = material;
      }
    });
    return scene;
  }, [decorGLTF, decorTexture]);

  const envScene = useMemo(() => {
    const scene = envGLTF.scene.clone(true);
    const material = new THREE.MeshBasicMaterial({ map: envTexture });
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.scale.set(900, 900, 900);
        child.material = material;
      }
    });
    return scene;
  }, [envGLTF, envTexture]);

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    soundManager.playMouseDown();
    setCameraMode('MONITOR');
  };

  return (
    <group>
      <primitive object={envScene} />
      <primitive object={decorScene} />
      <primitive
        object={computerScene}
        onPointerDown={handlePointerDown}
      />
    </group>
  );
};

useGLTF.preload('/models/Computer/computer_setup.glb');
useGLTF.preload('/models/Decor/decor.glb');
useGLTF.preload('/models/World/environment.glb');
