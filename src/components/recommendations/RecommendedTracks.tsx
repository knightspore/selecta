'use client';

import {Track as TrackType} from "@/lib/spotify/types";
import Track from "../tracks/Track";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";

export default function RecommendedTracks() {

  const { recommendations } = useRecommendationsContext();

  return (
    <>
      {recommendations?.tracks.map((track: TrackType) => {
        return <Track key={track.id} track={track} />;
      })}
    </>
  );
}

