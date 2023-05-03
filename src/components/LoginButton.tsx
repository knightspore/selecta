import { useState } from "react";

export default async function LoginButton() {
  const [loginUrl, setLoginUrl] = useState<string | null>(null);
  return (
    <a href={loginUrl ?? ""}>
      {loginUrl}
      Login
    </a>
  );
}
