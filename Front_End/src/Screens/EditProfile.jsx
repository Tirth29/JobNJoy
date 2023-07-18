import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateProfile, updateProfilePic } from "../reducer/Actions/UserAction";
import { useNavigate } from "react-router-dom";
import FinalFooter from "../Components/FinalFooter";

// import { myPosts } from "./Profile";

const EditProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user?.name);
  const [username, setUsername] = useState(user?.username);
  const [photo, setPhoto] = useState(user?.photo);
  const [dob, setDob] = useState(user?.dob);
  const [successAlert, setSuccessAlert] = useState(false);
  const [biodata, setBiodata] = useState(user?.biodata);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(loadUser());
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleProfilePicChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDob(e.target.value);
  };
  const handleBioLineChange = (e, lineIndex) => {
    const updatedBiodata = { ...biodata };
    updatedBiodata[`line${lineIndex + 1}`] = e.target.value;
    setBiodata(updatedBiodata);
  };

  // const handleBioLineChange = (e, index) => {
  // const updatedBioLines = [...bioLines];
  // updatedBioLines[index] = e.target.value;
  // setBioLines(updatedBioLines);
  // };
  const handlePhotoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file",photo)
    dispatch(updateProfilePic(formData));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform profile update logic here (e.g., send data to the server)
    // Upon successful update, show the success alert and redirect to the profile page
    // For demonstration purposes, we'll simply log the updated profile data
    dispatch(updateProfile(name, username, dob, biodata));
    // console.log("Updated Profile Data:");
    // console.log("Profile Picture:", photo);
    // console.log("Username:", username);
    // console.log("Name:", name);
    // console.log("Date of Birth:", dob);
    // console.log("Bio Lines:", bioLines);
    
    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
      navigate("/profile"); // Redirect to the profile page
    }, 3000);
  };

  return (
    <>
    <div className="container mx-auto px-4 py-8 bg-[#8b41d0] ">
      <h1 className="text-3xl font-bold mb-4 text-white">Edit Profile</h1>

      {/* Profile Picture */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Profile Picture</h2>
        <img
          src={user?.photo?.url}
          alt="Current Profile Picture"
          className="w-32 h-32 mb-2 rounded-full items-center"
        />

        {/* Update Profile Picture Form */}
        <h3 className="text-lg font-bold mb-2">Update Profile Picture</h3>
        <form onSubmit={handlePhotoSubmit}>
          <input
            type="file"
            accept="image/*"
            required
            onChange={handleProfilePicChange}
            className="mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        </form>
      </div>

      {/* Username */}
      <div className="mb-8">
        <label className="text-lg font-bold mb-2">Username</label>
        <input
          type="text"
          placeholder={user?.username}
          onChange={handleUsernameChange}
          className="border border-gray-300 px-4 py-2 rounded w-64"
        />
      </div>

      {/* Name */}
      <div className="mb-8">
        <label className="text-lg font-bold mb-2 mr-6">Name</label>
        <input
          type="text"
          placeholder={user?.name}
          onChange={handleNameChange}
          className="border border-gray-300 px-4 py-2 rounded w-64"
        />
      </div>

      {/* Date of Birth */}
      <div className="mb-8">
        <label className="text-lg font-bold mb-2 mr-16">Date of Birth</label>
        <input
          type="date"
          value={user?.dob}
          onChange={handleDateOfBirthChange}
          className="border border-gray-300 px-4 py-2 rounded"
        />
      </div>

      {/* Bio Lines */}
      <div className="mb-8">
        <label className="text-lg font-bold mb-2 mr-10">Bio Lines</label>
        {[1, 2, 3, 4, 5].map((lineNumber) => {
    const lineValue = biodata?.[`line${lineNumber}`] || "";
    const placeholderText = lineValue ? "Enter bio here" : "";
    
    return (
      <input
        key={lineNumber}
        type="text"
        value={lineValue}
        placeholder={placeholderText}
        onChange={(e) => handleBioLineChange(e, lineNumber - 1)}
        className="border border-gray-300 px-4 py-2 rounded mb-2 lg:mx-5"
      />
    );
  })}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-10"
      >
        Update Profile
      </button>

      {/* Success Alert */}
      {successAlert && (
        <div className="bg-green-200 text-green-800 px-4 py-2 rounded mb-4">
          Profile updated successfully!
        </div>
      )}
    </div>
    <FinalFooter/>
    </>
  );
};

export default EditProfile;
