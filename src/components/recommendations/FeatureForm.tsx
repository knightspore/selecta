import Danceability from "../../components/recommendations/features/Danceability";
import Energy from "../../components/recommendations/features/Energy";
import Valence from "../../components/recommendations/features/Valence";
import Instrumentalness from "../../components/recommendations/features/Instrumentalness";
import Speechiness from "../../components/recommendations/features/Speechiness";
import Popularity from "../../components/recommendations/features/Popularity";
import Tempo from "./features/Tempo";
import Acousticness from "./features/Acousticness";
import Liveness from "./features/Liveness";
import Loudness from "./features/Loudness";
import Dropdown from "../Dropdown";

export default function FeatureForm() {
  return (
    <Dropdown title="Features" defaultOpen>
      <Tempo />
      <Danceability />
      <Energy />
      <Valence />
      <Instrumentalness />
      <Speechiness />
      <Popularity />
      <Acousticness />
      <Liveness />
      <Loudness />
    </Dropdown>
  );
}
