import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config.js";
import InputControl from "./InputControl.jsx";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Import necessary Firestore functions

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.pass
      );
      const user = res.user;

      // Retrieve user data from Firestore
      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid);
      const userData = await getDoc(userDocRef);

      // Now you can use userData.data() to access the complete user data in your app
      console.log(userData.data());

      setSubmitButtonDisabled(false);
      navigate("/");
    } catch (err) {
      setSubmitButtonDisabled(false);

      switch (err.code) {
        case "auth/user-not-found":
          setErrorMsg("User not found. Please check your email or sign up.");
          break;
        case "auth/wrong-password":
          setErrorMsg("Invalid password. Please try again.");
          break;
        case "auth/invalid-credential":
          setErrorMsg(
            "Invalid credentials. Please check your email and password."
          );
          break;

        default:
          setErrorMsg(err.message);
          break;
      }
    }
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
