import HeroBlock from "../components/HeroBlock";
import Layout from "../components/Layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/Firebase";
import { GoTo } from "../utils/Routes";

export default function Logged() {
  const [user] = useAuthState(auth);

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
    GoTo("login");
  }
}
