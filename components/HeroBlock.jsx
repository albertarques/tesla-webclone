import Image from "next/image"
import styles from "../styles/HeroBlock.module.css"
import Button from "./bites/Button"
import cn from "classnames"

export default function HeroBlock({
  children,
  // Picture
  picture, 
  alt, 
  // Texts
  title, 
  p, 
  textColor, 
  // Button
  button, 
  href, 
  buttonText,
  // Form with background
  form,
  center
}) {
  return (
    <div className={cn({
      [styles.heroblock_between]: form === undefined,
      [styles.heroblock_form]: form !== undefined,
      [styles.heroblock_center]: center !== undefined,
      [styles.white]: textColor === "white",
    })}>
      {isImage(picture, alt)}
      {isTitleAndText(title, p)}
      {isButton(button, href, buttonText)}
      {isForm(form, children)}
    </div>
  )
}

const isImage = (picture, alt) => {
  if(picture !== undefined){
    return (
      <Image
        className={styles.heroImg}
        src={picture}
        alt={alt}
        layout='fill'
        objectFit='cover'
        quality={100}
        objectPosition='center'
      />
    )
  }
}

function isButton(button, href, buttonText) {
  if(button !== undefined){
    return (
      <Button href={href} text={buttonText}/>
    )
  }
}

function isTitleAndText(title, p) {
  if(title !== undefined && p !== undefined){
    return(
      <div className="content">
        <h2 className={styles.h2}>{title}</h2>
        <p className={styles.p}>{p}</p>
      </div>
    )
  }
  if(title !== undefined){
    return (
      <div className="content">
        <h2 className={styles.h2}>{title}</h2>
      </div>
    )
  }
}  

function isForm(form, children) {
  if(form !== undefined){
    return(
      <div className="content">
        {children}
      </div>
    )
  }
}