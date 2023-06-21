import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Forget = () => {
  const navigate = useNavigate();
const [hide,setHide]=useState('hidden');
const [noHide,setNoHide]=useState('visible');
let change=()=>
{
  console.log("hello")
    setHide('visible');
    setNoHide('hidden');
}
  return (
    <div className="h-[46.4rem] w-full fixed bg-gradient-to-b from-violet-400 to-fuchsia-100 ">
      <h1 className="font-serif absolute text-3xl px-12 py-20">Get Your Password</h1>

      <div className="h-50 mx-16 p-5 mt-64 border-none rounded-xl  shadow-2xl backdrop-blur-sm outline outline-offset-2 bg-gradient-to-b from-violet-400 to-fuchsia-200 outline-purple-400">
        <div className="d-inline-flex">
          <AccountCircleIcon className="absolute " />
          <input
            type="text"
            name="name"
            className="h-6 w-[11.8rem] rounded-lg px-5 "
            id="name"
            placeholder="   Username"
          />
        </div>
        <br />
        <div className={`pt-0 pl-7 ${noHide}`}>
        <input type="checkbox" className="m-2" onClick={change}/>
        <button className="text-sm"  >Get Password</button>
        </div>
        <div className={`d-inline-flex ${hide}`}>
          <LockIcon  className="absolute"/>

          <input
            type="password"
            name="pass"
            className="h-6 w-[11.8rem] rounded-lg px-3"
            id="pass"
            placeholder="    Password"
          />
        </div>
      </div>
      <div className=" p-1 mt-5 text-center absolte w-24 ml-32 rounded-xl  bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 ">
        <button className=" h-5  rounded-lg text-white hover:text-black font-bold">
            Submit
        </button>
      </div>
     
    </div>
  );
};
