// http://localhost:3000/blog/primer-post
import Link from 'next/link'
import Image from "next/image"
import Head from "next/head"

export default function primerPost() {
  return (
    <div>
      <Head>
        <title>Este es mi primer post</title>
        <meta 
          name='description'
          content='Descripción de mi primer post'
        />
      </Head>
      <div>
        <h1>Mi primer post</h1>
        <Link href="/">
          <a>Volver al inicio</a>
        </Link>
        <Image 
          src="/img/1.jpg"
          width={600}
          height={600}
          alt="mi imagen con Image}"
        />
      </div>
    </div>
  )
}
