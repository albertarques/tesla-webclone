import Layout from "../components/Layout";
import HeroBlock from "../components/HeroBlock";
import Form from "../components/Form";
import Input from "../components/bites/Input";
import Button from "../components/bites/Button";

import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, loginUser } from "../lib/Firebase";
import { GoToLoggedIn } from "../utils/Routes";

export default function Login() {
  // On every page that need user, loading or error, we need to refer useStateAuth
  const [user] = useAuthState(auth);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  if (!user) {
    return (
      <Layout>
        <HeroBlock form picture="/img/hero@2.jpg" alt="Modelo S en color rojo">
          <Form title="Login" submit={(e) => loginUser(e, email, password)}>
            <Input
              id="user"
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              label="Contraseña"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button text="Enviar" />
          </Form>
        </HeroBlock>
      </Layout>
    );
  } else {
    {
      GoToLoggedIn();
    }
  }
}
