import React from "react";
import { auth, provider } from "../server/database";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center p-3">
        <button
          className="btn btn-dark text-white m-3"
          onClick={signInWithGoogle}
        >
          Sign in with google
        </button>
      </div>
    </div>
  );
}

export default Login;
