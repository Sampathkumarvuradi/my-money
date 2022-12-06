import {
  collection,
  onSnapshot,
  where,
  query,
  orderBy,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (col, _que, _orBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const que = useRef(_que).current;
  const orBy = useRef(_orBy).current;

  useEffect(() => {
    let ref = collection(projectFirestore, col);

    if (que) {
      ref = query(ref, where(...que));
    }
    if (orBy) {
      ref = query(ref, orderBy(...orBy));
    }

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [col, que, orBy]);
  return { documents, error };
};
