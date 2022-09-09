import Layout from "../components/Layout";
import HeroBlock from "../components/HeroBlock";
import Form from "../components/Form";
import Input from "../components/bites/Input";
import Button from "../components/bites/Button";
import { useRouter } from "next/router";
import {
  browserSessionPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, persistenceUserLogged } from "../firebase";
import { useState } from "react";

export default function Login() {
  const { push } = useRouter();

  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, Username, Password).then(
        (userCredential) => {
          // Signed in
          user = userCredential.user;
          // ...
        }
      );
      persistenceUserLogged(browserSessionPersistence); // Persist login info
      // onAuthStateChanged();
      push("/logged");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <Layout>
      <HeroBlock form picture="/img/hero@2.jpg" alt="Modelo S en color rojo">
        <Form title="Login" submit={loginUser}>
          <Input
            id="user"
            label="Email"
            type="email"
            name="email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="password"
            label="Contraseña"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <Button text="Enviar" /> */}
        </Form>
        <Button text="Enviar" onClick={loginUser} />
      </HeroBlock>
    </Layout>
  );
}
