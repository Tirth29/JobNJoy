// import React from 'react'
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import TurnedInOutlinedIcon from "@mui/icons-material/TurnedInOutlined";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { otheruserProfile,addlikes, dislikes, addfollower, deletefollower, loadUser } from "../reducer/Actions/UserAction";






function PostCard({post,navigation,likes }) {
 
 
  const dispatch = useDispatch();

 
  const { user,isAuthenticated } = useSelector((state) => state.user);
  
  // const likes = useSelector((state)=>state.user.like)

//   useEffect(()=>{
//     dispatch(loadUser());
// },[])
  
  const navigate = useNavigate();
  const [follow, setFollow] = useState(false);
  const setFollowbuton = () => {
    if(!follow){
      dispatch(addfollower(post.username))
      setFollow(true)
    }
    else{
      dispatch(deletefollower(post.username))
      setFollow(false)
    }
  };
  const [isLike, setIsLike] = useState(false);
  const OnLike = () => {
    if(isLike == true){
      setIsLike(false)
        dispatch(dislikes(post._id));
        // console.log('likes1 : ',isLike)   
    }else
    {
      dispatch(addlikes(post._id))
      setIsLike(true);
    }
    // console.log('likes : ',isLike)

  };
  const [isSave, setIsSave] = useState(false);
  const OnSave = () => {
    setIsSave(!isSave);
  };

  

  useEffect(()=>{
   console.log('user like :',user)
    const availible = likes.includes(user._id)
    if(availible){
      // console.log('availible : ',availible)
      setIsLike(availible)
    }

  })
  useEffect(()=>{
    console.log('user : ',user)
    console.log('userfollowing : ',user.following)
    console.log('isAuthenticated : ',isAuthenticated)
      const availible = user.following.includes(post.username)
      console.log('availehs : ',availible)

      if(availible){
        setFollow(true)
      }
  })
  // useEffect(()=>{
   
  //       dispatch(checkLikes(post._id))
       
      
  // },[dispatch])
  // const setlike = () =>{
   
  //   const timer = setTimeout(() => {
  //    if(state.check)
  //    {
  //     console.log('state : ',state.check,'post : ',post)
  //    }
  //     setIsLike(state.check)

  //    if(isLike)
  //    {
  //     console.log('like : ',isLike)
  //    }
  //   }, 2000);
  //   return () => clearTimeout(timer)
  // }
  // setlike()
  
 
//  const timer =setTimeout(() => {
//   const checks  = useSelector((state) => state.checks);
//   console.log('checks : ',checks)
//  }, 2000);


  
  
  // const {profile} = getOtherUserProfile(navigation,dispatch,post.username,"visitprofile");
  // const {loading} = useSelector((state) => state.user);
  // const loading = useMessageAndErrorUser(navigation,dispatch,"visitprofile");
  const GoToProfile = async() => {
    console.log(post.username);
      await dispatch(otheruserProfile(post.username))
    navigate("/visitprofile")
  };

 
  
  return (
    <div className="lg:mx-[500px]" >
      <div className="flex flex-row mt-3 mb-1 ml-2 ">
        <AccountCircleSharpIcon fontSize="large" />
        <div className="ml-2 flex-col flex">
          <button className="text-sm font-bold" onClick={GoToProfile} >{post?.username}</button>
          <button className="text-xs text-left">{post?.location ? post.location : `` }</button>
        </div>
        <div className="right-0 ml-36">
          <button onClick={setFollowbuton} className="bg-black/80 text-white p-1 rounded-md">
            {!follow ? "Follow" : "Unfollow"}
          </button>
        </div>
      </div>
      <div className="picture">
        <img
          src={post?.photo?.url}
          alt="post"
          className="w-[330px] h-96 rounded-xl m-3 shadow-2xl"
        />
      </div>
      <div className="relative flex flex-row">
        <div className="post-below ">
          <button onClick={OnLike} className="m-1">
            {isLike ? (
              <FavoriteSharpIcon className="text-red-600" fontSize="large" />
            ) : (
              <FavoriteBorderSharpIcon
                fontSize="large"
                className="text-black/80"
              />
            )}
          </button>
          <button className="m-1 text-black/80">
            <InsertCommentOutlinedIcon fontSize="large" />
          </button>
          <button className="m-1 text-black/80">
            <SendOutlinedIcon fontSize="large" />
          </button>
        </div>
        <div className="save absolute lg:right-[200px] right-0">
          <button onClick={OnSave} className="m-1 right-0 text-black/80">
            {isSave ? (
              <TurnedInOutlinedIcon fontSize="large" />
            ) : (
              <TurnedInNotOutlinedIcon fontSize="large" />
            )}
          </button>
        </div>
      </div>
      <div className="bottom ml-2">
        <p>
          Liked by <span className="font-bold">{post.username}</span> and{" "}
          {!isLike ? (
            <span className="font-bold">{post.likes?.length}</span>
          ) : (
            <span className="font-bold">{post.likes?.length + 1}</span>
          )}{" "}
          others
        </p>
        <p>{post?.caption}</p>
        <p>View all {post?.comments} comments..</p>
      </div>
    </div>
    
  );
}

export default PostCard;
