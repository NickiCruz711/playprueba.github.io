
import React from 'react';
import { Track } from '../types';
import { Icon } from './Icons';

interface PlayerProps {
  isPlaying: boolean;
  currentTrack: Track;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onStop: () => void;
  progress: number;
  duration: number;
}

const formatTime = (timeInSeconds: number): string => {
  if (isNaN(timeInSeconds) || timeInSeconds < 0) return '0:00';
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const Player: React.FC<PlayerProps> = ({
  isPlaying,
  currentTrack,
  onPlayPause,
  onNext,
  onPrev,
  onStop,
  progress,
  duration,
}) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-[#181818] border-t border-zinc-800 text-white flex items-center px-4 z-50">
      <div className="flex items-center gap-4 w-1/4 min-w-0">
        <img src={currentTrack.albumArt} alt={currentTrack.title} className="w-14 h-14 rounded-md" />
        <div className="min-w-0">
          <p className="font-semibold truncate">{currentTrack.title}</p>
          <p className="text-sm text-gray-400 truncate">{currentTrack.artist}</p>
        </div>
      </div>
      
      <div className="flex-grow flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-6">
          <button onClick={onPrev} className="text-gray-400 hover:text-white transition-colors" aria-label="Previous track">
            <Icon name="previous" className="w-6 h-6" />
          </button>
          <button 
            onClick={onPlayPause} 
            className="bg-white text-black rounded-full p-3 flex items-center justify-center hover:scale-105 transition-transform" 
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <Icon name={isPlaying ? 'pause' : 'play'} className="w-6 h-6" />
          </button>
          <button onClick={onNext} className="text-gray-400 hover:text-white transition-colors" aria-label="Next track">
            <Icon name="next" className="w-6 h-6" />
          </button>
          <button onClick={onStop} className="text-gray-400 hover:text-white transition-colors" aria-label="Stop">
            <Icon name="stop" className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-lg">
          <span className="text-xs text-gray-400 w-10 text-center">{formatTime(progress)}</span>
          <div className="w-full bg-zinc-600 rounded-full h-1">
            <div 
              className="bg-white h-1 rounded-full" 
              style={{ width: `${(progress / duration) * 100 || 0}%` }}
            ></div>
          </div>
          <span className="text-xs text-gray-400 w-10 text-center">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="w-1/4">
        {/* Placeholder for volume controls etc. */}
      </div>
    </footer>
  );
};
