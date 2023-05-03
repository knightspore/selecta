import { msToMinSec } from "@/lib/utils";
import { useState, createContext, useContext } from "react";

type AudioPlayerContextType = {
  track: Track | null;
  setTrack: (t: Track) => void;
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
  const [track, setTrack] = useState<Track | null>(null);
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
    <AudioPlayerContext.Provider value={{ track, setTrack }}>
      <div className="flex items-center justify-between p-4 px-8">
        <div className="flex items-center gap-2">
          <button className="p-1" onClick={handlePlayPause}>
            {track ? isPlaying ? "⏯️" : "▶️" : "💽 No Track Selected"}
          </button>
          <p>
            {track && (
              <>
                {`${track?.name} - ${track?.artists[0].name} (${msToMinSec(
                  track?.duration_ms
                )})`}
              </>
            )}
          </p>
        </div>
        <audio
          id="player"
          src={track?.preview_url}
          onChange={(e: any) => e.target.pause()}
        />
        <div className="flex items-center gap-2">
          <label htmlFor="volume">🔈</label>
          <input
            value={volume}
            type="range"
            min={0}
            max={1}
            step={0.01}
            id="volume"
            onChange={handleVolumeChange}
          />
        </div>
      </div>
      {children}
    </AudioPlayerContext.Provider>
  );
}
