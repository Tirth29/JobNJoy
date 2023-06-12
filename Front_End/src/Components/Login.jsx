import React from "react";

export const Login = () => {
  return (
    <div className="h-[46.4rem] fixed bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
      <div className="h-56 mx-16 mt-64 border-none rounded-xl p-3 shadow-2xl backdrop-blur-sm">
        <label htmlFor="Name" className="h-12">
          Name:
        </label>
        <input
          type="text"
          name="name"
          className="h-6 rounded-lg"
          id="name"
          placeholder="Enter username:"
        />
        <br /><br />
        <label htmlFor="pass " className="h-12">
          Password:
        </label>
        <input
          type="password"
          name="pass"
          className="h-6 rounded-lg"
          id="pass"
          placeholder="Enter password"
        />
        <br />
        <br />
    
        <button>
          Don't Have an Account ?{" "}
          <button className="underline" onClick={() => navigate("/Register")}>
            Click here
          </button>
        </button>
      </div>
    </div>
  );
};
