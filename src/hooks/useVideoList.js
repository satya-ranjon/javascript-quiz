import { useEffect, useState } from "react";
import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";

export default function useVideoList(page) {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(true);
  const [videos, setVideo] = useState([]);
  const [hasmore, setHasmore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      // database related works
      const db = getDatabase();
      const videoRef = ref(db, "/videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(15)
      );

      try {
        setError(false);
        setLoding(true);
        // request firebase database
        const snapshort = await get(videoQuery);
        setLoding(false);
        if (snapshort.exists()) {
          setVideo((prevVideo) => {
            return [...prevVideo, ...Object.values(snapshort.val())];
          });
        } else {
          setHasmore(false);
        }
      } catch (err) {
        console.log(err);
        setLoding(false);
        setError(true);
      }
    }

    fetchVideos();
  }, [page]);
  return { loding, videos, error, hasmore };
}

