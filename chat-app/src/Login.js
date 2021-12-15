import { Button } from "@material-ui/core";
import ChatIcon from "@material-ui/icons//Chat";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    //google login
    auth.signInWithPopup(provider).catch((error) => console.log(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <ChatIcon fontSize="large" className="logo" />
        <h2 className="login__title">Fancy Title</h2>
      </div>
      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
