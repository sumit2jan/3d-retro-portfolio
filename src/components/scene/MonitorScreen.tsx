import React from 'react';
import { Html } from '@react-three/drei';
import { RetroOS } from '../os/RetroOS';

export const MonitorScreen: React.FC = () => {
  return (
    <group position={[4, 960, 392]} rotation={[-3 * (Math.PI / 180), 0, 0]}>
      {/* Embedded React OS scaled to fit snugly inside the monitor bezel with zero margin gap */}
      <Html
        transform
        distanceFactor={400}
        position={[0, 0, 0]}
        scale={[0.942, 0.932, 1]}
        style={{
          width: '1280px',
          height: '1024px',
          overflow: 'hidden',
          borderRadius: '16px',
          boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.6)',
        }}
      >
        <RetroOS />
      </Html>
    </group>
  );
};
