import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/images/logo-bg.png";
import Styles from "../Styles/navbar.module.css";
import Account from "./Account";

export default function Navbar() {
  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <Link to="/" className={Styles.brand}>
            <img src={Logo} alt="logo" />
            <h3>JavaScript | Quiz</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
