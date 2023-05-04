"use client"

import { useAudioPlayerContext } from "@/provider/AudioPlayerProvider";
import NowPlayingTrack from "./NowPlayingTrack";

export default function Player() {
  const {
    nowPlayingTrack,
    isPlaying,
    volume,
    handleVolumeChange,
    handlePlayPause,
  } = useAudioPlayerContext();

  return (
    <div className="flex flex-col items-center justify-between p-4 px-8 text-slate-100 bg-slate-500 gap-1">
      <NowPlayingTrack />
      <audio id="player" src={nowPlayingTrack?.preview_url} />
      <div className="flex items-center justify-center gap-2">
        <button
          className="flex items-center gap-1 line-clamp-1"
          onClick={
            isPlaying
              ? () => handlePlayPause(false)
              : () => handlePlayPause(true)
          }
        >
          {isPlaying ? "⏯️" : "️▶️"}
        </button>
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
  );
}
