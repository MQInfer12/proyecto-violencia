import React, { useState } from "react";
import styled from "styled-components";
import DesconocidoImg from "../img/desconocido.png";
import { Link } from "react-router-dom";
import { editDoc } from "../utilities/firebase";
import { useIdiom } from "../context/idiomContext";

const Container = styled.div`
  display: grid;
  height: calc(100vh - 100px);
  place-content: center;
  background: linear-gradient(#bfd3d5, #dde4e6);
`;
const ContainerSoon = styled.div`
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
const Form = styled.div`
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

const P = styled(Link)`
  color: white;
  font-size: 14px;
  text-align: end;
  list-style: none;
  text-decoration: none;
  margin-top: 12px;
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

const Register = () => {
  const { idioma } = useIdiom();
  const [datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    ci: "",
    password: "",
    direccion: "",
    vivienda: "",
    emergencia: "",
  });

  const Registrarse = async () => {
    editDoc("users", datos.ci, {...datos, audios: []});
    alert("Se registró correctamente");
    setDatos({
      nombre: "",
      telefono: "",
      ci: "",
      password: "",
      direccion: "",
      vivienda: "",
      emergencia: "",
    });
  };

  return (
    <Container>
      <ContainerSoon>
        <ContainerImg>
          <Img src={DesconocidoImg} alt="" />
        </ContainerImg>
        <Form action="">
          <Input
            placeholder="Nombre"
            type="text"
            value={datos.nombre}
            onChange={(e) =>
              setDatos((old) => ({ ...old, nombre: e.target.value }))
            }
          />
          <Input
            placeholder="Numero de telefono"
            type="text"
            value={datos.telefono}
            onChange={(e) =>
              setDatos((old) => ({ ...old, telefono: e.target.value }))
            }
          />
          <Input
            placeholder="Ci"
            type="text"
            value={datos.ci}
            onChange={(e) =>
              setDatos((old) => ({ ...old, ci: e.target.value }))
            }
          />
          <Input
            placeholder="Contraseña"
            type="text"
            value={datos.password}
            onChange={(e) =>
              setDatos((old) => ({ ...old, password: e.target.value }))
            }
          />
          <Input
            placeholder="Direccion exacta"
            type="text"
            value={datos.direccion}
            onChange={(e) =>
              setDatos((old) => ({ ...old, direccion: e.target.value }))
            }
          />
          <Input
            placeholder="Vivienda"
            type="text"
            value={datos.vivienda}
            onChange={(e) =>
              setDatos((old) => ({ ...old, vivienda: e.target.value }))
            }
          />
          <Input
            placeholder="Numero de emergencia"
            type="text"
            value={datos.emergencia}
            onChange={(e) =>
              setDatos((old) => ({ ...old, emergencia: e.target.value }))
            }
          />
          <P to="/login">Iniciar sesion</P>
          <Button onClick={Registrarse}>
            {idioma == "Español" ? "Guardar Datos" : "Guardar datos manta"}
          </Button>
        </Form>
      </ContainerSoon>
    </Container>
  );
};

export default Register;
