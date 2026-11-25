import { create } from 'zustand';
import { soundManager } from '../utils/audio';

export type WindowId = 
  | 'about' 
  | 'projects' 
  | 'skills' 
  | 'resume' 
  | 'contact' 
  | 'notepad' 
  | 'mediaPlayer' 
  | 'games';

export interface WindowState {
  id: WindowId;
  title: string;
  icon: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

interface OSStore {
  windows: Record<WindowId, WindowState>;
  activeWindowId: WindowId | null;
  cameraMode: 'ROOM' | 'MONITOR';
  soundEnabled: boolean;
  isStartMenuOpen: boolean;
  maxZIndex: number;

  // Actions
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  toggleMaximizeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  updateWindowPosition: (id: WindowId, position: { x: number; y: number }) => void;
  updateWindowSize: (id: WindowId, size: { width: number; height: number }) => void;
  setCameraMode: (mode: 'ROOM' | 'MONITOR') => void;
  toggleCameraMode: () => void;
  toggleSound: () => void;
  toggleStartMenu: () => void;
  closeStartMenu: () => void;
}

const initialWindows: Record<WindowId, WindowState> = {
  about: {
    id: 'about',
    title: 'About Me - Sumit Singh',
    icon: '👤',
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    position: { x: 80, y: 50 },
    size: { width: 520, height: 420 },
    zIndex: 10,
  },
  projects: {
    id: 'projects',
    title: 'Featured Projects',
    icon: '📁',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 120, y: 70 },
    size: { width: 640, height: 480 },
    zIndex: 11,
  },
  skills: {
    id: 'skills',
    title: 'Technical Skills & Diagnostics',
    icon: '⚙️',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 160, y: 90 },
    size: { width: 560, height: 400 },
    zIndex: 12,
  },
  resume: {
    id: 'resume',
    title: 'Curriculum Vitae',
    icon: '📄',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 140, y: 60 },
    size: { width: 620, height: 520 },
    zIndex: 13,
  },
  contact: {
    id: 'contact',
    title: 'Mailbox - Contact Sumit',
    icon: '✉️',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 200, y: 110 },
    size: { width: 480, height: 380 },
    zIndex: 14,
  },
  notepad: {
    id: 'notepad',
    title: 'Notepad - README.txt',
    icon: '📝',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 220, y: 130 },
    size: { width: 440, height: 320 },
    zIndex: 15,
  },
  mediaPlayer: {
    id: 'mediaPlayer',
    title: 'WinGroove Player',
    icon: '🎵',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 260, y: 150 },
    size: { width: 420, height: 280 },
    zIndex: 16,
  },
  games: {
    id: 'games',
    title: 'Minesweeper 95',
    icon: '💣',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 240, y: 100 },
    size: { width: 340, height: 380 },
    zIndex: 17,
  },
};

export const useOSStore = create<OSStore>((set, get) => ({
  windows: initialWindows,
  activeWindowId: 'about',
  cameraMode: 'ROOM',
  soundEnabled: true,
  isStartMenuOpen: false,
  maxZIndex: 20,

  openWindow: (id) => {
    soundManager.playWindowOpen();
    set((state) => {
      const nextZ = state.maxZIndex + 1;
      return {
        windows: {
          ...state.windows,
          [id]: {
            ...state.windows[id],
            isOpen: true,
            isMinimized: false,
            zIndex: nextZ,
          },
        },
        activeWindowId: id,
        maxZIndex: nextZ,
        isStartMenuOpen: false,
      };
    });
  },

  closeWindow: (id) => {
    soundManager.playWindowClose();
    set((state) => {
      const updated = {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: false, isMaximized: false },
      };
      // Find new active window with highest zIndex among open windows
      const openWins = Object.values(updated).filter((w) => w.isOpen && !w.isMinimized);
      const nextActive = openWins.length > 0 
        ? openWins.reduce((prev, curr) => curr.zIndex > prev.zIndex ? curr : prev).id 
        : null;

      return {
        windows: updated,
        activeWindowId: nextActive,
      };
    });
  },

  minimizeWindow: (id) => {
    soundManager.playMouseDown();
    set((state) => {
      const updated = {
        ...state.windows,
        [id]: { ...state.windows[id], isMinimized: true },
      };
      const openWins = Object.values(updated).filter((w) => w.isOpen && !w.isMinimized);
      const nextActive = openWins.length > 0 
        ? openWins.reduce((prev, curr) => curr.zIndex > prev.zIndex ? curr : prev).id 
        : null;

      return {
        windows: updated,
        activeWindowId: nextActive,
      };
    });
  },

  toggleMaximizeWindow: (id) => {
    soundManager.playMouseDown();
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isMaximized: !state.windows[id].isMaximized,
        },
      },
    }));
  },

  focusWindow: (id) => {
    soundManager.playMouseDown();
    set((state) => {
      if (state.activeWindowId === id && !state.windows[id].isMinimized) {
        return state;
      }
      const nextZ = state.maxZIndex + 1;
      return {
        windows: {
          ...state.windows,
          [id]: {
            ...state.windows[id],
            isMinimized: false,
            zIndex: nextZ,
          },
        },
        activeWindowId: id,
        maxZIndex: nextZ,
        isStartMenuOpen: false,
      };
    });
  },

  updateWindowPosition: (id, position) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], position },
      },
    }));
  },

  updateWindowSize: (id, size) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], size },
      },
    }));
  },

  setCameraMode: (mode) => {
    soundManager.playMouseDown();
    set({ cameraMode: mode });
  },

  toggleCameraMode: () => {
    soundManager.playMouseDown();
    set((state) => ({
      cameraMode: state.cameraMode === 'ROOM' ? 'MONITOR' : 'ROOM',
    }));
  },

  toggleSound: () => {
    set((state) => {
      const next = !state.soundEnabled;
      soundManager.setEnabled(next);
      return { soundEnabled: next };
    });
  },

  toggleStartMenu: () => {
    soundManager.playMouseDown();
    set((state) => ({ isStartMenuOpen: !state.isStartMenuOpen }));
  },

  closeStartMenu: () => {
    set({ isStartMenuOpen: false });
  },
}));
