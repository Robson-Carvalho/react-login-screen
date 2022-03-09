import { useContext } from "react";

import { Body, Header, Main, Container, Button, Footer } from "./styles";

import { AuthContext } from "../../contexts/auth";

import exitIcon from "../../assets/exit.svg";

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Body>
      <Header>
        <nav>
          <img
            src="https://moodle.ifbaiano.edu.br/moodle/pluginfile.php/1/theme_moove/logo/1631309130/marca-if-baiano-horizontal.png"
            alt="logo do ifbaiano"
          />
          <button onClick={handleLogout}>
            <img src={exitIcon} alt="logo de output" />
          </button>
        </nav>
      </Header>
      <Main>
        <Container>
          <h2>Seja bem-vindo ao SRA, {user.name}!</h2>
          
          <Button>Requisitar Almoço</Button>
        </Container>
      </Main>
      <Footer>
        <h4>Todos os direitos reservados &copy; 2022</h4>
      </Footer>
    </Body>
  );
};

export default Home;
