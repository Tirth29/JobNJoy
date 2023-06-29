import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
      alert("Please fill in all the required information");
    } else {
      navigate("/Register2");
    }
  };

  return (
    <div className="h-[46.4rem] w-full fixed bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
      <h1 className="text-2xl absolute font-mono mt-[5rem] ml-5">
        Create Your Account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="h-[14.4rem] w-[14.5rem]  relative mx-16 mt-[14rem] border-none  justify-content-center rounded-xl px-2 py-3 shadow-2xl backdrop-blur-sm bg-gradient-to-b from-violet-500 to-fuchsia-200 outline outline-offset-2 outline-purple-700 ">
          <div className="d-inline-flex mt-3">
            <div className="h-8 bg-white rounded-l-lg">
              <AccountCircleIcon className="bg-white rounded-lg mt-1" />
            </div>
            <input
              type="text"
              name="name"
              className="h-8 w-46 rounded-r-lg"
              id="name"
              placeholder="Enter username:"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <br />
          <div className="d-inline-flex mt-3 ">
            <div className="h-8 bg-white rounded-l-lg">
              <EmailIcon className="bg-white rounded-lg mt-1 " />
            </div>
            <input
              type="email"
              name="name"
              className="h-8 w-46   rounded-r-lg"
              id="name"
              placeholder="Enter Email id:"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <br />
          <div className="d-inline-flex mt-3">
            <div className="h-8 bg-white rounded-l-lg">
              <LockIcon className="bg-white rounded-lg mt-1" />
            </div>
            <input
              type="password"
              name="pass"
              className="h-8  w-46  rounded-r-lg"
              id="pass"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <br />
          <div className="d-inline-flex mt-3">
            <div className="h-8 bg-white rounded-l-lg">
              <LockIcon className="bg-white rounded-lg mt-1" />
            </div>
            <input
              type="password"
              name="pass"
              className="h-8 w-46  rounded-r-lg"
              id="pass"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <br />
        </div>
        <div className=" p-1 mt-5 text-center absolte w-12  ml-36 rounded-full  bg-gradient-to-r from-fuchsia-400 to-purple-400 hover:from-fuchsia-200 hover:to-purple-500 ">
          <button type="submit">
            <ArrowForwardIcon />
          </button>
        </div>
      </form>
      <div className="mt-[9rem]">
        <button className=" ml-12">
          Already Have an Account ?{" "}
          <button className="underline" onClick={() => navigate(-1)}>
            Click here
          </button>
        </button>
      </div>
    </div>
  );
};
