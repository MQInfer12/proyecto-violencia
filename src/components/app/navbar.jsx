import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Nav>
      <Title>Clima</Title>
      <LinkContainer>
        <LinkStyled to="/">Inicio</LinkStyled>
        <LinkStyled to="#">Instrucciones</LinkStyled>
        <LinkStyled to="/login">Regístrate</LinkStyled>
      </LinkContainer>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  height: 100px;
  width: 100%;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
`;

const LinkStyled = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
  
  &:hover {
    
  }
`;