import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Music } from 'lucide-react';
import { soundManager } from '../../utils/audio';

const playlist = [
  { title: 'Synthwave Memories (Lo-Fi)', artist: 'Sumit Dev Radio', duration: '2:45' },
  { title: 'Midnight Coding Sessions', artist: 'Retro 90s Beats', duration: '3:12' },
  { title: 'Cyberpunk Skyline', artist: 'Virtual Soundscapes', duration: '3:30' },
];

export const MediaPlayerApp: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [bars, setBars] = useState<number[]>([40, 60, 80, 50, 70, 90, 30, 85, 45, 65, 75, 55]);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setBars((prev) =>
          prev.map(() => Math.floor(20 + Math.random() * 75))
        );
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    soundManager.playMouseDown();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    soundManager.playMouseDown();
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    soundManager.playMouseDown();
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <div className="h-full flex flex-col bg-[#222] p-2 text-white font-mono text-xs select-none win-outset">
      {/* Visualizer Display */}
      <div className="win-inset bg-black p-3 mb-2 rounded flex flex-col justify-between">
        <div className="flex justify-between items-center text-green-400 text-[10px] pb-1 border-b border-gray-800">
          <span className="flex items-center"><Music className="w-3 h-3 mr-1" /> WIN-GROOVE AUDIO</span>
          <span>128 KBPS / 44.1 KHZ</span>
        </div>
        <div className="py-2">
          <div className="text-amber-400 font-bold text-sm truncate">
            {playlist[currentTrack].title}
          </div>
          <div className="text-gray-400 text-xs">
            {playlist[currentTrack].artist}
          </div>
        </div>
        {/* Equalizer bars */}
        <div className="flex items-end space-x-1 h-12 pt-2">
          {bars.map((height, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-green-500 via-yellow-500 to-red-500 transition-all duration-150 rounded-t-sm"
              style={{ height: isPlaying ? `${height}%` : '8%' }}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="win-outset bg-[#c0c0c0] p-2 flex items-center justify-between text-black">
        <div className="flex space-x-1">
          <button onClick={prevTrack} className="win-button px-2 py-1 text-xs font-bold">
            <SkipBack className="w-3.5 h-3.5" />
          </button>
          <button onClick={togglePlay} className="win-button px-3 py-1 text-xs font-bold text-[#000080]">
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button onClick={nextTrack} className="win-button px-2 py-1 text-xs font-bold">
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex items-center space-x-1 text-xs font-bold text-gray-700">
          <Volume2 className="w-3.5 h-3.5 text-blue-800" />
          <span>{isPlaying ? 'PLAYING' : 'STOPPED'}</span>
        </div>
      </div>
    </div>
  );
};
