import {TrackAudioFeatures} from "@/lib/spotify/types";
import { formatPercentage, msToMinSec } from "../../../lib/utils";

export default function FeaturesText({
  features,
}: {
  features: TrackAudioFeatures;
}) {
  return (
    <>
      <p>
        <span className="font-medium">Tempo - </span>
        {features?.tempo.toString().split(".")[0]} BPM
      </p>
      <p>
        <span className="font-medium">Length - </span>
        {msToMinSec(features?.duration_ms)}
      </p>
      <p>
        <span className="font-medium">Energy - </span>
        {formatPercentage(features?.energy)}
      </p>
      <p>
        <span className="font-medium">Valence - </span>
        {formatPercentage(features?.valence)}
      </p>
      <p>
        <span className="font-medium">Speechiness - </span>
        {formatPercentage(features?.speechiness)}
      </p>
      <p>
        <span className="font-medium">Instrumentalness - </span>
        {formatPercentage(features?.instrumentalness)}
      </p>
      {/*

      <p>
        <span className="font-medium">Danceability: </span>
        {formatPercentage(features?.danceability)}
      </p>
      <p>
        <span className="font-medium">Liveness: </span>
        {formatPercentage(features?.liveness)}
      </p>
      <p>
        <span className="font-medium">Loudness: </span>
        {features?.loudness} LUFS
      </p>
      <p>
        <span className="font-medium">Acousticness: </span>
        {formatPercentage(features?.acousticness)}
      </p>
      <p>
        <span className="font-medium">Time Signature: </span>
        {features?.time_signature}/4
      </p>
      */}
    </>
  );
}
