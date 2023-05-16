"use client";

import AuthLoadingSpinner from "@/components/auth/AuthLoadingSpinner";
import AuthSignIn from "@/components/auth/AuthSignIn";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import {isExpired} from "@/lib/utils"
import { Session } from "next-auth";


interface SessionData extends Session {
  token: {
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
  };
}

export default function SignInProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      const { token } = session as unknown as SessionData;
      const expired = isExpired(token.expiresAt)
      console.log("expired", expired)
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
