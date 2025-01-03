import React, { useRef, useEffect, useState } from "react";
import { useAudio } from "../context/AudioContext";
import "./style/AudioPlayer.css";

const AudioPlayer: React.FC = () => {
  const { currentTrack, playNextTrack } = useAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(50); // Initialisé à 50%

  useEffect(() => {
    console.log("currentTrack", currentTrack);
    // Commence la lecture lorsque la piste change
    if (currentTrack && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const manualChange = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime =
        (manualChange / 100) * audioRef.current.duration;
      setProgress(manualChange);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100; // Convertit en pourcentage
    }
    setVolume(newVolume);
  };

  return currentTrack ? (
    <div className="audio-player">
      <img
        src={Object(currentTrack).originalAlbum.cover}
        alt={`${Object(currentTrack).originalAlbum.name} cover`}
        className="cover"
      />
      <audio
        ref={audioRef}
        src={currentTrack.track}
        onEnded={playNextTrack}
        onTimeUpdate={handleTimeUpdate}
      />
      <button onClick={handlePlayPause}>
        {isPlaying ? "⏸️ Pause" : "▶️ Play"}
      </button>
      <div className="track-info">
        <div>
          {currentTrack.title} - {Object(currentTrack).band.name}
        </div>
        <input
          type="range"
          className="progress-bar"
          value={progress}
          max="100"
          onChange={handleProgressChange}
        />
      </div>
      <input
        type="range"
        className="volume-control"
        value={volume}
        max="100"
        onChange={handleVolumeChange}
      />
    </div>
  ) : null;
};

export default AudioPlayer;
