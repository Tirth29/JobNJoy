import {useState} from "react";
import { useNavigate } from "react-router-dom";
import  MyPostImage  from "../Components/MyPostImage";
export const myPosts = [
  {
    id: 1,
    link: "/Photo/1.JPG",
  },
  {
    id: 2,
    link: "/Photo/2.JPG",
  },
  {
    id: 3,
    link: "/Photo/3.JPG",
  },
  {
    id: 4,
    link: "/Photo/4.JPG",
  },
  {
    id: 5,
    link: "/Photo/5.JPG",
  },
  {
    id: 6,
    link: "/Photo/6.JPG",
  },
  {
    id: 7,
    link: "/Photo/7.JPG",
  },
];
function VisitProfile() {
//   const navigate = useNavigate();
    const [follow, setFollow] = useState(false);
    const setFollowbuton = () => {
        setFollow(!follow);
    };
  return (
    <div className="">
      <div className="justify-start ">
        <div className="w-full h-full  py-4 px-4 bg-[#8b41d0]">
          <img
            src="/Photo/1.JPG"
            alt="..."
            className="shadow-xl rounded-full w-32 h-32 align-middle border-none"
          />
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="flex flex-col absolute top-10 right-[166px] ">
          <button className="font-semibold text-base text-white px-1 bg-[#9659cf] rounded-lg">
            {" "}
            Post{" "}
          </button>
          <p className="font-semibold text-base text-black px-2">15</p>
        </div>
        <div className="flex flex-col absolute top-10 right-[88px]">
          <button className="font-semibold text-base text-white px-1 bg-[#9659cf] rounded-lg">
            Follower{" "}
          </button>
          <p className="font-semibold text-base text-black px-5">15</p>
        </div>
        <div className="flex flex-col absolute top-10 right-1 ">
          <button className="font-semibold text-base text-white px-1 bg-[#9659cf] rounded-lg">
            {" "}
            Following{" "}
          </button>
          <p className="font-semibold text-base text-black px-4">15</p>
          <div className="flex absolute top-[55px] right-0">
            <button
              className="w-48  text-white font-semibold bg-[#9659cf] rounded-lg"
              onClick={setFollowbuton}
            >
              {!follow ? "Follow" : "Unfollow"}
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#8b41d0]">
        <div className="bio text-slate-200">
          <p>Name</p>
          <p>Bio</p>
          {/* {user?.biol1} For map actual data use this */}
          <p>line-1 Web developer</p>
          <p>line-2 UI/UX Designer</p>
          <p>line-3 App developer</p>
          <p>line-4 AI/ML </p>
          <p>line-5 </p>
        </div>
        <p className="text-center justify-center bg-[#a157e7] py-1 text-white font-semibold text-lg w-full ">
          All Posts
        </p>
        <div className="flex flex-row overflow-hidden flex-wrap p-2 pl-4 bg-white">
          { follow ?  myPosts?.map((post) => (
           <MyPostImage post={post} key={post.id} />
          )) : 
          <>
            <div className="text-center font-semibold text-lg">
                Follow This Profile to see the posts
            </div>
          </>}
        </div>
      </div>
    </div>
  );
}



export default VisitProfile;
