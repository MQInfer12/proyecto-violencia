import React from "react";
import styled from "styled-components";
import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";
import Img3 from "../img/img3.jpg";
import { useIdiom } from "../context/idiomContext";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    text-transform: uppercase;
    font-size: 24px;
    text-align: center;
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
  const { idioma } = useIdiom();
  return (
    <Container>
      <h2>
      {idioma == "Español" ? "Pasos para tener la aplicaciony" : "Llachachy kayta"}
      </h2>
      <div>
        <p>Paso 1:
          
          {idioma == "Español" ? "Paso 1:" : "Uj:"}
        </p>
        <span>
        {idioma == "Español" ? "Dar a los 3 puntitos y a la opcion agregar pantalla" : "ñity kinsa puntitusman chantary rikuchy qawana "}
        </span>
        <img src={Img1} alt="" />
      </div>
      <div>
        <p>Paso 2:
        {idioma == "Español" ? "Paso 2:" : "Iskay:"}
        </p>
        <span>
        {idioma == "Español" ? "Nos aparecera una ventana como esta" : "Rikyrinantian kayjina"}
        </span>
        <img src={Img2} alt="" />
      </div>
      <div>
        <p>
          {idioma == "Español" ? "Tres:" : "Kinsa:"}
        </p>
        <span>
        {idioma == "Español" ? "Damos clic a agregar" : "ñity jaichapi"}
        </span>
        <img src={Img3} alt="" />
      </div>
    </Container>
  );
};

export default Instrucciones;
