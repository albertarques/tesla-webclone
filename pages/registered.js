import HeroBlock from "../components/HeroBlock";
import Layout from "../components/Layout";
import { GoToHome } from "../utils/Routes";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Registered() {
  const [user] = useAuthState(auth);

  if (!user) {
    return (
      <Layout>
        <HeroBlock
          picture="/img/25-Hero-D.jpg"
          alt="Casa con paneles solares en el tejado"
          title="Ha sido registrado con éxito!"
          p="Proximamente recibirá todas nuestras noticias."
        ></HeroBlock>
      </Layout>
    );
  } else {
    GoToHome();
  }
}
