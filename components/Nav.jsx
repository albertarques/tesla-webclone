
import styles from "../styles/Nav.module.css"
import Link from "next/link"
import { getAuth, signOut, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

export default function Nav() {

  const {push} = useRouter();
  const user = auth.currentUser;

  return ( 
    <>
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {isUserLoggedIn}
        <li className={styles.li}>
          <Link href="/register">
            Registrate
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/login">
            Acceder
          </Link>  
        </li>
        <li className={styles.li_red}>
          <a onClick={logOut}>
            Salir
          </a>
        </li>  
      </ul>
    </nav>
    </>
  )
}

// const user = auth.currentUser;
function logOut() {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    push("/")
  }).catch((error) => {
    // An error happened.
  });
}


function isUserLoggedIn() {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    // ...
  } else {
    // No user is signed in.
  }  
}
