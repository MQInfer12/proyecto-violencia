import React from "react";
import styled from "styled-components";
import { useIdiom } from "../context/idiomContext";


import Facebook from '../img/facebook.png'
const Footer = () => {
    const { idioma } = useIdiom();
  return (
    <div>
      <Foter>
       <Divfoot>
         <Divcaja>
         <h1>Redes Sociales</h1>
           <Alogo href="https://www.facebook.com/PoliciaBolivianaCochabamba"><Img src={Facebook} alt="" /></Alogo>
          
         </Divcaja>
         <Divcaja>
             <h1>EPI</h1>
           <P>
             EPI Nº 1 Coña Coña es<a href="#"> 8001401850.</a>
             <br />
           </P>
           <P>
             {" "}
             EPI Nº 2 Pucara es <a href="#"> 800140186.</a>
             <br />{" "}
           </P>
           <P>
             EPI Nº 3 Jaihuayco es <a href="#"> 800140187.</a>
             <br />
           </P>
         </Divcaja>
         <Divcaja>
           <h1>
           {idioma == "Español" ? "Contactos" : "Kayman wajllay"}
           </h1>
           <P>
             
             {idioma == "Español" ? "Fuerza Especial de Lucha Contra la Violencia " : "Llanapay rurasta maqasqasta"}<a href="#"> 77933274- 800140195</a>
             <br />
           </P>
           <P>
             {" "}
             
             {idioma == "Español" ? "Fuerza Especial de Lucha Contra la Violencia " : "Llanapay rurasta maqasqasta"}
             <br /> Telf.:<a href="#">4-4226462</a>
             </P>        
         </Divcaja>
       </Divfoot>
       <Divv>
        <A href="https://www.cookiebot.com/es/ley-de-cookies/#:~:text=%C2%BFQu%C3%A9%20significa%20la%20ley%20de,prop%C3%B3sitos%20y%20de%20qu%C3%A9%20manera.">Terminos Cookies</A>
       <A href="https://drive.google.com/file/d/1EkqyoTVGKGdKs5SmGitSuoFlyG8kO_LP/view?usp=share_link" target="_blank">Terminos y condiciones</A>
       </Divv>
      </Foter>
    </div>
  );
};
export default Footer;

const Foter = styled.footer`
border-top: 1px solid rgba(0,0,0,.3);
  background: url(src/img/Footerr.png);
  width: 100%;
  
  
`;
const Divfoot=styled.div`
  display: flex;
  justify-content: space-around;  
  flex-wrap: wrap;
`;
const P = styled.p`
  margin: 10px;
`;
const Divcaja = styled.div`
  text-align: justify;
  width: 40vh;
`;
const Img=styled.img`
  width:50px;
  height  :50px ;
`;
const Divv=styled.div`
border-top: 1px solid rgba(0,0,0,.2);
  margin-left  :50px ;
  padding: 5px;

`;
const A=styled.a`
padding: 10px;
margin: 10px;
`;
const Alogo=styled.a`
cursor: pointer;
`;