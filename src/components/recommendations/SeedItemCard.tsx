import Image from "next/image";
import Link from "next/link";

type Props = {
  img: string;
  name: string;
  href: string;
  search: boolean;
  remove: () => void;
};

export default function SeedItemCard({
  img,
  name,
  href,
  search,
  remove,
}: Props) {
  return (
    <div className="flex items-center p-1 rounded gap-1 bg-shell-200">
      <div className="relative w-8 h-8">
        <Image
          src={img || ""}
          alt={`${name} avatar`}
          className="border-2 rounded-full border-shell-300"
          fill={true}
        />
      </div>
      {search ? (
        <p className="text-sm font-medium cursor-pointer text-shell-700 hover:text-shell-500 transition-all duration-150">
          {name}
        </p>
      ) : (
        <>
          <Link href={href} target="_blank">
            <p className="text-sm font-medium line-clamp-1 text-shell-700 hover:text-shell-500 transition-all duration-150">
              {name}
            </p>
          </Link>
          <div className="flex-1 text-right">
            <button type="button" onClick={remove} className="text-right">
              🗑️
            </button>
          </div>
        </>
      )}
    </div>
  );
}