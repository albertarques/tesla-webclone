import { push } from "next/router";

export function GoToHome() {
  push("/");
}

export function GoToRegistered() {
  push("/registered");
}

export function GoToLoggedIn() {
  push("/logged");
}
