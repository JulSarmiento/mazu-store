import { useState, useEffect } from "react";
import { firestore } from "../Utilities/firebase";
import { collection, getDocs, query} from "firebase/firestore";

export default function useCollection(name, conditional = null) {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let ref = collection(firestore, name);

    if (conditional) {
      ref = query(ref, conditional);
    } 

    getDocs(ref).then(doc => {
      setItems(doc.docs.map(e => ({...e.data(), id: e.id})));
    }).catch(e => {
      console.error('Firebase error', e)
    }).finally( () => {
      setIsLoading(false);
    })
  }, [ name, conditional ]); 

  return {
    items, isLoading
  }
};
