import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/userContext';
import { useIdiom } from "../../context/idiomContext";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  const { handleIdioma, idioma } = useIdiom();
  return (
    <Nav>
      <Title> {idioma == "Español" ? "Clima" : "Climatay"}</Title>
      <LinkContainer>
        {
          Object.keys(user).length === 0 ? 
          <>
            <LinkStyled to="/">
              {idioma == "Español" ? "Inicio" : "Iniciomanta"}
            </LinkStyled>
            <LinkStyled to="#">
              {idioma == "Español" ? "Instrucciones" : "Instruccionesmanta"}
            </LinkStyled>
            <LinkStyled to="/login">
              {idioma == "Español" ? "Registrate" : "Registratemanta"}
            </LinkStyled> 
            <LinkStyled onClick={handleIdioma}>
              {idioma === "Español" ? "Quechua" : "Español"}
            </LinkStyled>
          </> :
          <>
            <LinkStyled to="/login" onClick={() => setUser({})}>
              {idioma === "Español" ? "Cerrar sesión" : "Whisk'ana"}
            </LinkStyled>
            <LinkStyled onClick={handleIdioma}>
              {idioma === "Español" ? "Quechua" : "Español"}
            </LinkStyled>
          </>
        }
        
        
        
      </LinkContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 100px;
  width: 100%;
  background-color: #ffffff;
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
