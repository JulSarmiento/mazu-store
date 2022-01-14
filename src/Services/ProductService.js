import {firestore} from '../Utilities/firebase';

export const listProducts = async () => {
    const collection = firestore.collection('products');

    const data = await collection.get();
    
    return data.data();
}














``