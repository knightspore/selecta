"use client";

import { useState } from "react";

export default function AudioPlayer({ track }: { track: Track }) {

  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPause() {
    const audioPlayer = document.getElementById(track.uri) as HTMLAudioElement;
    console.log(audioPlayer);
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <p className="p-1">
      <button
        onClick={handlePlayPause}
      >
        {isPlaying ? "⏯️" : "▶️"}
      </button>
      <audio id={track.uri} src={track.preview_url} />
    </p>
  );
}
