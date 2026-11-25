import React, { useEffect } from 'react';
import { SceneCanvas } from './components/scene/SceneCanvas';
import { soundManager } from './utils/audio';

export const App: React.FC = () => {
  useEffect(() => {
    // Play startup chime on first user click anywhere in the window
    const handleFirstInteraction = () => {
      soundManager.playStartup();
      window.removeEventListener('pointerdown', handleFirstInteraction);
    };

    window.addEventListener('pointerdown', handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
    };
  }, []);

  return <SceneCanvas />;
};

export default App;
