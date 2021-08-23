import "./Login.css";
import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-x2sXwn1koUQvzJjkIMCinK1sedmJ1mofzaiT4wZMCAnPAFSpSmg0Ge2Nx61gT0d9yUo&usqp=CAU"
          alt="discord logo"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
