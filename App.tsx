import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { AlbumCard } from './components/AlbumCard';
import { Player } from './components/Player';
import { ALBUMS_DATA } from './constants';
import { Album, Track } from './types';

const App: React.FC = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const currentTrack = currentTrackIndex !== null ? currentPlaylist[currentTrackIndex] : null;
  const isPlayerActive = currentPlaylist.length > 0 && currentTrack;

  const handlePlayAlbum = useCallback((album: Album) => {
    if (album.tracks && album.tracks.length > 0) {
      setCurrentPlaylist(album.tracks);
      setCurrentTrackIndex(0);
      setIsPlaying(true);
    }
  }, []);

  const handlePlayPause = useCallback(() => {
    if (currentTrack) {
      setIsPlaying(prev => !prev);
    }
  }, [currentTrack]);

  const playNextTrack = useCallback(() => {
    // Only allow playing the first 3 tracks (indices 0, 1, 2)
    if (currentTrackIndex !== null && currentTrackIndex < 2 && currentTrackIndex < currentPlaylist.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      // End of playlist or reached playback limit
      setIsPlaying(false);
      setCurrentTrackIndex(null);
      setCurrentPlaylist([]);
    }
  }, [currentTrackIndex, currentPlaylist.length]);

  const handleNext = useCallback(() => {
    playNextTrack();
  }, [playNextTrack]);
  
  const handlePrev = useCallback(() => {
    if (currentTrackIndex !== null && currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  }, [currentTrackIndex]);

  const handleStop = useCallback(() => {
    setIsPlaying(false);
    setCurrentTrackIndex(null);
    setCurrentPlaylist([]);
    if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }
  }, []);
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(e => console.error("Error playing audio:", e));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && currentTrack) {
      if (audio.src !== currentTrack.audioSrc) {
          audio.src = currentTrack.audioSrc;
      }
      if (isPlaying) {
        audio.play().catch(e => console.error("Error playing audio:", e));
      }
    } else if (audio) {
      // Clean up when playlist ends
      audio.src = '';
    }
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      playNextTrack();
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [playNextTrack]);

  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans flex flex-col">
      <div className="flex-grow">
        <Header />
        <main className={`p-4 sm:p-6 md:p-8 ${isPlayerActive ? 'pb-32' : ''}`}>
          <section className="mb-8 md:mb-12">
              <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">¿De qué se trata Formato G?</h1>
                  <div className="space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed">
                    <p>
                        Formato G es una herramienta para artistas y bandas independientes que quieren tener el control total de su obra. Subí tus canciones y compartilo con quien quieras. Sin comisiones. Sin algoritmos. Sin intermediarios. Solo vos, tu música… y tu gente.
                    </p>
                    <p className="italic">
                        Formato G. La música Vuelve a ser <span className="text-red-500 font-bold">tuya</span>.
                    </p>
                  </div>
              </div>
          </section>

          <h2 className="text-2xl font-bold mb-6">Artistas y Bandas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {ALBUMS_DATA.map((album) => (
              <AlbumCard key={album.id} album={album} onPlay={handlePlayAlbum} />
            ))}
          </div>
        </main>
      </div>

      <footer className="text-center text-xs text-neutral-500 py-8 px-4 space-y-1">
        <p>2025 - Formato G en cooperación con Tienda Guah!</p>
        <p>Presidencia Roque Sáenz Peña - Chaco - Argentina - Todos los derechos reservados</p>
      </footer>
      
      <audio ref={audioRef} preload="metadata" />
      
      {isPlayerActive && (
         <Player 
          isPlaying={isPlaying}
          currentTrack={currentTrack}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrev={handlePrev}
          onStop={handleStop}
          progress={progress}
          duration={duration}
        />
      )}
    </div>
  );
};

export default App;