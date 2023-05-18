"use client";

import AuthSignIn from "@/components/auth/AuthSignIn";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { getSessionToken, isExpired } from "@/lib/utils";
import LoadingSpinner from "@/components/loading/LoadingSpinner";

export default function SignInProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      const token = getSessionToken(session);
      const expired = isExpired(token.expiresAt);
      if (expired) {
        signIn("spotify");
      }
    }
  }, [session]);

  if (status == "loading") {
    return (
      <div className="w-screen h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (status == "unauthenticated") {
    return <AuthSignIn />;
  }

  return <>{children}</>;
}
