import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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

    if (password.trim() !== confirmPassword.trim()) {
      alert("Confirmed password doesn't match");
    } else {
      navigate("/Register2");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-violet-400 to-fuchsia-100">
      <div className="max-w-md mx-auto p-6 bg-gradient-to-b from-violet-400 to-fuchsia-200 rounded-xl shadow-2xl">
        <h1 className="text-2xl font-mono text-center pb-8">Create Your Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-lg">
              <AccountCircleIcon />
            </div>
            <input
              type="text"
              name="name"
              className="pl-12 h-10 w-full rounded-lg"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="relative mb-4">
            <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-lg">
              <LockIcon />
            </div>
            <input
              type="email"
              name="email"
              className="pl-12 h-10 w-full rounded-lg"
              placeholder="Enter Email id"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="relative mb-4">
            <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-lg">
              <LockIcon />
            </div>
            <input
              type="password"
              name="password"
              className="pl-12 h-10 w-full rounded-lg"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="relative mb-4">
            <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-lg">
              <LockIcon />
            </div>
            <input
              type="password"
              name="confirmPassword"
              className="pl-12 h-10 w-full rounded-lg"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-400 hover:from-fuchsia-200 hover:to-purple-500 text-white"
            >
              <ArrowForwardIcon />
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <p>Already have an account?</p>
          <button className="underline" onClick={() => navigate(-1)}>
            Click here
          </button>
        </div>
      </div>
    </div>
  );
}