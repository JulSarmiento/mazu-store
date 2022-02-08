import {firestore} from '../Utilities/firebase';
import { collection } from "firebase/firestore";

export const listProducts = async () => {
    const ref = collection('Products');

    const data = await ref.get();
    
    return data.data();
}