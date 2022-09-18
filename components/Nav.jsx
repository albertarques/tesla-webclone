
import styles from "../styles/Nav.module.css"
import Link from "next/link"
import { auth, logOut } from "../lib/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {

  const [user] = useAuthState(auth);

  function isUserLogged() {
    if (user) {
      return (
      <li className={styles.li}>
        <a onClick={logOut}>Log Out</a>
      </li>
    )}
  }

  function isUserLogOut() {
    if (!user) {
      return (
        <>
        <li className={styles.li}>
          <Link href="/register">
            Registrate
          </Link>
        </li>
        <li className={styles.li}>
            <Link href={"/login"}>Login</Link>
        </li>
        </>
      );
    }
  }

  return ( 
    <>
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {isUserLogOut()}
        {isUserLogged()}
      </ul>
    </nav>
    </>
  )
}