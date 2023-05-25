import { Track } from "@/lib/spotify/types";
import FeatureTag from "./FeatureTag";
import { formatPercentage, msToMinSec } from "@/lib/utils";
import { Keys } from "@/lib/spotify/constants";
import SpotifyLogo from "@/components/SpotifyLogo";

type Props = {
  track: Track;
};

export default function Features({ track }: Props) {
  const features = track.features;

  return (
    <>
      <FeatureTag>
        🥁 {features?.tempo?.toString().split(".")[0]} BPM
      </FeatureTag>
      <FeatureTag>⏱️ {msToMinSec(features?.duration_ms)}s</FeatureTag>
      <FeatureTag>🖋️ {features?.time_signature}/4</FeatureTag>
      <FeatureTag>
        👀 {formatPercentage(track.popularity / 100)} Popular
      </FeatureTag>
      <FeatureTag>
        🎹 {features?.key ? Keys[features?.key] : ""}
        {features?.mode == 0 ? " Min" : " Maj"}
      </FeatureTag>
      <FeatureTag>
        🕺🏾 {formatPercentage(features?.danceability)} Danceable
      </FeatureTag>
      <FeatureTag>⚡️ {formatPercentage(features?.energy)} Energy</FeatureTag>
      <FeatureTag>😊 {formatPercentage(features?.valence)} Happy</FeatureTag>
      <FeatureTag>
         🗣️ {formatPercentage(features?.speechiness)} Speechy  
      </FeatureTag>
      <FeatureTag>
        🎻 {formatPercentage(features?.instrumentalness)} Instrumental
      </FeatureTag>
      <a
        target="_blank"
        className="flex items-center block px-1 text-xs rounded-full gap-1 text-shell-400 bg-shell-200"
        href={track.external_urls.spotify}
      >
        <span className="w-3 h-3 bg-white rounded-full">
          <SpotifyLogo />
        </span>
        Spotify
      </a>
    </>
  );
}
