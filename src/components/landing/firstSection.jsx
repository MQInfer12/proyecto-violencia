import React from "react";
import styled from "styled-components";
import WeatherImg from "../../assets/landing/weather.png";
import MiniImg from "../../assets/landing/mini.png";
import { useIdiom } from "../../context/idiomContext";

const FirstSection = () => {
  const { handleIdioma, idioma } = useIdiom();

  return (
    <Container>
      <ClimaContainer>
        <TextContainer>
          <Titlecontainer>
            <Title>
              <ImgMini src={MiniImg} />
              {idioma == "Español" ? "Clima en Bolivia" : "Clima Boliviamanta"}
            </Title>
          </Titlecontainer>
          <TextClima>
            {idioma == "Español"
              ? "¡Clima en toda Bolivia!"
              : "Clima tukuy Boliviamanta"}
          </TextClima>
          <Description>
            {idioma == "Español"
              ? "¡Descubre el clima en cada departamento del país y consigue buenos datos del clima en estos momentos!"
              : "Tarinqui kaypi tukuy intista y kapunky sumaj llachainyuj"}
          </Description>
          <Button>
          {idioma == "Español"
              ? "Descarga ahora"
              : "Kaimanta"}
          </Button>
        </TextContainer>
        <ImageContainer>
          <ImgClima src={WeatherImg} />
        </ImageContainer>
      </ClimaContainer>
    </Container>
  );
};

export default FirstSection;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #bfd3d5;
  padding: 100px;

  @media (max-width: 1325px) {
    padding: 50px;
  }
`;

const ClimaContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #efefef;
  padding: 50px;
  display: flex;

  @media (max-width: 1325px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 670px) {
    transform: scale(0.8);
  }
`;

const Title = styled.div`
  display: flex;
  gap: 20px;
  display: flex;
  justify-content: center;
`;

const Titlecontainer = styled.h2`
  font-size: 32px;
  font-weight: 700;
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: #dde4e6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ImgClima = styled.img`
  object-fit: cover;

  @media (max-width: 670px) {
    width: 100%;
  }
`;

const ImgMini = styled.img`
  object-fit: cover;

  @media (max-width: 500px) {
    display: none;
  }
`;

const TextClima = styled.h3`
  font-size: 56px;
  font-weight: 800;
  max-width: 400px;
`;

const Description = styled.p`
  color: rgba(0, 0, 0, 0.6);
  max-width: 400px;
`;

const Button = styled.button`
  height: 50px;
  border-radius: 25px;
  padding: 10px;
  width: 200px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #27737d;

  &:hover {
    background-color: #27737d;
    color: #ffffff;
  }
`;
