import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/userContext";
import { editDoc, getAllAudios, getAudios, getUser } from "../utilities/firebase";
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';

const Home = () => {
  const [audios, setAudios] = useState([]);
  const { user } = useUserContext();
  const msg = `¡Soy ${user.nombre} necesito ayuda! mi direccion es ${user.direccion}, la casa ${user.vivienda}, mi CI es ${user.ci}, llamen a mi numero de emergencia ${user.emergencia}`;

  const handleHelp = () => {
    window.open(
      `https://api.whatsapp.com/send/?phone=59176407344&text=${msg}`,
      "_blank"
    );
  };

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      return console.log('Error: ', error);
    };
  }

  let audioIN = { audio: true };
  navigator.mediaDevices
    .getUserMedia(audioIN)
    .then((mediaStreamObj) => {
      let start = document.getElementById("btnStart");
      let stop = document.getElementById("btnStop");
      let playAudio = document.getElementById("adioPlay");
      let mediaRecorder = new MediaRecorder(mediaStreamObj);

      start.addEventListener("click", function () {
        mediaRecorder.start();
      });

      // Stop event
      stop.addEventListener("click", function () {
        mediaRecorder.stop();
      });

      mediaRecorder.ondataavailable = function (ev) {
        dataArray.push(ev.data);
      };

      let dataArray = [];

      mediaRecorder.onstop = function () {
        let audioData = new Blob(dataArray, { type: "audio/mp3;" });
        getBase64(audioData, async (res) => {
          const doc = await getUser(user.nombre, user.password);
          const adm = await getUser("admin", "123456");
          if(doc) {
            doc.audios.push(res);
            adm.audios++;
            editDoc("users", user.ci, doc);
            editDoc("users", "1", adm);
          };
        });
        dataArray = [];
        let audioSrc = window.URL.createObjectURL(audioData);
        playAudio.src = audioSrc;
      };
    })
    .catch(function (err) {
      console.log(err.name, err.message);
    });

  useEffect(() => {
    if(user.ci === "1") {
      const llenarAudios = async () => {
        const unsub = onSnapshot(
          doc(getFirestore(), "users", user.ci),
          async (doc) => {
            const auds = await getAllAudios();
            setAudios(auds);
          }
        );
        return () => {
          unsub();
        };
      };
  
      llenarAudios();
    } else {
      const llenarAudios = async () => {
        const unsub = onSnapshot(
          doc(getFirestore(), "users", user.ci),
          async (doc) => {
            const aud = doc.data();
            setAudios(aud.audios);
          }
        );
        return () => {
          unsub();
        };
      };
  
      llenarAudios();
    }
  }, []);

  return (
    <Container>
      {
        user.ci === "1" ?
        <>
          <p>Audios de las personas:</p>
          {
            audios.map((v, i) => (
              <div key={i}>
                <p>Nombre: {v.nombre}</p>
                <p>Numero de emergencia: {v.emergencia}</p>
                <p>Telefono: {v.telefono}</p>
                <p>Direccion: {v.direccion}</p>
                <p>Vivienda: {v.vivienda}</p>
                {
                  v.audios.map((v, j) => (
                    <audio key={j} controls src={v}></audio>
                  ))
                }
              </div>
            ))
          }
        </> :
        <>
          <button onClick={handleHelp}>Ayuda</button>

          <div style={{display: "flex", gap: "20px"}}>
            <button id="btnStart">EMPEZAR A GRABAR</button>
            <button id="btnStop">TERMINAR DE GRABAR</button>
          </div>

          <p>Ultimo audio: </p>
          <audio id="adioPlay" controls></audio>

          <p>Audios anteriores:</p>
          {
            audios.map((v, i) => (
              <audio key={i} controls src={v}></audio>
            ))
          }
        </>
      }
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 10px;
  height: calc(100vh - 100px);
  background: linear-gradient(#bfd3d5, #dde4e6);
`;
