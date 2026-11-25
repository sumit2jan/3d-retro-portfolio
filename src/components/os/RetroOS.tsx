import React from 'react';
import { useOSStore } from '../../store/useOSStore';
import { Desktop } from './Desktop';
import { WindowFrame } from './WindowFrame';
import { Taskbar } from './Taskbar';

export const RetroOS: React.FC = () => {
  const { windows, closeStartMenu } = useOSStore();

  return (
    <div
      onClick={closeStartMenu}
      className="w-full h-full relative overflow-hidden bg-[#008080] font-sans select-none crt-screen"
      style={{
        width: '1280px',
        height: '1024px',
      }}
    >
      {/* Desktop surface with icons */}
      <Desktop />

      {/* Windows Layer */}
      {Object.values(windows).map((win) => (
        <WindowFrame key={win.id} window={win} />
      ))}

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
};
