import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function Register2() {
  return (
    <div className="h-[46.4rem] w-full fixed bg-gradient-to-b from-violet-400 to-fuchsia-100">
      <form action="get">
        <div className=" rounded-full h-[8rem] ml-28 mt-5 w-[8rem] bg-gradient-to-r from-violet-700 via-purple-400 to-fuchsia-500 p-1 hover:bg-gradient-to-b from-violet-700 via-purple-400 to-fuchsia-500 hover:delay-1000 ">
          <div className="flex items-center justify-center">
            <button className="rounded-full bg-slate-100 h-[7rem] mt-1 w-[7rem]">
              <AddPhotoAlternateIcon />
              <img src="Front_End/src/assets/react.svg" alt="" />
            </button>
          </div>
        </div>
        <input type="file" className="ml-32 mt-6 text-sm bg-transparent " />
        <div className="text-black">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Your Full Name"
            className="px-3 w-44 border-2 border-fuchsia-800 h-9  rounded-xl ml-[6rem] mt-16"
            required
          />
        </div>
        <div className="ml-24 mt-8 h-10">
          <div className="bg-white  border-fuchsia-800 border-2 px-3 py-1 rounded-xl h-8 w-44">
            <label htmlFor="Gender" className="text-black">
              Gender:
            </label>
            <select id="gender" name="gender" className="absolute" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            required
          </div>
          <br />
          <div className="bg-white mt-2 border-fuchsia-800 border-2 px-2 py-1 rounded-xl h-8 w-44">
            <label htmlFor="dob" className="text-black  ">
              DOB
            </label>
            <input
              type="date"
              name=""
              id=""
              className=" bg-transparent absolute border-1 w-28 ml-3 mt-[-0.2rem] rounded-xl "
            />
          </div>
          <div className="bg-white  absolute h-36 w-44 mt-12  border-2 rounded-xl border-fuchsia-800">
            <div className="card rounded-xl">
              <div className="card-header">BioData</div>
              <ul className="list-group list-group-flush ">
                <li className="list-group-item underline h-8 p-0">
                  <input type="text" className="w-[10.6rem] h-8  border-1 pl-1" />
                </li>
                <li className="list-group-item underline h-8 p-0">
                  <input type="text" className="w-[10.6rem] h-8 border-1 pl-1" />
                </li>
                <li className="list-group-item underline h-8 p-0">
                  <input type="text" className="w-[10.6rem] h-8  border-1 pl-1" />
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-52 w-24 ml-10 rounded-xl  bg-gradient-to-l from-fuchsia-300 to-purple-600 hover:from-fuchsia-200 hover:to-purple-400 ">
            <input
              type="submit"
              className=" h-5  rounded-lg text-white hover:text-black font-bold"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
