import React from "react";

export const Register = () => {
  return (
    <div className="h-[46.4rem] relative bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
        <form action="post">
      <div className="h-[22rem] absolute mx-16 mt-[12rem] border-none rounded-xl p-3 shadow-2xl backdrop-blur-sm bg-gradient-to-b from-violet-500 to-fuchsia-200 outline outline-offset-2 outline-purple-700 ">
        <input
          type="text"
          name="name"
          className="h-8 w-56 p-3 rounded-lg"
          id="name"
          placeholder="Enter username:" required
        />
        <br />
        <br />
        <input
          type="email"
          name="name"
          className="h-8 w-56 p-3 rounded-lg"
          id="name"
          placeholder="Enter Email id:"
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
        <div class=" p-1 w-56 rounded-xl  bg-gradient-to-r from-rose-500 to-purple-500">
    <button class="w-[13.5rem] h-8 rounded-lg text-blue-800 bg-white">Submit</button>
</div>
<button className="mt-52 ">
            Already Have an Account ?{" "}
          <button className="underline" onClick={() => navigate("/Register")}>
            Click here
          </button>
        </button>
      </div>
      </form>
    </div>
  );
};
