import React from "react";
import Illustration from "../Illustration";
import SinImg from "../../Assets/images/signup.svg";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration img={SinImg} />
        <SignupForm />
      </div>
    </>
  );
}
