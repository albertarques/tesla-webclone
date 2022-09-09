import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function LogOut() {

  const { push } = useRouter();

  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    push("/")
  }).catch((error) => {
    // An error happened.
  });
}
