import styles from "../styles/Form.module.css"


export default function Form({children, title, submit}) {
  const result =
    <form className={styles.form} onSubmit={submit} method="post">
      <h2 className={styles.h2}>{title}</h2>
      {children}
    </form>
    
    return result
}

