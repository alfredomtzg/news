// React and React Router
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// Style
import { LoginButton } from "../Style";
// These imports load individual services into the firebase namespace.
import { auth } from "../../firebase-config";
import "firebase/auth";

export default function LoginForm() {
  // history to redirect
  const history = useHistory();
  // bring context data
  // error
  const [error, setError] = useState(false);
  // Login Values
  const [valuesLogin, setValuesLogin] = useState({
    username: "",
    password: "",
  });
  // function handleChange to Login
  const handleChangeLogin = (event) => {
    setValuesLogin({
      ...valuesLogin,
      [event.target.name]: event.target.value,
    });
  };

  // Function HandleSubmitLogin
  const handleSubmitSignIn = async (event) => {
    event.preventDefault();
    // call Login function
    // auth().signInWithEmailAndPassword(email, password)
    try {
      const response = await auth.signInWithEmailAndPassword(
        valuesLogin.username,
        valuesLogin.password
      );
      console.log(response);
      history.push("/home");
    } catch (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
        return error;
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmitSignIn}>
      <label htmlFor="email">
        <h5>E-mail</h5>
      </label>
      <input
        autoFocus
        id="username"
        name="username"
        autoComplete="current-email"
        value={valuesLogin.username}
        onChange={handleChangeLogin}
      />

      <label htmlFor="password">
        <h5>Password</h5>
      </label>
      <input
        id="password"
        type="password"
        name="password"
        value={valuesLogin.password}
        onChange={handleChangeLogin}
      />
      <LoginButton type="submit">
        <h6>Sign in</h6>
      </LoginButton>
    </form>
  );
}
