import Link from "next/link";

export default function Header() {
  return (
    <>
      <h1>💽 Selecta</h1>
      <p className="text-sm text-shell-500">
        Create a song Aura to find the tracks you didn&apos;t know you were
        looking for.
        <br />
        <Link href="/about" className="underline">
          Learn more
        </Link>
        {" / "}
        <Link href="/privacy" className="underline">
          Privacy
        </Link>
      </p>
    </>
  );
}

