import React from "react";
import styled from "styled-components";
import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Img3 from "../img/img3.jpg";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    text-transform: uppercase;
    font-size: 24px;
  }
  p {
    font-size: 18px;
    font-weight: bold;
  }
  span {
    display: block;
  }
  div {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  img {
    height: 250px;
  }
`;
const Instrucciones = () => {
  return (
    <Container>
      <h2>Pasos para tener la aplicacion</h2>
      <div>
        <p>Paso 1:</p>
        <span>Dar a los 3 puntitos y a la opcion agregar pantalla</span>
        <img src={Img1} alt="" />
      </div>
      <div>
        <p>Paso 2:</p>
        <span>Nos aparecera una ventana como esta</span>
        <img src={Img2} alt="" />
      </div>
      <div>
        <p>Paso3 :</p>
        <span>Damos clic a agregar</span>
        <img src={Img3} alt="" />
      </div>
    </Container>
  );
};

export default Instrucciones;
