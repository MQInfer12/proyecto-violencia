import React from "react";
import styled from "styled-components";

const Climate = () => {
  return (
    <Div>
      <Card>
        <Divcaja>
          <div>
            <H1grados>22º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <div>
            <Img src="src/img/sol.png" alt="" />
          </div>
        </Divcaja>
        <Divcaja1>
          <Pais>Bolivia-Cochabamba</Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
         <div>
             <H1grados>30º</H1grados>
             <Ptiempo>Verano</Ptiempo>
         </div>
          <div>
            <Img src="src/img/sol.png" alt="" />
          </div>
        </Divcaja>
        <Divcaja1>
          <Pais>Bolivia-Santa Cruz</Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>15º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <div>
            <Img src="src/img/lluvia.png" alt="" />
          </div>
        </Divcaja>
        <Divcaja1>
          <Pais>Bolivia-Potosi</Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>10º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>

          <Img src="src/img/nieve.png" alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>Bolivia-Oruro</Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>19º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src="src/img/lluvia2.png" alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>Bolivia-La paz</Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>20º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src="src/img/lluvia3.png" alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>Bolivia-Chuquisaca</Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>28º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src="src/img/sol.png" alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>Bolivia-Pando</Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
          <div>
            <H1grados>30º</H1grados>
            <Ptiempo>Verano</Ptiempo>
          </div>
          <Img src="src/img/sol.png" alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>Bolivia-Beni</Pais>
          <Pgrados>20º ~ 29</Pgrados>
        </Divcaja1>
      </Card>
      <Card>
        <Divcaja>
         <div>
             <H1grados>32º</H1grados>
             <Ptiempo>Verano</Ptiempo>
         </div>
          <Img src="src/img/sol.png" alt="" />
        </Divcaja>
        <Divcaja1>
          <Pais>Bolivia-Tarija</Pais>
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
