import React, { createContext, useState, useContext, ReactNode } from "react";

interface Track {
  title: string;
  band: object;
  track: string;
}

interface AudioContextType {
  currentTrack: Track | null;
  isPlayerActive: boolean;
  setTrack: (track: Track, trackIndex: number, playlist: Track[]) => void;
  playNextTrack: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [playlist, setPlaylist] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlayerActive, setIsPlayerActive] = useState<boolean>(false);

  const setTrack = (track: Track, trackIndex: number, playlist: Track[]) => {
    setCurrentTrack(track);
    setCurrentIndex(trackIndex);
    setPlaylist(playlist);
    setIsPlayerActive(true);
  };

  const playNextTrack = () => {
    if (currentIndex + 1 < playlist.length) {
      const nextIndex = currentIndex + 1;
      setCurrentTrack(playlist[nextIndex]);
      setCurrentIndex(nextIndex);
      setIsPlayerActive(true);
    } else {
      // Fin de la playlist, vous pouvez soit répéter soit arrêter
      setCurrentTrack(null);
    }
  };

  return (
    <AudioContext.Provider
      value={{ currentTrack, isPlayerActive, setTrack, playNextTrack }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error(
      "useAudio doit être utilisé à l’intérieur de AudioProvider"
    );
  }
  return context;
};
