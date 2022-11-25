import React from "react";
import styled from "styled-components";
import DesconocidoImg from "../img/desconocido.png";
import { Link, NavLink } from "react-router-dom";
const Container = styled.div`
  display: grid;
  height: calc(100vh - 100px);
  place-content: center;
  background: linear-gradient(#bfd3d5, #dde4e6);
`;
const ContainerSoon = styled.div`
  /*  background: rgba(
    255,
    255,
    255,
    0.2
  ); // Make sure this color has an opacity of less than 1 */
  background: #27737d;
  backdrop-filter: blur(8px); // This be the blur
  padding: 35px;
  border-radius: 15px;
  width: 320px;
`;
const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  margin-bottom: 15px;
`;
const Img = styled.img`
  filter: invert(100%) sepia(0%) saturate(7457%) hue-rotate(271deg)
    brightness(104%) contrast(100%);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  margin-top: 10px;
  padding: 10px;
  ::placeholder {
    color: white;
    font-size: 0.8em;
    text-transform: uppercase;
  }
`;
const Button = styled.button`
  margin-top: 15px;
  color: #fff;
  background: linear-gradient(#27737d, #adb3b5);
  padding: 15px;
  border: 1px solid white;
  &:hover {
    cursor: pointer;
    background: linear-gradient(#adb3b5, #27737d);
  }
`;
const P = styled(Link)`
  color: white;
  font-size: 14px;
  text-align: end;
  list-style: none;
  text-decoration: none;
  margin-top: 12px;
`;
const Login = () => {
  return (
    <Container>
      <ContainerSoon>
        <ContainerImg>
          <Img src={DesconocidoImg} alt="" />
        </ContainerImg>
        <Form action="">
          <Input placeholder="Nombre" type="text" name="" id="" />
          <Input placeholder="contraseña" type="text" name="" id="" />
            <P to="/register">Create una cuenta</P>
          <Button>Guardar datos</Button>
        </Form>
      </ContainerSoon>
    </Container>
  );
};

export default Login;
