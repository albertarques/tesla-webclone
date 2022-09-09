import Layout from "../components/Layout";
import Form from "../components/Form";
import Input from "../components/bites/Input";
import Button from "../components/bites/Button";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import HeroBlock from "../components/HeroBlock";

export default function Register() {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [ValPassword, setValPassword] = useState();

  const { push } = useRouter();

  // Font: https://github.com/mukulrajpoot262610/dev-case-app
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation email regex
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Username)) {
      return alert("Has introducido una dirección de correo no válida.");
    }
    // Validation password -> valPassword
    if (Password !== ValPassword)
      return alert("Las contraseñas deben coincidir.");

    try {
      await createUserWithEmailAndPassword(auth, Username, Password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
        }
      );
      push("/registered");
    } catch (error) {
      console.log(error.code); // 'auth/network-request-failed'
      console.log(error.message); // 'Firebase: Error (auth/network-request-failed).'
      console.log(error.name); // 'FirebaseError'
      console.log(error.customData); // {}
    }
  };

  return (
    <Layout>
      <HeroBlock form picture="/img/hero@2.jpg" alt="Modelo S en color rojo">
        <Form submit={handleSubmit} title="Registro">
          <Input
            id="user"
            name="email"
            type="email"
            label="Introduzca su email"
            minLength="10"
            maxLength="20"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            id="password"
            name="password"
            type="password"
            label="Introduzca su contraseña"
            minLength="10"
            maxLength="20"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            id="valPassword"
            name="valPassword"
            type="password"
            label="Repita su contraseña"
            minLength="10"
            maxLength="20"
            onChange={(e) => setValPassword(e.target.value)}
          />
          <Button text="Enviar" />
        </Form>
      </HeroBlock>
    </Layout>
  );
}
