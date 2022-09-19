import { useRouter } from "next/router";

export function GoTo(href) {
  const { push } = useRouter();
  if (!href) {
    push("/");
  } else {
    push(href);
  }
}
