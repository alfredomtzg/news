// React and React Router
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// Style
import { LoginButton } from "../Style";
// These imports load individual services into the firebase namespace.
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
  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    // call Login function
    console.log(valuesLogin);
    // await firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(valuesLogin)
    //   .catch(function (error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     if (errorCode == "auth/weak-password") {
    //       alert("The password is too weak.");
    //     } else {
    //       alert(errorMessage);
    //     }
    //     console.log(error);
    //   });
  };

  return (
    <form onSubmit={handleSubmitLogin}>
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
      {error ? (
        <h6>Email or password incorrect. Please check and retry.</h6>
      ) : null}
      <Link to="/forgot-password">
        <h5>Forgot your password?</h5>
      </Link>
      <LoginButton type="submit">
        <h6>Login</h6>
      </LoginButton>
    </form>
  );
}
