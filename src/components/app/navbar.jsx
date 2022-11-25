import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { useIdiom } from "../../context/idiomContext";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  const { handleIdioma, idioma } = useIdiom();
  return (
    <Nav>
      {Object.keys(user).length === 0 ? (
        <Title> {idioma == "Español" ? "Clima" : "Climatay"}</Title>
      ) : (
        <Title>Ñeke</Title>
      )}
      <LinkContainer>
        {Object.keys(user).length === 0 ? (
          <>
            <LinkStyled to="/">
              {idioma == "Español" ? "Inicio" : "Iniciomanta"}
            </LinkStyled>
            <LinkStyled to="/instrucciones">
              {idioma == "Español" ? "Instrucciones" : "Instruccionesmanta"}
            </LinkStyled>
            <LinkStyled to="/login">
              {idioma == "Español" ? "Registrate" : "Registratemanta"}
            </LinkStyled>
            <LinkStyled onClick={handleIdioma}>
              Ver en {idioma === "Español" ? "Quechua" : "Español"}
            </LinkStyled>
          </>
        ) : (
          <>
            <LinkStyled to="#">
              {idioma == "Español" ? "Instrucciones" : "Instruccionesmanta"}
            </LinkStyled>
            <LinkStyled to="/home">
              {idioma === "Español"
                ? "Ayuda"
                : "Llanapay"}
            </LinkStyled>
            <LinkStyled to="/cuentanos">
              {idioma === "Español"
                ? "Cuentanos tu historia"
                : "Yachachiwa kausaikyta"}
            </LinkStyled>
            <LinkStyled to="/login" onClick={() => setUser({})}>
              {idioma === "Español" ? "Cerrar sesión" : "Whisk'ana"}
            </LinkStyled>
            <LinkStyled onClick={handleIdioma}>
              Ver en {idioma === "Español" ? "Quechua" : "Español"}
            </LinkStyled>
          </>
        )}
      </LinkContainer>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 100px;
  width: 100%;
  padding: 0 100px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 10px 30px;
    height: max-content;
  }
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
  flex-wrap: wrap;
  justify-content: center;
`;
