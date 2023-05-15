"use client";

import AuthLoadingSpinner from "@/components/auth/AuthLoadingSpinner";
import AuthSignIn from "@/components/auth/AuthSignIn";
import { useSession } from "next-auth/react";

export default function SignInProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const { status } = useSession();

  if (status == "loading") {
    return <AuthLoadingSpinner />;
  }

  if (status == "unauthenticated") {
    return <AuthSignIn />;
  }

  return <>{children}</>;
}
