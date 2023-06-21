import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[46.4rem] w-full fixed bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
      <h1 className="text-2xl absolute font-mono mt-[5rem] ml-5">
        {" "}
        Create Your Account
      </h1>
      <form action="post">
        <div className="h-[14.4rem] w-[14.5rem]  relative mx-16 mt-[14rem] border-none  justify-content-center rounded-xl p-3 shadow-2xl backdrop-blur-sm bg-gradient-to-b from-violet-500 to-fuchsia-200 outline outline-offset-2 outline-purple-700 ">
          <div className=" ">
            <AccountCircleIcon className="absolute my-1" />
            <input
              type="text"
              name="name"
              className="h-8 w-46 px-3 rounded-lg"
              id="name"
              placeholder="    Enter username:"
              required
            />
          </div>
          <br />
          <div className="">
            <EmailIcon className="absolute my-1" />
            <input
              type="email"
              name="name"
              className="h-8 w-46 px-3 rounded-lg"
              id="name"
              placeholder="    Enter Email id:"
              required
            />
          </div>
          <br />
          <div className="">
            <LockIcon className="absolute my-1" />
            <input
              type="password"
              name="pass"
              className="h-8  w-46 px-3 rounded-lg"
              id="pass"
              placeholder="    Enter password"
            />
          </div>
          <br />
          <div className="">
            <LockIcon className="absolute my-1" />
            <input
              type="password"
              name="pass"
              className="h-8 w-46 px-3 rounded-lg"
              id="pass"
              placeholder="    Confirm password"
            />
          </div>
          <br />
          {/* <label htmlFor="gender">Gender: </label>
        <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">unisex</option>
          <option value="transgender">transgender</option>
          <option value="Lgbtq">Lgbtq</option>
          <option value="other">other</option>
        </select>
        <br />
        <br />
        <label htmlFor="dob">Date Of Birth:</label>
        <input type="date" name="dob" id="dob" className="w-28 bg-transparent" /> */}
        </div>
        <div className=" p-1 mt-5 text-center absolte w-12  ml-36 rounded-full  bg-gradient-to-r from-fuchsia-400 to-purple-400 hover:from-fuchsia-200 hover:to-purple-500 ">
          <button onClick={() => navigate("/Reg2")}>
            <ArrowForwardIcon />
          </button>
        </div>
      </form>
      <div className="mt-[9rem]">
        <button className=" ml-12">
          Already Have an Account ?{" "}
          <button className="underline" onClick={() => navigate("/Login")}>
            Click here
          </button>
        </button>
      </div>
    </div>
  );
};
