import React, { useState } from "react";

export const Register = () => {
  return (
    <div className="h-[46.4rem] w-full fixed bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
      <h1 className="text-2xl absolute font-mono mt-[5rem] ml-5">
        {" "}
        Create Your Account
      </h1>
      <form action="post">
        <div className="h-[14rem] w-[16rem]  relative mx-14 mt-[14rem] border-none rounded-xl p-3 shadow-2xl backdrop-blur-sm bg-gradient-to-b from-violet-500 to-fuchsia-200 outline outline-offset-2 outline-purple-700 ">
          <input
            type="text"
            name="name"
            className="h-8 w-56 p-3 rounded-lg"
            id="name"
            placeholder="Enter username:"
            required
          />
          <br />
          <br />
          <input
            type="email"
            name="name"
            className="h-8 w-56 p-3 rounded-lg"
            id="name"
            placeholder="Enter Email id:" required
          />
          <br />
          <br />
          <input
            type="password"
            name="pass"
            className="h-8 w-56 p-3 rounded-lg"
            id="pass"
            placeholder="Enter password"
          />{" "}
          <br />
          <br />
          <input
            type="password"
            name="pass"
            className="h-8 w-56 p-3 rounded-lg"
            id="pass"
            placeholder="Confirm password"
          />{" "}
          <br />
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
          <button class=" h-5  rounded-lg text-white hover:text-black">Submit</button>
        </div>
        <button className=" ml-10 mt-32">
          Already Have an Account ?
          <button className="underline" onClick={() => navigate("/Register")}>
            Click here
          </button>
        </button>
      </form>
    </div>
  );
};
