"use client";

import { signOut, useSession } from "next-auth/react";

export default function LoggedInUser() {
  const { data: session, status } = useSession();

  console.log(session);

  if (status === "unauthenticated") {
    return (
      <p className="text-xs font-bold text-shell-900/50">Not logged in.</p>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between gap-1">
        <p className="text-xs font-bold text-shell-900/50">
          {session?.user?.name}
        </p>
        <button onClick={() => signOut()} className="text-xs text-shell-900/30">
          Sign Out
        </button>
      </div>
      <hr />
    </>
  );
}
