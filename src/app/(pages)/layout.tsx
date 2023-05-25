import Link from "next/link";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 md:px-12 space-y-8">
      <nav>
        <Link href="/" className="text-sm underline text-shell-600">
         ⬅️ Back
        </Link>
      </nav>
      <article className="mx-auto prose prose-coral prose-a:text-shell-500">
        {children}
      </article>
    </div>
  );
}
