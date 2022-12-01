import { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useQuestions(id) {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    async function fetchQuestion() {
      // database related works
      const db = getDatabase();
      const questionRef = ref(db, "quiz/" + id + "/questions");
      const questionQuery = query(questionRef, orderByKey());

      try {
        setError(false);
        setLoding(true);
        // request firebase database
        const snapshort = await get(questionQuery);
        setLoding(false);
        if (snapshort.exists()) {
          setQuestion((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapshort.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoding(false);
        setError(true);
      }
    }

    fetchQuestion();
  }, [id]);

  return { loding, error, questions };
}
