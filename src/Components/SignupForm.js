import React, { useState } from "react";
import Form from "./Form";
import Style from "../Styles/signup.module.css";
import InputText from "./InputText";
import ChackBox from "./ChackBox";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();

  const navigate = useNavigate();
  const { signup } = useAuth();

  async function handelSubmit(e) {
    e.preventDefault();
    if (password !== conpassword) {
      return setError("Password don't mass ");
    }

    try {
      setError("");
      setLoading(false);
      await signup(email, password, username);
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError("Failed to create an account");
    }
  }
  return (
    <>
      <Form className={Style.signup} onSubmit={handelSubmit}>
        <InputText
          required
          type="text"
          placeholder="Enter name"
          icon="person"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputText
          required
          type="text"
          placeholder="Enter email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputText
          required
          type="Password"
          placeholder="Enter password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputText
          required
          type="Password"
          placeholder="Confirm password"
          icon="lock_clock"
          value={conpassword}
          onChange={(e) => setConpassword(e.target.value)}
        />
        <ChackBox
          required
          text=" I agree to the Terms & Conditions"
          value={agree}
          onChange={(e) => setAgree(e.target.value)}
        />
        <Button disabled={loading} type="submit">
          <span>Submit now</span>
        </Button>

        {error && <p className="error">{error}</p>}
        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </>
  );
}
