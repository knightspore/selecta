import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Selecta?",
};

export default function AboutPage() {
  return (
    <main className="p-4 prose">
      <nav>
        <Link href="/" className="text-sm underline text-slate-600">
          Back
        </Link>
      </nav>
      <article className="prose prose-shell">
        <h1 className="text-2xl">What is Selecta?</h1>
        <h2 className="text-lg">Who is it for?</h2>
        <h2 className="text-lg">How do I use it?</h2>
        <h2 className="text-lg">What is an &ldquo;aura&rdquo;?</h2>
        <h2 className="text-lg">What else do I need to know?</h2>
      </article>
    </main>
  );
}
