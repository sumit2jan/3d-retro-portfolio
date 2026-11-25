import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useOSStore } from '../../store/useOSStore';

const DESK_POS = new THREE.Vector3(0, 1500, 4600);
const DESK_FOCAL = new THREE.Vector3(0, 960, 0);

const MONITOR_POS = new THREE.Vector3(0, 960, 2200);
const MONITOR_FOCAL = new THREE.Vector3(0, 960, 0);

export const CameraRig: React.FC = () => {
  const { cameraMode } = useOSStore();
  const { camera, pointer } = useThree();

  const currentFocal = useRef(new THREE.Vector3().copy(DESK_FOCAL));
  const targetPos = useRef(new THREE.Vector3().copy(DESK_POS));
  const targetFocal = useRef(new THREE.Vector3().copy(DESK_FOCAL));

  useFrame((_, delta) => {
    const lerpSpeed = Math.min(delta * 4, 0.1);

    if (cameraMode === 'MONITOR') {
      targetPos.current.copy(MONITOR_POS);
      targetFocal.current.copy(MONITOR_FOCAL);
    } else {
      // Room overview with subtle responsive parallax
      targetPos.current.set(
        DESK_POS.x + pointer.x * 250,
        DESK_POS.y + pointer.y * 150,
        DESK_POS.z
      );
      targetFocal.current.set(
        DESK_FOCAL.x + pointer.x * 120,
        DESK_FOCAL.y + pointer.y * 80,
        DESK_FOCAL.z
      );
    }

    camera.position.lerp(targetPos.current, lerpSpeed);
    currentFocal.current.lerp(targetFocal.current, lerpSpeed);
    camera.lookAt(currentFocal.current);
  });

  return null;
};
