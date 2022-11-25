import React from "react";
import styled from "styled-components";
import { useIdiom } from "../context/idiomContext";
import LLuvia from "../img/lluvia.png";
import LLuvia2 from "../img/lluvia2.png";
import LLuvia3 from "../img/lluvia3.png";
import Sol from "../img/sol.png";

const Climate = () => {
  const { handleIdioma, idioma } = useIdiom();

  return (
    <Div>
      <Card>
        <Divcaja>
          <div>
            <H1grados>22º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src={Sol} alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>
            {idioma == "Español"
              ? " Bolivia-Cochabamba"
              : "Buliwya-llajtamante"}
          </Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>23º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src={LLuvia} alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>
            {idioma == "Español"
              ? "Bolivia-Santa Cruz"
              : "Buliwya-Santa Cruz"}
          </Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>15º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src={LLuvia2} alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>
            {idioma == "Español" ? "Bolivia-Potosi" : "Buliwya-Potosi"}
          </Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>10º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src={LLuvia} alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>
            {idioma == "Español" ? "Bolivia-Oruro" : "Buliwya-Oruro "}
          </Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>19º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src={LLuvia3} alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>
            {idioma == "Español" ? "Bolivia la paz" : "Buliwya La Paz "}
          </Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>20º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src={Sol} alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>
            {idioma == "Español"
              ? "Bolivia chuquisica"
              : "Buliwya chuquisaca "}
          </Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>22º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src={Sol} alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>
            {idioma == "Español" ? "Bolivia pando" : "Buliwya Pando "}
          </Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>30º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src={Sol} alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>
            {idioma == "Español" ? "Bolivia beni" : "Buliwya Beni "}
          </Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>32º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src={Sol} alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>
            {idioma == "Español" ? "Bolivia-Tarija" : "Buliwya Tarija"}
          </Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
    </Div>
  );
};
export default Climate;
const Div = styled.div`
background-color:#BFD3D5;
width: 100%;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-around;
 padding: 0 200px 100px;
`;
const Card = styled.div`
  min-width: 300px;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  background: #fefefe;
  border-radius: 10px;
  padding: 20px;
`;
const Divcaja = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const Divcaja1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const H1grados = styled.h1``;
const Ptiempo = styled.p``;
const Pais = styled.p``;
const Pgrados = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;
const Img=styled.img`
    width: 50px;
    height: 50px;
`;


