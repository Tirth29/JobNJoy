import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";

export const Forget = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const [username, setUsername] = useState("");

  const change = () => {
    if (username.trim() !== "") {
      setHide(false);
    } else {
      alert("Please enter a username");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-violet-400 to-fuchsia-100">
      <div className="max-w-md mx-auto p-6 bg-gradient-to-b from-violet-400 to-fuchsia-200 rounded-xl shadow-2xl">
        <h1 className="font-serif text-3xl text-center pb-8">
          Get Your Password
        </h1>
        <form>
          <div className="relative mb-8">
            <AccountCircleIcon className="absolute mt-2 ml-2" />
            <input
              type="text"
              name="name"
              className="h-10 w-full pl-10 rounded-lg"
              id="name"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <br />
          {hide ? (
            <div className="text-center">
              <input type="checkbox" className="m-2" onClick={change} />
              <button className="text-sm font-bold">Get Password</button>
            </div>
          ) : (
            <div className="relative">
              <LockIcon className="absolute mt-2 ml-2" />
              <input
                type="password"
                name="pass"
                className="h-10 w-full pl-10 mt-4 rounded-lg"
                id="pass"
                placeholder="Password"
              />
            </div>
          )}
          <div className="text-center mt-8">
            <button className="w-32 h-10 rounded-lg bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 text-white font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
