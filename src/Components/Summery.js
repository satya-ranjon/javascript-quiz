import React, { useMemo } from "react";
import Style from "../Styles/summery.module.css";
import Img from "../Assets/images/success.png";
import UseFetch from "../hooks/useFetch";

export default function Summery({ score, noq }) {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const { loading, error, result } = UseFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PIXEL_API_KEY,
    }
  );

  const Image = result ? result?.photos[0].src.medium : Img;

  return (
    <div className={Style.summary}>
      <div className={Style.point}>
        <p className={Style.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      {loading && <div className={Style.badge}> loading your badge .... </div>}
      {error && <div className={Style.badge}> Error .... </div>}
      {!loading && !error && (
        <div className={Style.badge}>
          <img src={Image} alt="Success" />
        </div>
      )}
    </div>
  );
}
