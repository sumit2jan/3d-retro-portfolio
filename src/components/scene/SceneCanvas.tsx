import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { RoomModel } from './RoomModel';
import { MonitorScreen } from './MonitorScreen';
import { CameraRig } from './CameraRig';
import { useOSStore } from '../../store/useOSStore';
import { Monitor, Volume2, VolumeX, Eye, Sparkles } from 'lucide-react';

const LoadingFallback: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050505] text-white z-50 font-mono">
      <div className="w-64 win-outset bg-[#c0c0c0] p-4 text-black text-center shadow-2xl">
        <div className="text-sm font-bold text-[#000080] mb-2 flex items-center justify-center">
          <Sparkles className="w-4 h-4 mr-1 text-amber-500" />
          BOOTING HEFFERNAN-OS
        </div>
        <div className="h-4 win-inset bg-gray-200 p-0.5 mb-2 overflow-hidden">
          <div className="h-full bg-blue-700 animate-pulse w-3/4"></div>
        </div>
        <p className="text-xs text-gray-700">Loading 3D Meshes & Textures...</p>
      </div>
    </div>
  );
};

export const SceneCanvas: React.FC = () => {
  const { cameraMode, toggleCameraMode, soundEnabled, toggleSound } = useOSStore();

  return (
    <div className="relative w-full h-full overflow-hidden bg-black select-none">
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{
            position: [0, 1500, 4600],
            fov: 45,
            near: 10,
            far: 50000,
          }}
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full"
        >
          {/* Lighting */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[2000, 4000, 3000]} intensity={1.5} />
          <pointLight position={[0, 1500, 1000]} intensity={0.8} />

          {/* 3D Meshes and Camera */}
          <RoomModel />
          <MonitorScreen />
          <CameraRig />
        </Canvas>
      </Suspense>

      {/* Floating HUD Controls */}
      <div className="absolute top-4 left-4 z-40 flex items-center space-x-2">
        <div className="win-outset bg-[#c0c0c0]/95 backdrop-blur px-3 py-1.5 flex items-center space-x-2 text-black text-xs font-bold shadow-lg">
          <span className="text-sm">💻</span>
          <span className="text-[#000080]">SUMIT SINGH</span>
          <span className="text-gray-400 font-normal">|</span>
          <span className="text-gray-700 font-normal">3D PORTFOLIO</span>
        </div>

        <button
          onClick={toggleCameraMode}
          className="win-button px-3 py-1.5 flex items-center space-x-1.5 text-xs font-bold text-black hover:bg-gray-200 shadow-lg"
          title="Toggle Monitor Focus / Room Overview"
        >
          {cameraMode === 'MONITOR' ? (
            <>
              <Eye className="w-3.5 h-3.5 text-blue-900" />
              <span>Step Back (Room View)</span>
            </>
          ) : (
            <>
              <Monitor className="w-3.5 h-3.5 text-blue-900" />
              <span>Zoom to Computer</span>
            </>
          )}
        </button>

        <button
          onClick={toggleSound}
          className="win-button px-2.5 py-1.5 flex items-center text-xs font-bold text-black hover:bg-gray-200 shadow-lg"
          title={soundEnabled ? 'Mute Audio' : 'Enable Audio'}
        >
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-green-700" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-red-600" />
          )}
        </button>
      </div>

      {/* Helper prompt when in room mode */}
      {cameraMode === 'ROOM' && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-none animate-bounce">
          <div className="win-outset bg-[#c0c0c0]/90 px-4 py-1.5 text-xs text-black font-bold shadow-xl border border-gray-400">
            👉 Click on the Computer Screen or "Zoom to Computer" button to enter the OS
          </div>
        </div>
      )}
    </div>
  );
};
