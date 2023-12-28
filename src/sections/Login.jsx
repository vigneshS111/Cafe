// Login.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config.js";
import InputControl from "./InputControl.jsx";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-white max-sm:items-start mt-20">
      <div className="min-w-80 max-w-md bg-coffee shadow-md rounded p-6 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />

        <div className="flex flex-col gap-4">
          <b className="text-red-500 font-bold">{errorMsg}</b>
          <button
            disabled={submitButtonDisabled}
            onClick={handleSubmission}
            className="button bg-dark-coffee text-secondary rounded-md font-bold py-2 px-4 transition duration-100"
          >
            Login
          </button>
          <p className="font-bold text-black">
            Don't have an account?{" "}
            <span>
              <Link to="/signup" className="text-primary">
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
