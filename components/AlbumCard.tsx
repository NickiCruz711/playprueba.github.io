
import React from 'react';
import { Album } from '../types';

interface AlbumCardProps {
  album: Album;
  onPlay: (album: Album) => void;
}

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M8 5.14v14l11-7-11-7z"></path>
  </svg>
);

const AdvisoryLogo: React.FC = () => (
    <div className="absolute bottom-2 right-2 bg-gray-800 bg-opacity-80 px-1.5 py-0.5 rounded-sm">
        <p className="text-white text-[8px] font-bold tracking-wider">ADVISORY</p>
    </div>
);


export const AlbumCard: React.FC<AlbumCardProps> = ({ album, onPlay }) => {
  const artistsString = album.artists.join(', ');

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (album.tracks && album.tracks.length > 0) {
      onPlay(album);
    }
  };

  const handleCardClick = () => {
    // Navigate to album URL on mobile only.
    // Tailwind's 'md' breakpoint is 768px.
    if (window.innerWidth < 768 && album.albumUrl) {
      window.open(album.albumUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
        className="group relative flex flex-col cursor-pointer md:cursor-auto"
        onClick={handleCardClick}
    >
      <div className="relative w-full aspect-square mb-2">
        <img
          src={album.imageUrl}
          alt={album.title}
          className="w-full h-full object-cover rounded-md"
        />
        {album.advisory && <AdvisoryLogo />}

        <div className="absolute top-2 right-2 z-10 flex flex-col items-end space-y-2">
          {album.albumUrl && (
            <a
              href={album.albumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-black/60 text-white text-xs font-semibold py-1 px-3 rounded-full hover:bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-4 transition-all duration-200 ease-in-out hover:scale-110"
              style={{ transitionDelay: '50ms' }}
              onClick={(e) => e.stopPropagation()}
            >
              Ver Álbum
            </a>
          )}
          {album.buyUrl && (
            <a
              href={album.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-full hover:bg-red-500 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-4 transition-all duration-200 ease-in-out hover:scale-110"
              style={{ transitionDelay: '100ms' }}
              onClick={(e) => e.stopPropagation()}
              aria-label={`Comprar ${album.title}`}
            >
              Comprar Álbum
            </a>
          )}
        </div>


        <button
          onClick={handlePlayClick}
          className="hidden md:flex absolute bottom-3 left-3 w-12 h-12 bg-white/90 text-black rounded-full items-center justify-center
                     opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-6
                     transition-all duration-300 ease-in-out shadow-lg hover:bg-white hover:scale-105"
          aria-label={`Play ${album.title}`}
        >
          <PlayIcon className="w-6 h-6 ml-1" />
        </button>
      </div>

      <div className="flex flex-row items-center gap-2 md:flex-col md:items-stretch md:text-center md:gap-0">
        {/* Mobile Play Button */}
        {album.tracks && album.tracks.length > 0 && (
          <button
            onClick={handlePlayClick}
            className="md:hidden flex-shrink-0"
            aria-label={`Play ${album.title}`}
          >
            <PlayIcon className="w-8 h-8 text-white/80 hover:text-white transition-colors" />
          </button>
        )}

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-white truncate text-base leading-tight text-left md:text-center">
            {album.title}
          </h3>
          <p className="text-sm text-gray-400 truncate leading-tight text-left md:text-center">
            {artistsString}
          </p>
        </div>
        
        {album.buyUrl && (
          <a
            href={album.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="md:hidden flex-shrink-0 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-md hover:bg-red-500 transition-colors"
            aria-label={`Comprar ${album.title}`}
          >
            COMPRAR
          </a>
        )}
      </div>
    </div>
  );
};