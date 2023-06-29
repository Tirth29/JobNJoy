import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-[46.4rem] w-full fixed bg-gradient-to-b from-violet-400 to-fuchsia-100">
      <h1 className="font-serif absolute text-5xl px-28 py-32">Login</h1>
      <form action="">
        <div className="h-40 mx-16 px-3 py-4 mt-64 border-none rounded-xl shadow-2xl backdrop-blur-sm bg-gradient-to-b from-violet-400 to-fuchsia-200">
          <div>
            <AccountCircleIcon className="absolute" />
            <input
              type="text"
              name="name"
              className="h-6 w-[11.8rem] rounded-lg pl-8"
              id="name"
              placeholder="Username:"
              required
            />
          </div>
          <br />
          <div>
            <LockIcon className="absolute" />
            <input
              type="password"
              name="pass"
              className="h-6 w-[11.8rem] rounded-lg pl-8"
              id="pass"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="text-sm mt-7 ml-10 underline opacity-40 hover:opacity-80"
            onClick={() => navigate("/Forget")}
          >
            Forget Password?
          </button>
        </div>

        <div className="p-1 mt-24 text-center absolute w-24 ml-32 rounded-xl bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400">
          <button className="h-5 rounded-lg text-white hover:text-black ">
            Log In
          </button>
        </div>
        <br />

        <button className="ml-12">
          Don't Have an Account?{" "}
          <button className="underline" onClick={() => navigate("/Register")}>
            Click here
          </button>
        </button>
      </form>
    </div>
  );
};
