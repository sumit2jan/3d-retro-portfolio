import React, { useRef, useState, useEffect } from 'react';
import { Minus, Square, X } from 'lucide-react';
import { WindowState, useOSStore } from '../../store/useOSStore';
import { AboutApp } from '../apps/AboutApp';
import { ProjectsApp } from '../apps/ProjectsApp';
import { SkillsApp } from '../apps/SkillsApp';
import { ResumeApp } from '../apps/ResumeApp';
import { ContactApp } from '../apps/ContactApp';
import { NotepadApp } from '../apps/NotepadApp';
import { MediaPlayerApp } from '../apps/MediaPlayerApp';
import { GamesApp } from '../apps/GamesApp';

interface WindowFrameProps {
  window: WindowState;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({ window: win }) => {
  const {
    activeWindowId,
    focusWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    updateWindowPosition,
  } = useOSStore();

  const isFocused = activeWindowId === win.id;
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDownHeader = (e: React.MouseEvent) => {
    if (win.isMaximized) return;
    isDragging.current = true;
    dragOffset.current = {
      x: e.clientX - win.position.x,
      y: e.clientY - win.position.y,
    };
    focusWindow(win.id);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const newX = Math.max(0, Math.min(e.clientX - dragOffset.current.x, 1200));
      const newY = Math.max(0, Math.min(e.clientY - dragOffset.current.y, 800));
      updateWindowPosition(win.id, { x: newX, y: newY });
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [win.id, updateWindowPosition]);

  if (!win.isOpen || win.isMinimized) return null;

  const renderAppContent = () => {
    switch (win.id) {
      case 'about':
        return <AboutApp />;
      case 'projects':
        return <ProjectsApp />;
      case 'skills':
        return <SkillsApp />;
      case 'resume':
        return <ResumeApp />;
      case 'contact':
        return <ContactApp />;
      case 'notepad':
        return <NotepadApp />;
      case 'mediaPlayer':
        return <MediaPlayerApp />;
      case 'games':
        return <GamesApp />;
      default:
        return null;
    }
  };

  const style: React.CSSProperties = win.isMaximized
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'calc(100% - 36px)',
        zIndex: win.zIndex,
      }
    : {
        position: 'absolute',
        top: `${win.position.y}px`,
        left: `${win.position.x}px`,
        width: `${win.size.width}px`,
        height: `${win.size.height}px`,
        zIndex: win.zIndex,
      };

  return (
    <div
      style={style}
      onMouseDown={() => focusWindow(win.id)}
      className="win-outset bg-[#c0c0c0] flex flex-col shadow-2xl overflow-hidden select-none"
    >
      {/* Title Bar */}
      <div
        onMouseDown={handleMouseDownHeader}
        className={`px-2 py-1 flex items-center justify-between cursor-move text-white text-xs font-bold ${
          isFocused
            ? 'bg-gradient-to-r from-[#000080] to-[#1084d0]'
            : 'bg-gradient-to-r from-[#808080] to-[#a0a0a0]'
        }`}
      >
        <div className="flex items-center space-x-1.5 truncate">
          <span className="text-sm">{win.icon}</span>
          <span className="truncate">{win.title}</span>
        </div>

        {/* Window controls */}
        <div className="flex items-center space-x-1 flex-shrink-0" onMouseDown={(e) => e.stopPropagation()}>
          <button
            onClick={() => minimizeWindow(win.id)}
            className="win-button w-4 h-4 flex items-center justify-center text-black hover:bg-gray-200"
            title="Minimize"
          >
            <Minus className="w-2.5 h-2.5 stroke-[3]" />
          </button>
          <button
            onClick={() => toggleMaximizeWindow(win.id)}
            className="win-button w-4 h-4 flex items-center justify-center text-black hover:bg-gray-200"
            title="Maximize"
          >
            <Square className="w-2.5 h-2.5 stroke-[3]" />
          </button>
          <button
            onClick={() => closeWindow(win.id)}
            className="win-button w-4 h-4 flex items-center justify-center text-black hover:bg-red-400"
            title="Close"
          >
            <X className="w-2.5 h-2.5 stroke-[3]" />
          </button>
        </div>
      </div>

      {/* Window Body */}
      <div className="flex-1 overflow-hidden relative">
        {renderAppContent()}
      </div>
    </div>
  );
};
