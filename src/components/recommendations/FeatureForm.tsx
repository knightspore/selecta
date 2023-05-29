import { useState } from "react";
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

type FeatureElement = {
  active: boolean;
  element: React.ReactNode;
};

const FEAT_EL_MAP: Record<string, FeatureElement> = {
  tempo: {
    active: true,
    element: <Tempo />,
  },
  danceability: {
    active: true,
    element: <Danceability />,
  },
  energy: {
    active: true,
    element: <Energy />,
  },
  valence: {
    active: true,
    element: <Valence />,
  },
  instrumentalness: {
    active: true,
    element: <Instrumentalness />,
  },
  speechiness: {
    active: true,
    element: <Speechiness />,
  },
  popularity: {
    active: true,
    element: <Popularity />,
  },
  acousticness: {
    active: false,
    element: <Acousticness />,
  },
  liveness: {
    active: false,
    element: <Liveness />,
  },
  loudness: {
    active: false,
    element: <Loudness />,
  },
};

function RenderFeatureElements(r: Record<string, FeatureElement>) {
  return Object.values(r).map((e: FeatureElement) => {
    if (e.active) {
      return e.element;
    }
  });
}

function RenderFeatureControls(
  r: Record<string, FeatureElement>,
  toggleFn: (elementKey: string) => void
) {
  return Object.keys(r).map((k: string) => {
    const feat = r[k];
    return (
      <FeatureToggle key={k} label={k} f={feat} onClick={() => toggleFn(k)} />
    );
  });
}

export default function FeatureForm() {
  const [elements, setElements] = useState(FEAT_EL_MAP);

  function toggleElement(key: string) {
    setElements({
      ...elements,
      [key]: {
        ...elements[key],
        active: !elements[key].active,
      },
    });
  }

  return (
    <>
      <div className="flex flex-wrap gap-1">
        {RenderFeatureControls(elements, toggleElement)}
      </div>
      {RenderFeatureElements(elements)}
    </>
  );
}

function FeatureToggle({
  f,
  label,
  onClick,
}: {
  f: FeatureElement;
  label: string;
  onClick: () => void;
}) {
  return (
    <label
      htmlFor={label + "checked"}
      className="flex items-center px-1 py-px text-sm rounded-full cursor-pointer select-none bg-shell-200 gap-1"
      onClick={onClick}
    >
      {label}
      <input type="checkbox" checked={f.active} />
    </label>
  );
}
