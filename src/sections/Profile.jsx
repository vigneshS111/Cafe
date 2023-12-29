import React, { useState, useEffect } from "react";
import EditProfileForm from "./EditProfileForm";

const Profile = ({ info }) => {
  const [profileInfo, setProfileInfo] = useState(info);
  const [isEditing, setIsEditing] = useState(false);

  // Update local state when the info prop changes
  useEffect(() => {
    if (info !== null) {
      setProfileInfo(info);
    }
  }, [info]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditFormClose = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditProfileForm
          info={profileInfo}
          setInfo={setProfileInfo}
          onClose={handleEditFormClose}
        />
      ) : (
        <div className="p-6 flex justify-center sm:mb-40 mb-48 max-sm:mt-20">
          <div className="flex flex-col justify-start items-start bg-coffee padding-y sm:px-24 px-6 gap-12 min-w-80 max-w-[500px] shadow-md rounded">
            <h2 className="font-poppins font-semibold text-[32px] tracking-wide text-black ">
              Profile
            </h2>

            <div className="flex flex-col gap-6">
              {profileInfo ? (
                <>
                  <div className="flex flex-row gap-3">
                    <p className="font-poppins font-medium text-xl tracking-wide text-primary">
                      Name:
                    </p>
                    <p className="text-secondary font-poppins font-normal text-xl">
                      {profileInfo.displayName}
                    </p>
                  </div>

                  <div className="flex flex-row gap-3">
                    <p className="font-poppins font-medium text-xl tracking-wide text-primary">
                      Email:{" "}
                    </p>
                    <p className="text-secondary font-poppins font-normal text-xl">
                      {profileInfo.email}
                    </p>
                  </div>
                  <div className="flex flex-row gap-3">
                    <p className="font-poppins font-medium text-xl tracking-wide text-primary">
                      Phone Number:{" "}
                    </p>
                    <p className="text-secondary font-poppins font-normal text-xl">
                      {profileInfo.phoneNumber}
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-primary font-lg font-semibold mx-auto">
                  Loading...
                </p>
              )}

              <button
                onClick={handleEditClick}
                className="flex justify-center items-center mt-6 w-[150px] text-lg bg-dark-coffee text-secondary rounded-md font-bold py-2 px-4  transition duration-100"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
