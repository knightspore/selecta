import Track from "../tracks/Track";
import { useRecommendationsContext } from "@/provider/RecommendationsProvider";

export default function RecommendedTracks() {
    const { recommendations } = useRecommendationsContext()

    return <>
        {
            recommendations?.tracks.map((track: Track) => {
                return <Track key={track.id} track={track} />
            })
        }
    </>

}