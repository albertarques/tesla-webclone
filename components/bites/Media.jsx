import Image from "next/image"

export default function Media(children) {

  console.log(children.picture)

  if(children.picture === undefined){
    return (
      <video 
        src={children.video} 
        width="100%"
        muted 
        autoPlay
        loop
        alt={children.alt} 
      />
    )  
  } else {
      return (
        <Image 
        src={children.picture}
        alt={children.alt}
        layout='responsive'
        width={500}
        height={300}
      />
      )
  }
}
