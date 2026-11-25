import React from 'react';
import { useOSStore, WindowId } from '../../store/useOSStore';

interface DesktopIcon {
  id: WindowId | 'trash';
  title: string;
  icon: string;
}

const desktopIcons: DesktopIcon[] = [
  { id: 'about', title: 'About Me', icon: '👤' },
  { id: 'projects', title: 'My Projects', icon: '📁' },
  { id: 'skills', title: 'Skills & Tech', icon: '⚙️' },
  { id: 'resume', title: 'Resume.pdf', icon: '📄' },
  { id: 'contact', title: 'Contact Sumit', icon: '✉️' },
  { id: 'notepad', title: 'README.txt', icon: '📝' },
  { id: 'mediaPlayer', title: 'WinGroove', icon: '🎵' },
  { id: 'games', title: 'Minesweeper', icon: '💣' },
  { id: 'trash', title: 'Recycle Bin', icon: '🗑️' },
];

export const Desktop: React.FC = () => {
  const { openWindow, focusWindow } = useOSStore();
  const [selectedIcon, setSelectedIcon] = React.useState<string | null>(null);

  const handleIconClick = (id: string) => {
    setSelectedIcon(id);
  };

  const handleIconDoubleClick = (id: string) => {
    if (id !== 'trash') {
      openWindow(id as WindowId);
    }
  };

  return (
    <div
      onClick={() => setSelectedIcon(null)}
      className="absolute inset-0 p-4 grid grid-flow-col grid-rows-6 gap-6 w-max select-none"
    >
      {desktopIcons.map((item) => {
        const isSelected = selectedIcon === item.id;
        return (
          <div
            key={item.id}
            onClick={(e) => {
              e.stopPropagation();
              handleIconClick(item.id);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              handleIconDoubleClick(item.id);
            }}
            className={`w-20 flex flex-col items-center p-1.5 rounded cursor-pointer group text-center ${
              isSelected ? 'bg-blue-800/40 outline outline-1 outline-dashed outline-yellow-300' : 'hover:bg-white/10'
            }`}
          >
            <div className="text-3xl mb-1 filter drop-shadow-md group-hover:scale-105 transition-transform">
              {item.icon}
            </div>
            <span
              className={`text-xs font-medium text-white px-1 leading-tight break-words ${
                isSelected ? 'bg-[#000080]' : 'drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'
              }`}
            >
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};
