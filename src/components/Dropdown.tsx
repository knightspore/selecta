import { useState } from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  defaultOpen?: boolean;
};

export default function Dropdown({
  children,
  title,
  defaultOpen = false,
}: Props) {
  const [showAll, setShowAll] = useState(defaultOpen);
  return (
    <>
      <button type="button" onClick={() => setShowAll(!showAll)}>
        <h2 className="flex items-center gap-1">
          {title}
          <span className="text-[0.5rem]">{showAll ? " ➖" : " ➕"}</span>
        </h2>
      </button>
      {showAll && children}
    </>
  );
}
