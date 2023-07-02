import React, { useState } from "react";
import { myPosts } from "./Profile";

const EditProfile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bioLines, setBioLines] = useState(["", "", "", "", ""]);
  const [successAlert, setSuccessAlert] = useState(false);

  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.files[0]);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleBioLineChange = (e, index) => {
    const updatedBioLines = [...bioLines];
    updatedBioLines[index] = e.target.value;
    setBioLines(updatedBioLines);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform profile update logic here (e.g., send data to the server)
    // Upon successful update, show the success alert and redirect to the profile page
    // For demonstration purposes, we'll simply log the updated profile data

    console.log("Updated Profile Data:");
    console.log("Profile Picture:", profilePic);
    console.log("Username:", username);
    console.log("Name:", name);
    console.log("Date of Birth:", dateOfBirth);
    console.log("Bio Lines:", bioLines);

    setSuccessAlert(true);
    setTimeout(() => {
      setSuccessAlert(false);
      history.push("/profile"); // Redirect to the profile page
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-[#8b41d0] ">
      <h1 className="text-3xl font-bold mb-4 text-white">Edit Profile</h1>

      {/* Profile Picture */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Profile Picture</h2>
        <img
          src={myPosts[0].link}
          alt="Current Profile Picture"
          className="w-32 h-32 mb-2 rounded-full items-center"
        />

        {/* Update Profile Picture Form */}
        <h3 className="text-lg font-bold mb-2">Update Profile Picture</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            required
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
          value={username}
          onChange={handleUsernameChange}
          className="border border-gray-300 px-4 py-2 rounded w-64"
        />
      </div>

      {/* Name */}
      <div className="mb-8">
        <label className="text-lg font-bold mb-2 mr-6">Name</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="border border-gray-300 px-4 py-2 rounded w-64"
        />
      </div>

      {/* Date of Birth */}
      <div className="mb-8">
        <label className="text-lg font-bold mb-2 mr-16">Date of Birth</label>
        <input
          type="date"
          value={dateOfBirth}
          onChange={handleDateOfBirthChange}
          className="border border-gray-300 px-4 py-2 rounded"
        />
      </div>

      {/* Bio Lines */}
      <div className="mb-8">
        <label className="text-lg font-bold mb-2 mr-10">Bio Lines</label>
        {bioLines.map((line, index) => (
          <input
            key={index}
            type="text"
            value={line}
            onChange={(e) => handleBioLineChange(e, index)}
            className="border border-gray-300 px-4 py-2 rounded mb-2 lg:mx-5"
          />
        ))}
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
  );
};

export default EditProfile;
