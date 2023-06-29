import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { Hidden } from "@mui/material";

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
    <div className="h-[46.4rem] w-full fixed bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
      <h1 className="font-serif absolute text-3xl px-12 py-20">
        Get Your Password
      </h1>
      <form action="">
        <div className="h-40 mx-16 px-3 pt-7 mt-64 border-none rounded-xl  shadow-2xl backdrop-blur-sm outline outline-offset-2 bg-gradient-to-b from-violet-400 to-fuchsia-200 outline-purple-400">
          <div className="d-inline-flex">
            <AccountCircleIcon className="absolute mt-1" />
            <input
              type="text"
              name="name"
              className="h-8 w-[11.8rem] rounded-lg pl-8"
              id="name"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <br />
          {hide ? (
            <div className="pt-4 pl-7">
              <input type="checkbox" className="m-2" onClick={change} />
              <button className="text-sm">Get Password</button>
            </div>
          ) : (
            <div className="d-inline-flex">
              <LockIcon className="absolute mt-[1.7rem]" />

              <input
                type="password"
                name="pass"
                className="h-8 w-[11.8rem] rounded-lg pl-8 mt-4"
                id="pass"
                placeholder="Password"
              />
            </div>
          )}
        </div>
        <div className=" p-1 mt-5 text-center absolte w-24 ml-32 rounded-xl  bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 ">
          <button className=" h-5  rounded-lg text-white hover:text-black font-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
