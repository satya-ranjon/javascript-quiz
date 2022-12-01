import React, { useState } from "react";
import Style from "../Styles/miniplayer.module.css";
import ReactPlayer from "react-player/youtube";

export default function Miniplayer({ id, title }) {
  const [open, setOpen] = useState(false);

  // const video = (
  //   <>
  //     <ReactPlayer
  //       url={`https://www.youtube.com/watch?v=${id}`}
  //       playing={open}
  //       controls
  //     />
  //     <p>{title}</p>
  //   </>
  // );

  return (
    <div
      className={
        open === false
          ? `${Style.miniPlayer} ${Style.floatingBtn}`
          : `${Style.miniPlayer}`
      }
    >
      <span
        className={`material-icons-outlined ${Style.open}`}
        onClick={() => setOpen(() => (open === true ? false : true))}
      >
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${Style.close}`}
        onClick={() => setOpen(() => (open === true ? false : true))}
      >
        close
      </span>

      <ReactPlayer
        className={Style.player}
        url={`https://www.youtube.com/watch?v=${id}`}
        playing={open}
        controls
      />
      <p>{title}</p>
      {/* {open === false ? null : video} */}
    </div>
  );
}
