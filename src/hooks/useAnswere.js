import { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useAnswere(id) {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const [answere, setAnwsere] = useState([]);

  useEffect(() => {
    async function fetchAnswere() {
      // database related works
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + id + "/questions");
      const answereQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoding(true);
        // request firebase database
        const snapshort = await get(answereQuery);
        setLoding(false);
        if (snapshort.exists()) {
          setAnwsere((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshort.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoding(false);
        setError(true);
      }
    }

    fetchAnswere();
  }, [id]);

  return { loding, error, answere };
}
