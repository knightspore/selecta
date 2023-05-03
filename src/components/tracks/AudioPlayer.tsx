"use client";

import { useState } from "react";

export default function AudioPlayer({ track }: { track: Track }) {

  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayPause() {
    const audioPlayer = document.getElementById(track.uri) as HTMLAudioElement;
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <button onClick={handlePlayPause}>
      {isPlaying ? "⏯️" : "▶️"}
      <audio id={track.uri} src={track.preview_url} />
    </button>
  );

}
