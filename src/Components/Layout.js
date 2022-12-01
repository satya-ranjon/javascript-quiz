import React from "react";
import Styles from "../Styles/layout.module.css";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className={Styles.main}>
        <div className={Styles.container}>{children}</div>
      </div>
    </>
  );
}
