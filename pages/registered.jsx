import HeroBlock from "../components/HeroBlock"
import Layout from "../components/Layout"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

export default function Registered() {

  return (
    <Layout>
      <HeroBlock
        picture="/img/25-Hero-D.jpg"
        alt="Casa con paneles solares en el tejado"
        title="Ha sido registrado con éxito!"
        p="Proximamente recibirá todas nuestras noticias."
      >
      </HeroBlock>
    </Layout>
  )
}
