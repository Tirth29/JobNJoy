import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

export default function Reg2() {
  return (
    <div className="h-[46.4rem] w-full fixed bg-gradient-to-b from-violet-400 to-fuchsia-100">
      <div class=" rounded-full h-[8rem] ml-28 mt-5 w-[8rem] bg-gradient-to-r from-violet-700 via-purple-400 to-fuchsia-500 p-1 hover:bg-gradient-to-b from-violet-700 via-purple-400 to-fuchsia-500 hover:delay-1000 ">
        <div class="flex items-center justify-center">
          <button className="rounded-full bg-slate-100 h-[7rem] mt-1 w-[7rem]">
            <AddPhotoAlternateIcon />
            <img src="" alt="" />
          </button>
        </div>
      </div>
      <input type="file" className="ml-32 mt-6 text-sm bg-transparent " />
      <input
        type="text"
        name=""
        id=" "
        placeholder="Your Full Name"
        className="px-3 w-44 border-2 border-fuchsia-800 font-black h-9  rounded-xl ml-[6rem] mt-16"
      />
      <div className="ml-24 mt-8 h-10">
        <div className="bg-white  border-fuchsia-800 border-2 px-3 py-1 rounded-xl h-8 w-44">
          <label htmlFor="Gender" className="text-black ">
            Gender:
          </label>
          <select id="gender" name="gender" className="absolute" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
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
        <div className="bg-white  absolute h-40 w-44 mt-12 p-2 border-2 rounded-xl border-fuchsia-800">
          <div className="card rounded-xl">
            <div className="card-header">BioData</div>
            <ul className="list-group list-group-flush ">
              <li className="list-group-item underline h-8"></li>
              <li className="list-group-item underline h-8"></li>
              <li className="list-group-item underline h-8"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
