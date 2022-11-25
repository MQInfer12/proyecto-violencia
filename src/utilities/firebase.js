import { collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore';

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

export const removeDoc = async (id) => {
  await deleteDoc(doc(getFirestore(), "games", id));
}