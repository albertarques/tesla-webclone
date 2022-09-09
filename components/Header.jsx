import Image from "next/image"
import Link from "next/link"
import Nav from "./Nav"
import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
        <Image
          src="/img/SVG/logo.svg"
          width={100}
          height={50}
          alt="Tesla logo"
          className={styles.logo}
        />
        </a>
      </Link>
      <Nav />
    </header>
  )
}
