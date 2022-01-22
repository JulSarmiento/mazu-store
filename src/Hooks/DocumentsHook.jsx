import { useState, useEffect } from "react";
import { firestore } from "../Utilities/firebase";
import { collection, getDocs} from "firebase/firestore";

export default function useCollection(name) {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ref = collection(firestore, name);

    getDocs(ref).then(doc => {
      setItems(doc.docs.map(e => ({...e.data(), id: e.id})))
    }).finally( () => {
      setIsLoading(false);
    })

  }, [ name]); 

  return {
    items, isLoading
  }
};


