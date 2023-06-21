import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[46.4rem] w-full fixed bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
      <h1 className="text-2xl absolute font-mono mt-[5rem] ml-5">
        {" "}
        Create Your Account
      </h1>
      <form action="post">
        <div className="h-[14rem] w-[14.6rem]  relative mx-14 mt-[14rem] border-none d-flex justify-content-center rounded-xl p-3 shadow-2xl backdrop-blur-sm bg-gradient-to-b from-violet-500 to-fuchsia-200 outline outline-offset-2 outline-purple-700 ">
          <div className="d-inline-flex ">
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
          <div className="d-inline-flex">
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
          <div className="d-inline-flex">
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
          <div className="d-inline-flex">
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
        <div class=" p-1 mt-5 text-center absolte w-24 ml-32 rounded-xl  bg-gradient-to-r from-fuchsia-400 to-purple-700 hover:from-fuchsia-200 hover:to-purple-500 ">
          <button class=" h-5  rounded-lg text-white hover:text-black">
            Submit
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
