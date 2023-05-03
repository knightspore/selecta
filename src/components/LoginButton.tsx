import { useState } from "react";
import { spotifyApi } from "@/lib/spotify/utils";

export default async function LoginButton() {
  const [loginUrl, setLoginUrl] = useState<string | null>(null);

  if (!loginUrl) {
    const url = spotifyApi.createAuthorizeURL(["user-read-email"], "login");
    setLoginUrl(url);
  }

  return (
    <a href={loginUrl ?? ""}>
      {loginUrl}
      Login
    </a>
  );
}
