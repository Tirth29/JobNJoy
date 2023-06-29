import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function Register2() {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-violet-400 to-fuchsia-100">
      <form action="get" className="max-w-md mx-auto p-6 bg-gradient-to-b from-violet-400 via-purple-200 to-fuchsia-100 rounded-xl shadow-lg">
        <div className="flex items-center justify-center">
          <div className="relative rounded-full h-32 w-32 bg-gradient-to-r from-violet-700 via-purple-400 to-fuchsia-500 p-1 hover:bg-gradient-to-b from-violet-700 via-purple-400 to-fuchsia-500 hover:delay-1000">
            <div className="absolute inset-0 flex items-center justify-center">
              {profilePicture ? (
                <img src={profilePicture} alt="Profile" className="rounded-full h-28 w-28" />
              ) : (
                <button className="rounded-full bg-slate-100 h-28 w-28">
                  <AddPhotoAlternateIcon />
                </button>
              )}
            </div>
          </div>
        </div>
        <input
          type="file"
          className="ml-4 mt-6 text-sm bg-transparent"
          onChange={handleProfilePictureChange}
        />
        <div className="text-black">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Your Full Name"
            className="px-3 w-full border-2 border-fuchsia-800 h-9 rounded-xl mt-8"
            required
          />
        </div>
        <div className="mt-8">
          <div className="bg-white border-fuchsia-800 border-2 px-3 py-1 rounded-xl h-8">
            <label htmlFor="gender" className="text-black">
              Gender:
            </label>
            <select id="gender" name="gender" className="absolute" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <br />
          <div className="bg-white mt-2 border-fuchsia-800 border-2 px-2 py-1 rounded-xl h-8">
            <label htmlFor="dob" className="text-black">
              DOB
            </label>
            <input
              type="date"
              name=""
              id=""
              className="bg-transparent absolute border-1 w-24 ml-3 rounded-xl"
            />
          </div>
          <div className="bg-white mt-4 border-fuchsia-800 border-2 rounded-xl">
            <div className="card rounded-xl">
              <div className="card-header">BioData</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item underline">
                  <input type="text" className="w-full h-8 border-1 pl-1" />
                </li>
                <li className="list-group-item underline">
                  <input type="text" className="w-full h-8 border-1 pl-1" />
                </li>
                <li className="list-group-item underline">
                  <input type="text" className="w-full h-8 border-1 pl-1" />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <input
              type="submit"
              className="w-36 h-12 rounded-full bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 text-white font-bold"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}


