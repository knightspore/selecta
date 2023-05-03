import { useState, createContext, useContext } from "react";

type AudioPlayerContextType = {
  nowPlayingTrack: Track | null;
  setNowPlayingTrack: (t: Track) => void;
  isPlaying: boolean;
  volume: number;
  handleVolumeChange: (e: any) => void;
  handlePlayPause: () => void;
};

const AudioPlayerContext = createContext<AudioPlayerContextType>(
  {} as AudioPlayerContextType
);

export function useAudioPlayerContext() {
  const value = useContext(AudioPlayerContext);
  if (value == null) {
    throw new Error("No AudioPlayerContextValue");
  } else {
    return value as AudioPlayerContextType;
  }
}

export default function AudioPlayerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [nowPlayingTrack, setNowPlayingTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  function handlePlayPause() {
    const audioPlayer = document.getElementById("player") as HTMLAudioElement;
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    setIsPlaying(!isPlaying);
  }

  function handleVolumeChange(e: any) {
    const audioPlayer = document.getElementById("player") as HTMLAudioElement;
    setVolume(e.target.value);
    audioPlayer.volume = e.target.value;
  }

  return (
    <AudioPlayerContext.Provider
      value={{
        nowPlayingTrack,
        setNowPlayingTrack,
        isPlaying,
        volume,
        handlePlayPause,
        handleVolumeChange,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}
