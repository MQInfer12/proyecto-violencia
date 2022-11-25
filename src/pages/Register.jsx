import React from 'react'
import styled from 'styled-components'
import DesconocidoImg from '../img/desconocido.png'

const Container=styled.div`
display: grid;
height: 100vh;
place-content: center;
background: linear-gradient(rgb(70%, 0%, 30%), rgb(100%, 0%, 60%));
`
const ContainerImg =styled.div`
display: flex;
justify-content: center;
`

const Register = () => {
  return (
    <Container>
      <div>
        <img src={DesconocidoImg} alt="" />
      </div>
    </Container>
  )
}

export default Register

//nombre, numero d etelfono, ci, direccion exacta, vivienda, numero de emeergencia