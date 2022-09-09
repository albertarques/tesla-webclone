import { useRouter } from "next/router";
import HeroBlock from "../components/HeroBlock"
import Layout from "../components/Layout"

export default function Logged() {

  const {push} = useRouter();

  const result = 
    <Layout>
      <HeroBlock
        picture="/img/25-Hero-D.jpg"
        alt="Casa con paneles solares en el tejado"
        title={"Hola..."+user.email}
      >
      </HeroBlock>
    </Layout>

    return result;    
}

