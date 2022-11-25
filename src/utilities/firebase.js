import { collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc, where, onSnapshot } from 'firebase/firestore';

export const editDoc = async (collection, name, obj) => {
  await setDoc(doc(getFirestore(), collection, name), obj);
}

export const getUser = async (nombre, password) => {
  const q = query(collection(getFirestore(), "users"), where("nombre", "==", nombre), where("password", "==", password));
  try {
    const querySnapshot = await getDocs(q);
    if(querySnapshot.docs[0]) {
      return querySnapshot.docs[0].data();
    }
  } catch (e) {
    console.log(e);
  }
}

export const getAllUsers = async () => {
  const q = query(collection(getFirestore(), "users"));
  try {
    const querySnapshot = await getDocs(q);
    const allAudios = [];
    if(querySnapshot.docs[0]) {
      querySnapshot.docs.forEach(doc => {
        if(doc.data().ci != 1) {
          const aud = doc.data();
          allAudios.push(aud);
        }
      });
      return allAudios;
    }
  } catch (e) {
    console.log(e);
  }
}

export const getAllPublicaciones = async () => {
  const q = query(collection(getFirestore(), "publicaciones"));
  try {
    const querySnapshot = await getDocs(q);
    const allAudios = [];
    if(querySnapshot.docs[0]) {
      querySnapshot.docs.forEach(doc => {
        if(doc.data().ci != 1) {
          const aud = doc.data();
          allAudios.push(aud);
        }
      });
      return allAudios;
    }
  } catch (e) {
    console.log(e);
  }
}


export const getAudios = async (nombre, password) => {
  const q = query(collection(getFirestore(), "users"), where("nombre", "==", nombre), where("password", "==", password));
  try {
    const querySnapshot = await getDocs(q);
    if(querySnapshot.docs[0]) {
      return querySnapshot.docs[0].data();
    }
  } catch (e) {
    console.log(e);
  }
}

export const removeDoc = async (id) => {
  await deleteDoc(doc(getFirestore(), "games", id));
}