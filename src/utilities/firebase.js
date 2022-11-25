import { collection, deleteDoc, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore';

export const editDoc = async (collection, name, obj) => {
  await setDoc(doc(getFirestore(), collection, name), obj);
}

export const getGame = async (id) => {
  const q = query(collection(getFirestore(), "games"), where("id", "==", id));
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