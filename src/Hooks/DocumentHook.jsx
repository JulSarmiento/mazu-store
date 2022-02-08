import { useState, useEffect } from "react";
import { firestore as db } from "../Utilities/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function useDocument(path, docId) {
  const [document, setDocument] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      let docRef = doc(db, path, docId);

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDocument({id: docSnap.id, ...docSnap.data()})
      } 
      
      setIsLoading(false);
    };

    fetchData();
  }, [ path, docId ]); 

  return {
    document, isLoading
  }
};


