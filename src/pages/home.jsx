import React from 'react'
import styled from 'styled-components';
import { useUserContext } from '../context/userContext'
import { useIdiom } from "../context/idiomContext";

const Home = () => {
  const { idioma } = useIdiom();
  const { user } = useUserContext();
  const msg =`¡Soy ${user.nombre} necesito ayuda! mi direccion es ${user.direccion}, la casa ${user.vivienda}, mi CI es ${user.ci}, llamen a mi numero de emergencia ${user.emergencia}`

  const handleHelp = () => {
    window.open(`https://api.whatsapp.com/send/?phone=59176407344&text=${msg}`, '_blank');
  }

  return (
    <Container>
      <button onClick={handleHelp}>{idioma == "Español" ? "Ayuda" : "Yanapay"}</button>
    </Container>
  )
}

export default Home

const Container = styled.div`
  display: grid;
  height: calc(100vh - 100px);
  place-content: center;
  background: linear-gradient(#bfd3d5, #dde4e6);
`;