import React from "react";
import styled from "styled-components";
import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Img3 from "../img/img3.jpg";
const Container = styled.div`

`
const Instrucciones = () => {
  return (
    <Container>
      <h2>Pasos para tener la aplicacion</h2>
      <div>
        <p>Paso 1:</p>
        <p>Dar a los 3 puntitos y a la opcion agregar pantalla</p>
        <img src={Img1} alt="" />
      </div>
      <div>
        <p>Paso 2:</p>
        <p>Nos aparecera una ventana como esta</p>
        <img src={Img2} alt="" />
      </div>
      <div>
        <p>Paso3 :</p>
        <p>Damos clic a agregar</p>
        <img src={Img3} alt="" />
      </div>
    </Container>
  );
};

export default Instrucciones;
