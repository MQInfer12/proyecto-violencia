import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';

const Navbar = () => {
  const { user, setUser } = useUserContext();

  return (
    <Nav>
      <Title>Clima</Title>
      <LinkContainer>
        {
          Object.keys(user).length === 0 ? 
          <>
            <LinkStyled to="/">Inicio</LinkStyled>
            <LinkStyled to="#">Instrucciones</LinkStyled>
            <LinkStyled to="/login">Regístrate</LinkStyled> 
          </> :
          <LinkStyled onClick={() => setUser({})} to="/login">Cerrar sesion</LinkStyled>
        }
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
`;