import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockIcon } from "@mui/icons-material/Lock";
import { EmailIcon } from "@mui/icons-material/Email";
import { login } from "../reducer/Actions/UserAction";
import { useDispatch } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleUsernameChange = (e) => {
  //   setUsername(e.target.value);
  // };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const handleSubmit = () => {
  //   // e.preventDefault();
  //   dispatch(login(email, password));
  // };

  const HandleLoginSubmit = () => {
    dispatch(login(email, password));
    console.log("Login");
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-violet-400 to-fuchsia-100">
        <div className="max-w-md mx-auto p-6 bg-gradient-to-b from-violet-400 to-fuchsia-200 rounded-xl shadow-2xl">
          <h1 className="font-serif text-5xl text-center pb-8">Login</h1>
          {/* <div className="relative mb-2">
              <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-l-lg">
                <AccountCircleIcon />
              </div>
              {/* <input
                type="text"
                name="username"
                value={username}
                onChange={handleUsernameChange}
                className="pl-12 h-10 w-full rounded-lg"
                id="username"
                placeholder="Username"
              /> */}
          {/* </div> */}
          {/* <h1 className="opacity-50">---------------or----------------</h1> */}
          {/* <div className="mt-3"> */}
          <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-l-lg">
            <EmailIcon />
          </div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="pl-12 h-10 w-full rounded-lg"
            id="email"
            placeholder="Enter Email id"
          />
          {/* </div> */}

          <div className="mt-3">
            <div className="absolute flex items-center justify-center h-10 w-10 bg-white rounded-l-lg">
              <LockIcon />
            </div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="pl-12 h-10 w-full rounded-lg"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            className="text-sm mt-4 ml-12 underline opacity-40 hover:opacity-80"
            onClick={() => navigate("/Forget")}
          >
            Forget Password?
          </button>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                HandleLoginSubmit();
              }}
              type="submit"
              className="w-32 h-12 rounded-full bg-gradient-to-r from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 text-white"
            >
              Log In
            </button>
          </div>

          <div className="mt-8 text-center">
            <p> Don't have an account?</p>
            <button className="underline" onClick={() => navigate("/register")}>
              Click here
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
