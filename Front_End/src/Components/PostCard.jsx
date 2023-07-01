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
import Follow from "./opportunity/parts/follow";

function PostCard({ post }) {
  const navigate = useNavigate();
  const [follow, setFollow] = useState(false);
  const setFollowbuton = () => {
    setFollow(!follow);
  };
  const [isLike, setIsLike] = useState(false);
  const OnLike = () => {
    setIsLike(!isLike);
  };
  const [isSave, setIsSave] = useState(false);
  const OnSave = () => {
    setIsSave(!isSave);
  };
  const GoToProfile = () => {
    navigate("/visitprofile");
  };

  return (
    <div>
      <div className="flex flex-row mt-3 mb-1 ml-2 ">
        <AccountCircleSharpIcon fontSize="large" />
        <div className="ml-2 flex-col flex">
          <button className="text-sm font-bold" onClick={GoToProfile} >{post.username}</button>
          <button className="text-xs text-left">{post.place}</button>
        </div>
        <div className="right-0 ml-36">
          <button onClick={setFollowbuton} className="bg-black/80 text-white p-1 rounded-md">
            {!follow ? "Follow" : "Unfollow"}
          </button>
        </div>
      </div>
      <div className="picture">
        <img
          src={post.link}
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
        <div className="save absolute right-0">
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
            <span className="font-bold">{post.likes}</span>
          ) : (
            <span className="font-bold">{post.likes + 1}</span>
          )}{" "}
          others
        </p>
        <p>{post.caption}</p>
        <p>View all {post.comments} comments..</p>
      </div>
    </div>
  );
}

export default PostCard;
