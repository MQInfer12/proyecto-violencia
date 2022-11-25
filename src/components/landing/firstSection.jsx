import React from 'react';
import styled from 'styled-components';
import WeatherImg from '../../assets/landing/weather.png';
import MiniImg from '../../assets/landing/mini.png';

const FirstSection = () => {
  return (
    <Container>
      <ClimaContainer>
        <TextContainer>
          <Titlecontainer>
            <Title>
              <ImgMini src={MiniImg} />
              Clima en Bolivia
            </Title>
          </Titlecontainer>
          <TextClima>
            ¡Clima y tiempo en toda Bolivia!
          </TextClima>
          <Description>
            ¡Descubre el clima en cada departamento del país y consigue buenos datos del clima en estos momentos!
          </Description>
          <Button>Descarga ahora</Button>
        </TextContainer>
        <ImageContainer>
          <ImgClima src={WeatherImg} />
        </ImageContainer>
      </ClimaContainer>
    </Container>
  )
}

export default FirstSection

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #BFD3D5;
  padding: 200px;
`

const ClimaContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #EFEFEF;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
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
  background-color: #DDE4E6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgClima = styled.img`
  transform: scale(0.8);
`;

const ImgMini = styled.img`
  object-fit: cover;
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
  width: 500px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #27737D;

  &:hover {
    background-color: #27737D;
    color: #FFFFFF;
  }
`;