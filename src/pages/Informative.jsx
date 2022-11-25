import React from 'react'
import styled from 'styled-components'
import { useIdiom } from "../context/idiomContext";

const Informative = () => {
    const { idioma } = useIdiom();
    return (
        <div>
        <Divfondo>  
          
          <H1>Informativo</H1>
              <Divcontainer>              
                  <Divcard>
                    
                     <figure>
                       <Imgcard src="src/img/violencia1.jpeg" />
                     </figure>
                     <Divcontenido>
                      <H1>{idioma == "Español" ? "Violencia" : "Makay"}</H1>
                      <P>
                      {idioma == "Español" ? "El uso deliberado de la fuerza física o el poder, ya sea en grado de amenaza o efectivo, contra uno mismo, otra persona o un grupo o comunidad, que cause o tenga muchas probabilidades de causar lesiones, muerte, daños psicológicos, trastornos del desarrollo o privaciones." : "Maqakuy runasta, kay tukuy runas ruanqo, phiñakuy, qanta makasunku chay qan rinaiky wasi llanapay, chayqa qan japinaky umaiqypi"}
                        </P>                     
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
                       <Imgcard src="src/img/violenciacontralamujer.jpeg" />
                     </figure>
                     <Divcontenido>
                      <H1>
                      {idioma == "Español" ? "Violencia contra la mujer" : "Makakuy warmita"}
                      </H1>
                      <P>
                      {idioma == "Español" ? "La violencia contra las mujeres y las niñas es una de las violaciones más generalizadas de los derechos humanos en el mundo. Se producen muchos casos cada día en todos los rincones del planeta. Este tipo de violencia tiene graves consecuencias físicas, económicas y psicológicas sobre las mujeres y las niñas, tanto a corto como a largo plazo, al impedirles participar plenamente y en pie de igualdad en la sociedad." : "Makay warmita sapakuty tukuy ruaqasmanta, Runa simi maqan warmita y wak'achin sapa kuty"}</P>                     
                     </Divcontenido>
                  </Divcard>
                  <Divcard>
                    
                     <figure>
                       <Imgcard src="src/img/violencia2.png" />
                     </figure>
                     <Divcontenido>
                      <H1>
                      {idioma == "Español" ? "Malay warmy y kari" : "Makakuy warmita"}
                      </H1>
                      <P>
                      {idioma == "Español" ? "La violencia de género se refiere a los actos dañinos dirigidos contra una persona o un grupo de personas en razón de su género. Tiene su origen en la desigualdad de género, el abuso de poder y la existencia de normas dañinas. El término se utiliza principalmente para subrayar el hecho de que las diferencias estructurales de poder basadas en el género colocan a las mujeres y niñas en situación de riesgo frente a múltiples formas de violencia." : "Makakuy warmita kariwan, tukuy maqakunko yskayniqu, kaytaqa tuquyman challaman qan ninaqi pimanqis"}</P>                     
                     </Divcontenido>
                  </Divcard>
                  <Divcard>
                    
                     <figure>
                       <Imgcard src="src/img/violencia3.png" />
                     </figure>
                     <Divcontenido>
                      <H1>Sobreviviente de violencia
                      {idioma == "Español" ? "Makakuy ask'a" : "Makakuy warmita"}
                      </H1>
                      <P>Este término se refiere a cualquier persona que haya experimentado violencia sexual o de género. Su significado es similar al de “víctima”, aunque suele preferirse “sobreviviente” frente a este último porque implica resiliencia.
                      {idioma == "Español" ? "Este término se refiere a cualquier persona que haya experimentado violencia sexual o de género. Su significado es similar al de “víctima”, aunque suele preferirse “sobreviviente” frente a este último porque implica resiliencia." : "Kay ruaska tukuy llachayku makakuy "}</P>                     
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