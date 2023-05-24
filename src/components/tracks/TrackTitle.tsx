type Props = {
  name: string;
};

export default function TrackTitle({ name }: Props) {
  return (
    <h2 className="text-sm font-bold md:text-base line-clamp-1">{name}</h2>
  );
}
