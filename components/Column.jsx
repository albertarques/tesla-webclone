import styles from "../styles/Column.module.css"

export default function Column({children, type, flag}) {

  if(type === "text"){
    return(
      <div className={styles["columnText"] + " " + styles[flag]}>
        {children}
      </div>
    )
  }
  return(
    <div className={styles["column"]}>
      {children}
    </div>
  )
}
