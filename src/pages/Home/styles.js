import styled from "styled-components";

export const Body = styled.body`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const Header = styled.header`
  width: 100vw;

  nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: none;
      background-color: #00000000;
      cursor: pointer;

      img {
        width: 32px;
      }
    }
  }
`;

export const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 200px;
`;

export const Button = styled.button`
  width: 280px;
  height: 45px;
  border: none;
  cursor: pointer;
  background: #3d9a2c;
  border-radius: 4px;
  box-shadow: 0px 0px 15px 5px #3d9a2c52;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;

  color: #ffffff;
  transition: 0.2s;
  &:hover,
  &:active {
    filter: brightness(1.1);
  }
`;

export const Footer = styled.footer`
  width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 15px;
  }
`;
