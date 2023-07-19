import{useEffect, useState} from "react";
import MyPostImage from "../Components/MyPostImage";
import { useDispatch, useSelector } from "react-redux";
import { addfollower, otherUserPost,deletefollower } from "../reducer/Actions/UserAction";
// export const myPosts = [
//   {
//     id: 1,
//     link: "/Photo/1.JPG",
//   },
//   {
//     id: 2,
//     link: "/Photo/2.JPG",
//   },
//   {
//     id: 3,
//     link: "/Photo/3.JPG",
//   },
//   {
//     id: 4,
//     link: "/Photo/4.JPG",
//   },
//   {
//     id: 5,
//     link: "/Photo/5.JPG",
//   },
//   {
//     id: 6,
//     link: "/Photo/6.JPG",
//   },
//   {
//     id: 7,
//     link: "/Photo/7.JPG",
//   },
// ];
function Profile({navigation}) {
  const dispatch = useDispatch();
  const {profile,user} = useSelector((state) => state.user);
  const Profile = profile;
  const [follow, setFollow] = useState(false);
  const [countfollower,setcountfollower]=useState(Profile[0]?.follower?.length)

  
  const setFollowbuton = () => {
    console.log('id : ',Profile[0].username)
      if(!follow){
        dispatch(addfollower(Profile[0].username))
        setFollow(true)
        setcountfollower(countfollower+1)
      }
      else  {
        dispatch(deletefollower(Profile[0].username))
      setFollow(false)
      setcountfollower(countfollower-1)
      }
  };
  // console.log("1s finished")
  console.log('user : ',user)
  console.log('profile : ',profile[0])
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(otherUserPost(Profile[0]?.username));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(()=>{
    const available = Profile[0]?.follower.includes(user.username)
    console.log('available : ',available)
    setFollow(available)
  },[])
  const {otheruserpost} = useSelector((state) => state.user);
  // console.log(otheruserpost)
  return  (
    <div className="flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="sticky top-0 bg-[#8b41d0] w-full lg:w-[700px] py-4 pl-20 pr-4">
        <img
          src={Profile[0]?.photo?.url}
          alt="..."
          className="shadow-xl rounded-full w-48 h-48 lg:w-80 lg:h-80 lg:m-10 align-middle border-none"
        />
        <div className="flex lg:ml-20 flex-row mt-4 lg:mt-0 lg:visible">
          <div className="flex flex-col justify-start space-x-4 mb-2 lg:justify-start m-2">
            <button className="font-semibold text-base text-white px-2 bg-[#9659cf] rounded-lg">
              Post
            </button>
            <p className="font-semibold text-base  text-black">{otheruserpost?.length}</p>
          </div>
          <div className="flex flex-col justify-start space-x-4 mb-2 lg:justify-start m-2">
            <button className="font-semibold text-base text-white px-2 bg-[#9659cf] rounded-lg">
              Follower
            </button>
            <p className="font-semibold text-base text-black">{countfollower}</p>
          </div>
          <div className="flex flex-col justify-start space-x-4 mb-2 lg:justify-start m-2">
            <button className="font-semibold text-base text-white px-2 bg-[#9659cf] rounded-lg">
              Following
            </button>
            <p className="font-semibold text-base text-black">{Profile[0]?.following?.length}</p>
          </div>
        </div>
        <div className="flex justify-start mb-2 lg:ml-28">
        <button
              className="w-48  text-white font-semibold bg-[#9659cf] rounded-lg"
              onClick={setFollowbuton}
            >
              {!follow ? "Follow" : "Unfollow"}
            </button>
        </div>
        <div className="pl-4 p-2 bio text-slate-200 text-start lg:text-left">
          <p>{Profile[0]?.name}</p>
          <p>Bio</p>
          <p>{Profile[0]?.biodata?.line1}</p>
          <p>{Profile[0]?.biodata?.line2}</p>
          <p>{Profile[0]?.biodata?.line3}</p>
          <p>{Profile[0]?.biodata?.line4}</p>
          <p>{Profile[0]?.biodata?.line5}</p>
        </div>
      </div>
      
      {/* Right Side */}
      {follow && <div className="flex-1 bg-[#8b41d0] overflow-y-auto">
        <p className="text-center justify-center bg-[#a157e7] py-1 text-white font-semibold text-lg w-full">
          All Posts
        </p>
        </div>}
        <div className="flex flex-wrap p-2 pl-4 bg-white">
        { follow ?  otheruserpost?.map((post) => (
           <MyPostImage post={post} key={post.id} />
          )) : 
          <>
            <div className="text-center font-semibold text-lg">
                Follow This Profile to see the posts
            </div>
          </>}
  
      </div>
    </div>
  );
}

export default Profile;