import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Monitor, Eye, Folder, User, Settings, Power } from 'lucide-react';
import { useOSStore, WindowId } from '../../store/useOSStore';

export const Taskbar: React.FC = () => {
  const {
    windows,
    activeWindowId,
    focusWindow,
    minimizeWindow,
    isStartMenuOpen,
    toggleStartMenu,
    closeStartMenu,
    openWindow,
    soundEnabled,
    toggleSound,
    cameraMode,
    toggleCameraMode,
  } = useOSStore();

  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const openWindowsList = Object.values(windows).filter((w) => w.isOpen);

  const handleTaskClick = (id: WindowId) => {
    const win = windows[id];
    if (activeWindowId === id && !win.isMinimized) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-9 bg-[#c0c0c0] win-outset flex items-center justify-between px-1 z-50 select-none">
      {/* Start Button & Active Tasks */}
      <div className="flex items-center space-x-1 flex-1 overflow-x-auto h-full py-0.5">
        {/* Start Button */}
        <button
          onClick={toggleStartMenu}
          className={`h-7 px-2.5 flex items-center space-x-1.5 font-bold text-xs ${
            isStartMenuOpen ? 'win-button-pressed bg-[#b0b0b0]' : 'win-button'
          }`}
        >
          <span className="text-base">🪟</span>
          <span className="font-extrabold text-black tracking-wide">Start</span>
        </button>

        <div className="w-0.5 h-6 bg-gray-400 border-r border-white mx-0.5" />

        {/* Task buttons */}
        <div className="flex space-x-1 overflow-x-auto flex-1">
          {openWindowsList.map((win) => {
            const isActive = activeWindowId === win.id && !win.isMinimized;
            return (
              <button
                key={win.id}
                onClick={() => handleTaskClick(win.id)}
                className={`h-7 px-2.5 max-w-[150px] truncate flex items-center space-x-1.5 text-xs text-black font-semibold ${
                  isActive ? 'win-button-pressed bg-[#dfdfdf]' : 'win-button'
                }`}
              >
                <span>{win.icon}</span>
                <span className="truncate">{win.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* System Tray */}
      <div className="win-inset bg-[#c0c0c0] h-7 px-2 flex items-center space-x-2 text-xs text-black flex-shrink-0">
        {/* Camera toggle */}
        <button
          onClick={toggleCameraMode}
          title={cameraMode === 'MONITOR' ? 'Zoom Out to 3D Room' : 'Focus Monitor Screen'}
          className="hover:bg-gray-300 p-0.5 rounded text-blue-900"
        >
          {cameraMode === 'MONITOR' ? (
            <Eye className="w-3.5 h-3.5 text-blue-900" />
          ) : (
            <Monitor className="w-3.5 h-3.5 text-blue-900" />
          )}
        </button>

        {/* Sound toggle */}
        <button
          onClick={toggleSound}
          title={soundEnabled ? 'Mute Sounds' : 'Unmute Sounds'}
          className="hover:bg-gray-300 p-0.5 rounded"
        >
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-green-700" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-red-600" />
          )}
        </button>

        {/* Clock */}
        <span className="font-mono text-[11px] font-bold text-gray-800 ml-1">
          {time}
        </span>
      </div>

      {/* Start Menu Popup */}
      {isStartMenuOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-9 left-0 w-52 win-outset bg-[#c0c0c0] shadow-2xl flex flex-col z-50 text-xs text-black"
        >
          {/* Vertical banner */}
          <div className="flex">
            <div className="w-7 bg-gradient-to-t from-[#000080] to-[#1084d0] flex items-end justify-center pb-2 text-white font-bold tracking-widest uppercase">
              <span className="rotate-[-90deg] whitespace-nowrap origin-bottom-left ml-4 font-mono">
                Windows 98
              </span>
            </div>

            {/* Menu Items */}
            <div className="flex-1 p-1 space-y-0.5">
              <div
                onClick={() => {
                  openWindow('about');
                  closeStartMenu();
                }}
                className="p-1.5 hover:bg-[#000080] hover:text-white flex items-center space-x-2 cursor-pointer font-semibold"
              >
                <span>👤</span>
                <span>About Sumit</span>
              </div>
              <div
                onClick={() => {
                  openWindow('projects');
                  closeStartMenu();
                }}
                className="p-1.5 hover:bg-[#000080] hover:text-white flex items-center space-x-2 cursor-pointer font-semibold"
              >
                <span>📁</span>
                <span>My Projects</span>
              </div>
              <div
                onClick={() => {
                  openWindow('skills');
                  closeStartMenu();
                }}
                className="p-1.5 hover:bg-[#000080] hover:text-white flex items-center space-x-2 cursor-pointer font-semibold"
              >
                <span>⚙️</span>
                <span>Diagnostics & Skills</span>
              </div>
              <div
                onClick={() => {
                  openWindow('resume');
                  closeStartMenu();
                }}
                className="p-1.5 hover:bg-[#000080] hover:text-white flex items-center space-x-2 cursor-pointer font-semibold"
              >
                <span>📄</span>
                <span>Resume (PDF)</span>
              </div>
              <div
                onClick={() => {
                  openWindow('contact');
                  closeStartMenu();
                }}
                className="p-1.5 hover:bg-[#000080] hover:text-white flex items-center space-x-2 cursor-pointer font-semibold"
              >
                <span>✉️</span>
                <span>Contact Sumit</span>
              </div>
              <div
                onClick={() => {
                  openWindow('games');
                  closeStartMenu();
                }}
                className="p-1.5 hover:bg-[#000080] hover:text-white flex items-center space-x-2 cursor-pointer font-semibold"
              >
                <span>💣</span>
                <span>Minesweeper</span>
              </div>

              <div className="border-t border-gray-400 my-1" />

              <div
                onClick={toggleCameraMode}
                className="p-1.5 hover:bg-[#000080] hover:text-white flex items-center space-x-2 cursor-pointer font-semibold"
              >
                <span>🪑</span>
                <span>{cameraMode === 'MONITOR' ? 'Zoom Out to Room' : 'Zoom In to Screen'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
