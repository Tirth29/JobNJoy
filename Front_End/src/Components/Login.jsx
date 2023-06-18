import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[46.4rem] w-full fixed bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
      <h1 className="font-serif absolute text-5xl px-28 py-32">Login</h1>

      <div className="h-50 mx-16 p-5 mt-64 border-none rounded-xl  shadow-2xl backdrop-blur-sm outline outline-offset-2 bg-gradient-to-b from-violet-400 to-fuchsia-200 outline-purple-400">
        <div className="d-inline-flex">
          <AccountCircleIcon className="absolute " />
          <input
            type="text"
            name="name"
            className="h-6 w-40 rounded-lg px-5 "
            id="name"
            placeholder="   Username:"
          />
        </div>
        <br />
        <br />
        <div className="d-inline-flex">
          <LockIcon  className="absolute"/>

          <input
            type="password"
            name="pass"
            className="h-6 w-40 rounded-lg px-3"
            id="pass"
            placeholder="    Password"
          />
        </div>
      </div>
      <div class=" p-1 mt-5 text-center absolte w-24 ml-32 rounded-xl  bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 ">
        <button class=" h-5  rounded-lg text-white hover:text-black">
          Log In
        </button>
      </div>
      <br />
      <button className=" ml-12">
        Don't Have an Account ?{" "}
        <button className="underline" onClick={() => navigate("/Register")}>
          Click here
        </button>
      </button>
    </div>
  );
};
