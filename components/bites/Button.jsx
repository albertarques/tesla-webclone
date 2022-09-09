import Link from "next/link";
import styles from "../../styles/bites/Button.module.css"

export default function Button({text, href, onClick}) {
  if(href == undefined){
    return (
      <div className={styles.alignCenter}>
        <button 
        className={styles.button} 
        onClick={onClick}>
          {text}
        </button>
      </div>  
    )
  }

  return (
      <div className={styles.alignCenter}>
        <button className={styles.button} onClick={onClick}>
          <Link href={href}>
            {text}
          </Link> 
        </button>
      </div>  
  )
}
