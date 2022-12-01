import React from "react";
import Style from "../Styles/video.module.css";

export default function Video({ title, id, noq }) {
  return (
    <div className={Style.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={Style.qmeta}>
        <p>{noq} Questions</p>
        <p>Total point : {noq * 5}</p>
      </div>
    </div>
  );
}
