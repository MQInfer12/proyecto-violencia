import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
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
  const handleSaveData = () => {
    swal("Correcto!", "Se realizo con exito tu publicacion", "success");
  };
  return (
    <Container>
      <ContainerSoon>
        <Form action="">
          <Label htmlFor="">Cuentanos tu historia</Label>
          <textarea name="description" cols="20" rows="10"></textarea>
          <Button onClick={() => handleSaveData()}>Publicar</Button>
        </Form>
      </ContainerSoon>
    </Container>
  );
};

export default AgregarHistoria;
