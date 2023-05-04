type Props = {
  url: string;
};
export default function AudioPlayer({ url }: Props) {
  return <audio id="player" src={url} />;
}
