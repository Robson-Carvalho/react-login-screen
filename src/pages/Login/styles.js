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
  height: auto;

  nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
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

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

export const Form = styled.form`
  width: 80%;
  max-height: 500px;
  padding: 10rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #495057;
  }

  input {
    width: 360px;
    height: 45px;
    border: none;
    outline: none;
    font-size: 16px;
    background: #f5f5fa;
    border: 1px solid #ced4da;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 10px;
    transition: 0.1s;

    &::placeholder {
      padding-left: 10px;
      opacity: 0.6;
    }

    &:focus {
      border: 2px solid #3d9a2c;
    }
  }
`;

export const Actions = styled.div`
  margin-top: 50px;
`;

export const Button = styled.button`
  width: 280px;
  height: 40px;
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
