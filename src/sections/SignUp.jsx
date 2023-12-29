import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, firestore } from "../firebase.config.js"; // Assuming you have a 'firestore' object in your firebase config
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Add doc and setDoc to the imports
import InputControl from "./InputControl.jsx";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    phoneNumber: "", // Add phone number field
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);

    // Initialize Firestore instance within the function
    const db = getFirestore();

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.pass
      );
      const user = res.user;

      // Update user profile
      await updateProfile(user, {
        displayName: values.name,
      });

      // Add additional info to Firestore
      const userDocRef = doc(db, "users", user.uid); // replace "users" with your collection name
      await setDoc(userDocRef, {
        displayName: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
      });

      navigate("/");
    } catch (err) {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    }
  };

  return (
    <div className=" h-full min-h-screen w-full bg-white flex justify-center items-center max-sm:items-start mt-20">
      <div className=" sm:min-w-[480px] fit-content bg-coffee shadow-md p-10 rounded-lg flex flex-col gap-4">
        <h1 className="heading text-3xl font-bold">Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <InputControl
          label="Phone Number"
          placeholder="Enter phone number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phoneNumber: event.target.value }))
          }
        />

        <div className="footer flex flex-col gap-4">
          <b className="error text-bold text-red-600">{errorMsg}</b>
          <button
            onClick={handleSubmission}
            disabled={submitButtonDisabled}
            className="button bg-dark-coffee text-secondary rounded-md font-bold py-2 px-4 transition duration-100"
          >
            Signup
          </button>
          <p className="text-700 text-black">
            Already have an account?{" "}
            <span>
              <Link to="/login" className="text-primary font-bold">
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
