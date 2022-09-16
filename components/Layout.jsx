import styles from "../styles/Layout.module.css"
import Head from "next/head"
import Header from "./Header"
import Footer from './Footer'
import {config} from "../data/data"


export default function Layout({children, title, description, footer}) {

  function isFooter(footer) {
    if(footer !== undefined){
      return(
        <Footer />
      )
    }
  }
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta 
          name='description'
          content={description}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      {isFooter(footer)}
    </>
  )
}


Layout.defaultProps = {
  title: config.config.layoutDefaults.title,
  description: config.config.layoutDefaults.description
}