import { collection, addDoc, serverTimestamp, doc, getDoc } from "firebase/firestore";
import {firestore as db} from '../Utilities/firebase';

const PATH = 'Orders';

export const createOrder = (values) => {
    const order = {...values, createdAt: serverTimestamp()}
    return addDoc(collection(db, PATH), order); 
}

export const getOrder = async (orderId) => {
  const docRef = doc(db, PATH, orderId.trim());
  const orderDoc = await getDoc(docRef);

  const values = orderDoc.data();
  if (!values) {
    return null;
  }

  const {createdAt, ...data} = values;

  return {id: orderDoc.id, createdAt: createdAt.toDate().toDateString(), ...data};
}