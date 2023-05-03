import { useAudioPlayerContext } from "@/provider/AudioPlayerProvider";
import NowPlayingTrack from "./NowPlayingTrack";
import AudioPlayer from "./Audio";

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
      <button className="flex items-center gap-1 line-clamp-1"onClick={handlePlayPause}>
        {nowPlayingTrack ? (isPlaying ? "⏯️" : "▶️") : "💽 No Track Selected"}
        <NowPlayingTrack />
      </button>
      {nowPlayingTrack && (
        <AudioPlayer
          url={nowPlayingTrack.preview_url}
          onChange={() => handlePlayPause()}
        />
      )}
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
  );
}
