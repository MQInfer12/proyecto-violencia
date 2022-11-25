import React from 'react'
import styled from 'styled-components'

const Informative = () => {
    return (
        <div>
        <Divfondo>  
          
          <H1>Informativo</H1>
              <Divcontainer>              
                  <Divcard>
                    
                     <figure>
                       <Imgcard src="https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/What%20We%20Do/VAW/types-of-violence.png" />
                     </figure>
                     <Divcontenido>
                      <H1>Violencia</H1>
                      <P>el uso deliberado de la fuerza física o el poder, ya sea en grado de amenaza o efectivo, contra uno mismo, otra persona o un grupo o comunidad, que cause o tenga muchas probabilidades de causar lesiones, muerte, daños psicológicos, trastornos del desarrollo o privaciones.</P>                     
                     </Divcontenido>
                  </Divcard>
                  <Divcard>
                    
                     <figure>
                       <Imgcard src="src\img\informativo1.jpg" />
                     </figure>
                     <Divcontenido>
                      <H1>Maltrato</H1>
                      <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut consequuntur libero natus eaque non expedita harum rem, corrupti dolores numquam consectetur excepturi aperiam exercitationem unde magni doloribus nesciunt accusamus.</P>                     
                     </Divcontenido>
                  </Divcard>
                  <Divcard>
                    
                     <figure>
                       <Imgcard src="src\img\informativo1.jpg" />
                     </figure>
                     <Divcontenido>
                      <H1>Maltrato</H1>
                      <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut consequuntur libero natus eaque non expedita harum rem, corrupti dolores numquam consectetur excepturi aperiam exercitationem unde magni doloribus nesciunt accusamus.</P>                     
                     </Divcontenido>
                  </Divcard>
                  <Divcard>
                    
                     <figure>
                       <Imgcard src="src\img\informativo1.jpg" />
                     </figure>
                     <Divcontenido>
                      <H1>Maltrato</H1>
                      <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut consequuntur libero natus eaque non expedita harum rem, corrupti dolores numquam consectetur excepturi aperiam exercitationem unde magni doloribus nesciunt accusamus.</P>                     
                     </Divcontenido>
                  </Divcard>
                  <Divcard>
                    
                     <figure>
                       <Imgcard src="src\img\informativo1.jpg" />
                     </figure>
                     <Divcontenido>
                      <H1>Maltrato</H1>
                      <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut consequuntur libero natus eaque non expedita harum rem, corrupti dolores numquam consectetur excepturi aperiam exercitationem unde magni doloribus nesciunt accusamus.</P>                     
                     </Divcontenido>
                  </Divcard>
              </Divcontainer>
            
          
        </Divfondo>

        </div>
      );
}

export default Informative


const Divfondo = styled.div`
  background-color:#BFD3D5;
`;
const Divcard = styled.div`
  width: 350px;
  margin: 20px;
  display: inline-block;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
  cursor: default;
  transition: all 400ms ease;
`;
const Imgcard = styled.img`
  
  width: 100%;
  height: 210px;
`;
const Divcontainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content: space-around;
 
`;
const Divcontenido = styled.div`
  padding: 15px;
  text-align: center;
`;
const H1 = styled.h1`
font-size: 50px;
 text-align: center;
  margin:10px;
  color: #000;
`;
const P = styled.p`
  line-height: 1.5;
  color: #6a6a6a;
`;