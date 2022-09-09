import styles from "../../styles/Input.module.css"
import { KeyIcon, UserIcon } from '@heroicons/react/24/solid'

// Icons from: https://heroicons.com/

export default function Input({id, label, type, name, onChange}) {
  const result =
  <div className={styles.inputRow}>
    <input className={styles.inputText} id={id} type={type} name={name} placeholder={label} onChange={onChange} required></input>
    <div className={styles.iconContainer}>
      {whatIconIs()}
    </div>
  </div>

  return result

  function whatIconIs() {
    switch (id) {
      case "password" : 
        return (<KeyIcon/>);
      case "valPassword" :
        return(<KeyIcon/>);
      case "user":
        return(<UserIcon/>)
    }
  }

}
