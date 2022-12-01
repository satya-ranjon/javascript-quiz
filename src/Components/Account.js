import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/account.module.css";
import { useAuth } from "../Context/AuthContext";

export default function Account() {
  const { currentUser, logout } = useAuth();

  return (
    <div className={Styles.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      {currentUser ? (
        <>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
