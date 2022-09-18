import HeroBlock from "../components/HeroBlock";
import Layout from "../components/Layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/Firebase";
import { GoToHome } from "../utils/Routes";
import { useRouter } from "next/router";

export default function Logged() {
  const [user] = useAuthState(auth);
  const { push } = useRouter();

  if (user) {
    return (
      <Layout>
        <HeroBlock
          picture="/img/25-Hero-D.jpg"
          alt="Casa con paneles solares en el tejado"
          title={"Hola " + user.email}
        ></HeroBlock>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <HeroBlock
          picture="/img/25-Hero-D.jpg"
          alt="Casa con paneles solares en el tejado"
          title={"Usuario no identificado"}
          p={"Por favor, identifíquese o regístrese."}
        ></HeroBlock>
      </Layout>
    );
  }
}
