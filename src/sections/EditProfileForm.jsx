import React, { useState } from "react";
import InputControl from "./InputControl";
import { updateDoc, doc } from "firebase/firestore";
import { auth, firestore } from "../firebase.config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const EditProfileForm = ({ info, onClose, setInfo }) => {
  const [formData, setFormData] = useState({
    displayName: info.displayName || "",
    email: info.email || "",
    phoneNumber: info.phoneNumber || "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    // Get the current user
    const user = auth.currentUser;

    // Update the user profile in Firebase Authentication
    try {
      await updateProfile(user, {
        displayName: formData.displayName,
      });

      // Update the user document in Firestore
      const userDocRef = doc(firestore, "users", user.uid);
      await updateDoc(userDocRef, {
        displayName: formData.displayName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      });

      setInfo({
        displayName: formData.displayName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
      });
      // Close the edit profile form or perform other actions as needed
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <div className="h-full min-h-screen w-full bg-white flex justify-center items-center max-sm:items-start mt-20">
      <form
        onSubmit={handleUpdateProfile}
        className="sm:min-w-[480px] fit-content bg-coffee shadow-md p-10 rounded-lg flex flex-col gap-4"
      >
        <h1 className="heading text-3xl font-bold">Update Profile</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          name="displayName"
          value={formData.displayName}
          onChange={handleInputChange}
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputControl
          label="Phone Number"
          placeholder="Enter phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />

        <div className="footer flex flex-col gap-4">
          <button
            type="submit"
            className="button bg-dark-coffee text-secondary rounded-md font-bold py-2 px-4 transition duration-100"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
