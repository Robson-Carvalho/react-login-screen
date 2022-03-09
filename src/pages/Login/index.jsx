import { useState, useContext } from "react";
import {
  Body,
  Header,
  Footer,
  Main,
  Form,
  Field,
  Actions,
  Button,
} from "./styles";

import { AuthContext } from "../../contexts/auth";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("page login submit", { user, password });
    login(user, password);
  };

  return (
    <Body>
      <Header>
        <nav>
          <img
            src="https://moodle.ifbaiano.edu.br/moodle/pluginfile.php/1/theme_moove/logo/1631309130/marca-if-baiano-horizontal.png"
            alt="logo do ifbaiano"
          />
        </nav>
      </Header>
      <Main>
        <h1>Login SRA</h1>
        <Form onSubmit={handleLogin} autocomplete="off">
          <Field>
            <label htmlFor="user">Matrícula</label>
            <input
              type="text"
              id="user"
              name="user"
              placeholder="Matrícula"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Field>
          <Field>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
          <Actions>
            <Button type="submit">Entrar</Button>
          </Actions>
        </Form>
      </Main>
      <Footer>
        <h4>Todos os direitos reservados &copy; 2022</h4>
      </Footer>
    </Body>
  );
};

export default Login;
