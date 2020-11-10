// React and React Router
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
// Style
import { LoginButton, Input, FormContainer } from "../Style";
// These imports load individual services into the firebase namespace.
import { auth } from "../../firebase-config";
import "firebase/auth";
import { Context } from "../../utils/Context";

export default function LoginForm() {
  // Context
  const { setUserData, newUser, setNewUser } = useContext(Context);
  // history to redirect
  const history = useHistory();
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
    try {
      const response = await auth.signInWithEmailAndPassword(
        valuesLogin.username,
        valuesLogin.password
      );
      setUserData(response.user.email);
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

  // Function CreateNewuse
  const createNewUser = async () => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        valuesLogin.username,
        valuesLogin.password
      );
      console.log(response);

      setNewUser(true);
    } catch (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmitSignIn}>
      <label htmlFor="email">
        <h5>E-mail</h5>
      </label>
      <Input
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
      <Input
        id="password"
        type="password"
        name="password"
        value={valuesLogin.password}
        onChange={handleChangeLogin}
      />
      <br />
      <LoginButton type="submit">Sign in</LoginButton>
      {!newUser ? (
        <>
          <h5>or</h5>
          <LoginButton
            type="button"
            onClick={() => {
              createNewUser();
              console.log("Usuario nuevo");
            }}
          >
            Create New user
          </LoginButton>
        </>
      ) : null}
    </FormContainer>
  );
}
