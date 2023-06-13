import React from "react";

export const Login = () => {
  return (
    <div>
      <div className="h-[46.4rem] fixed bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
        <h1 className="font-serif absolute text-5xl px-28 py-32">Login</h1>

        <div className="h-50 mx-16 p-5 mt-64 border-none rounded-xl  shadow-2xl backdrop-blur-sm outline outline-offset-2 bg-gradient-to-b from-violet-400 to-fuchsia-200 outline-purple-400">
          <input
            type="text"
            name="name"
            className="h-6 rounded-lg px-3 "
            id="name"
            placeholder="Username:"
          />
          <br />
          <br />

          <input
            type="password"
            name="pass"
            className="h-6 rounded-lg px-3"
            id="pass"
            placeholder="Password"
          />
        </div>
        <div class=" p-1 mt-5 text-center absolte w-24 ml-32 rounded-xl  bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 ">
          <button class=" h-5  rounded-lg text-white hover:text-black">Log In</button>
        </div>
          <br />
        <button className="mt-64 ml-12">
          Don't Have an Account ?{" "}
          <button className="underline" onClick={() => navigate("/Register")}>
            Click here
          </button>
        </button>
      </div>
    
    </div>
  );
};
