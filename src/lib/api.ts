export async function getRecommendations(
  recommendationsInput: RecommendationsInput
): Promise<Recommendations> {
  const response = await fetch("/api/recommendations", {
    method: "POST",
    body: JSON.stringify({
      data: {
        ...recommendationsInput,
      },
    }),
  });
  return await response.json();
}

export async function getTrackFeatures(
  id: string
): Promise<TrackAudioFeatures> {
  const response = await fetch("/api/tracks/features", {
    method: "POST",
    body: JSON.stringify({ id: id }),
  });
  return await response.json();
}

export async function getGenres(): Promise<Genres> {
  const response = await fetch("/api/recommendations/genres");
  return await response.json();
}

