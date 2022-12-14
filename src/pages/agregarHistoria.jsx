import React, { useState } from "react";
import styled from "styled-components";
import { editDoc, getUser } from "../utilities/firebase";
import { v4 as uuidv4 } from "uuid";
import { useUserContext } from "../context/userContext";

const Container = styled.div`
  height: calc(100vh - 100px);
  background: linear-gradient(#bfd3d5, #dde4e6);
  display: grid;
  place-content: center;
`;
const ContainerSoon = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 5px 10px #888888;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Label = styled.label`
  text-align: center;
  font-size: 22px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const Button = styled.button`
  background-color: #008000;
  color: #fff;
  padding: 10px;
  border: 15px;
  margin-top: 12px;
  &:hover {
    cursor: pointer;
    background-color: #015301;
  }
`;
const AgregarHistoria = () => {
  const [history, setHistory] = useState("");
  const { user } = useUserContext();
  const [datos, setDatos] = useState({
    nombre: user.nombre,
    history: history,
    ci: user.ci
  });

  const actualizarPublicaciones = async () => {
    const adm = await getUser("admin", "123456");
    adm.publicaciones++;
    editDoc("users", "1", adm);
  }

  const handleSaveData = (e) => {
    e.preventDefault();
    editDoc("publicaciones", user.ci, datos);
    actualizarPublicaciones();
    swal("Correcto!", "Se realizo con exito tu publicacion", "success");
  };

  return (
    <Container>
      <ContainerSoon>
        <Form action="">
          <Label htmlFor="">Cuentanos tu historia</Label>
          <textarea
            value={datos.history}
            onChange={(e) =>
              setDatos((old) => ({ ...old, history: e.target.value }))
            }
            name="description"
            cols="20"
            rows="10"
          ></textarea>
          <Button onClick={(e) => handleSaveData(e)}>Publicar</Button>
        </Form>
      </ContainerSoon>
    </Container>
  );
};

export default AgregarHistoria;
