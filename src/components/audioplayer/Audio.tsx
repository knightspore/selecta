type Props = {
  url: string;
  onChange: () => void;
};
export default function AudioPlayer({ url, onChange }: Props) {
  return <audio id="player" src={url} onChange={onChange} />;
}
