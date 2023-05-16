"use client";

import AuthLoadingSpinner from "@/components/auth/AuthLoadingSpinner";
import AuthSignIn from "@/components/auth/AuthSignIn";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { getSessionToken, isExpired } from "@/lib/utils";

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
      console.log(token)
      console.log("isExpired", expired)
      if (expired) {
        signOut();
      }
    }
  }, [session]);

  if (status == "loading") {
    return <AuthLoadingSpinner />;
  }

  if (status == "unauthenticated") {
    return <AuthSignIn />;
  }

  return <>{children}</>;
}
