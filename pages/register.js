import Layout from "../components/Layout";
import Form from "../components/Form";
import Input from "../components/bites/Input";
import Button from "../components/bites/Button";
import { useState } from "react";
import HeroBlock from "../components/HeroBlock";
import { registerUser } from "../lib/Firebase";
import { useRouter } from "next/router";
import { GoToRegistered } from "../utils/Routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/Firebase";

export default function Register() {
  // On every page that need user, loading or error, we need to refer useStateAuth
  const [user] = useAuthState(auth);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [valPassword, setValPassword] = useState();

  if (user) {
    GoToRegistered();
  }
  if (!user) {
    return (
      <Layout>
        <HeroBlock form picture="/img/hero@2.jpg" alt="Modelo S en color rojo">
          <Form
            submit={(e) => registerUser(e, email, password, valPassword)}
            title="Registro"
          >
            <Input
              id="user"
              name="email"
              type="email"
              label="Introduzca su email"
              minLength="10"
              maxLength="20"
              autocomplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              name="password"
              type="password"
              label="Introduzca su contraseña"
              minLength="10"
              maxLength="20"
              autocomplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              id="valPassword"
              name="valPassword"
              type="password"
              label="Repita su contraseña"
              minLength="10"
              maxLength="20"
              autocomplete="off"
              onChange={(e) => setValPassword(e.target.value)}
            />
            <Button text="Enviar" />
          </Form>
        </HeroBlock>
      </Layout>
    );
  }
}
