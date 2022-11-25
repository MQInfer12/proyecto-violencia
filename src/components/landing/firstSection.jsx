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
  padding: 100px;
`

const ClimaContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #EFEFEF;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const TextContainer = styled.div`
  
`;

const Title = styled.div`
  display: flex;
  gap: 20px;
`;

const Titlecontainer = styled.h2`
  font-size: 32px;
  font-weight: 700;
  padding-left: 100px;
`;

const ImageContainer = styled.div`
  background-color: #DDE4E6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgClima = styled.img`
  transform: scale(1.3);
`;

const ImgMini = styled.img`
  object-fit: cover;
`;