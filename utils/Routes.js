import { useRouter } from "next/router";

export function GoToHome() {
  const { push } = useRouter();
  push("/");
}

export function GoToRegistered() {
  const { push } = useRouter();
  push("/registered");
}

export function GoToLoggedIn() {
  const { push } = useRouter();
  push("/logged");
}
