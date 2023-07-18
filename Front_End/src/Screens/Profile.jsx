import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyPostImage from "../Components/MyPostImage";
import { useDispatch, useSelector } from "react-redux";
import  {loadUser,logout, myAllPost}  from "../reducer/Actions/UserAction";

function Profile(
  // { route, isFocused }
  ) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [avatar, setAvatar] = useState(defaultImg);
  const { user,isAuthenticated } = useSelector((state) => state.user);
  const {posts}  = useSelector((state) => state.user);
  // console.log(posts.length)
  const myPosts = posts;
  // console.log(myPosts);
  console.log('isAuthenticated : ',isAuthenticated)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(myAllPost());
    },5000);
  
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(loadUser());
    },5000);
  
    return () => clearTimeout(timer);
  }, []);
  
  const handleLogOut = async () => {
    dispatch(logout())
    console.log("log out");
    navigate("/login")
  }
  // useEffect(() => {
  //   if (route.params?.image) {
  //     setAvatar(route.params.image);
  //   //   const myform = new FormData();
  //   myform.append("file", {
    //     uri: route.params.image,
    //     type: mime.getType(route.params.image),
    //     name: route.params.image.split("/").pop(),
    //   });
    //   dispatch(updatePic(myform));
    // }
  //   dispatch(loadUser());
  // }, [route.params, dispatch, isFocused]);

  // useEffect(() => {
  //   if (user?.avatar) {
  //     setAvatar(user.avatar.url);
  //   }
  // }, [user]);
  // console.log(isAuthenticated)
  return (
    <>
    { isAuthenticated && (
      <div className="flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="sticky top-0 bg-[#8b41d0] w-full lg:w-[700px] py-4 pl-20 pr-4">
        <img
          src={user?.photo?.url}
          alt="..."
          className="shadow-xl rounded-full w-48 h-48 lg:w-80 lg:h-80 lg:m-10 align-middle border-none"
        />
        <div className="flex lg:ml-20 flex-row mt-4 lg:mt-0 lg:visible">
        <div className="flex flex-col justify-start space-x-4 mb-2 lg:justify-start m-2">
            <button className="font-semibold text-base text-white px-2 bg-[#9659cf] rounded-lg">
              Post
            </button>
            <p className="font-semibold text-base  text-black">{myPosts.length}</p>
          </div>
          <div className="flex flex-col justify-start space-x-4 mb-2 lg:justify-start m-2">
            <button className="font-semibold text-base text-white px-2 bg-[#9659cf] rounded-lg">
              Follower
            </button>
            <p className="font-semibold text-base text-black">{user?.follower.length}</p>
          </div>
          <div className="flex flex-col justify-start space-x-4 mb-2 lg:justify-start m-2">
            <button className="font-semibold text-base text-white px-2 bg-[#9659cf] rounded-lg">
              Following
            </button>
            <p className="font-semibold text-base text-black">{user?.following.length}</p>
          </div>
        </div>
        <div className="flex justify-start mb-2 lg:ml-28">
          <button
            className="w-48 text-white font-semibold bg-[#9659cf] rounded-lg"
            onClick={() => navigate("/editprofile")}
          >
            Edit Profile
          </button>
        </div>
        <div className="pl-4 p-2 bio text-slate-200 text-start lg:text-left">
          <p>{user?.name}</p>
          <p>Bio</p>
          <p>{user?.biodata?.line1}</p>
          <p>{user?.biodata?.line2}</p>
          <p>{user?.biodata?.line3}</p>
          <p>{user?.biodata?.line4}</p>
          <p>{user?.biodata?.line5}</p>
        </div>
      </div>
      
      {/* Right Side */}
      <div className="flex-1 bg-[#8b41d0] overflow-y-auto">
        <p className="text-center justify-center bg-[#a157e7] py-1 text-white font-semibold text-lg w-full">
          All Posts
        </p>
        </div>
        <div className="flex flex-wrap p-2 pl-4 bg-white">
          {myPosts?.map((post) => (
            <MyPostImage post={post} key={post._id} />
            ))}
      </div>
      <div>
      <button className="bg-red-500 w-full h-10 mb-20" onClick={handleLogOut} >Log Out</button>
      </div>
    </div>
    )
  }
    {/* { !isAuthenticated && navigate("/login")} */}
  
      </>
    );
}

export default Profile;