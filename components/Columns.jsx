import cn from "classnames";
import styles from "../styles/Columns.module.css";

export default function Columns({children, direction, order, spacer, background}) {

  const result =
    <div className = {cn({
      [styles.colsHor]: direction === "hor",
      [styles.colsVer]: direction === "ver",
      [styles.colsHor]: order === "norm",
      [styles.colsHorRev]: order === "rev",
      [styles.spacerVer]: spacer === "ver", 
      [styles.spacerHor]: spacer === "hor",
      [styles.spacerHor20]: spacer === "hor20",
      [styles.black]: background === "black",
      [styles.white]: background === "white"
    })}>
      {children}
    </div>

  return result
}

Columns.defaultProps = {
  direction: "hor",
  order: "norm",
  spacer: "ver"
}
