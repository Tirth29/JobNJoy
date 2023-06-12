import React from "react";

export const Register = () => {
  return (
    <div className="h-[46.4rem] relative bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
      <div className="h-[22rem] absolute mx-16 mt-[12rem] border-none rounded-xl p-3 shadow-2xl backdrop-blur-sm bg-gradient-to-b from-violet-500 to-fuchsia-200 outline outline-offset-2 outlin-purple-600 ">
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
        <br />
        <br />
        <label htmlFor="pass " className="h-12">
          Password:
        </label>
        <input
          type="password"
          name="pass"
          className="h-6 rounded-lg"
          id="pass"
          placeholder="Enter password"
        />{" "}
        <br />
        <br />
        <label htmlFor="npass " className="h-12">
          Confirm Password:
        </label>
        <input
          type="password"
          name="pass"
          className="h-6 rounded-lg"
          id="pass"
          placeholder="Confirm password"
        />{" "}
        <br />
        <br />
        <label htmlFor="gender">Gender: </label>
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
        <input type="date" name="dob" id="dob" />
      </div>
    </div>
  );
};
