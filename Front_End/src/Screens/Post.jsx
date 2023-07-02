// import React from 'react'
import PostCard from "../Components/PostCard";
import PostHeader from "../Components/PostHeader";
import { motion } from "framer-motion";

const Posts = [
  {
    id: 1,
    link: "/Photo/1.JPG",
    username: "user@123",
    caption: "This is a caption",
    likes: 723,
    comments: 23,
    place: "Surat",
  },
  {
    id: 2,
    link: "/Photo/2.JPG",
    username: "user@123",
    caption: "This is a caption",
    likes: 723,
    comments: 23,
    place: "Surat",
  },
  {
    id: 3,
    link: "/Photo/3.JPG",
    username: "user@123",
    caption: "This is a caption",
    likes: 723,
    comments: 23,
    place: "Surat",
  },
  {
    id: 4,
    link: "/Photo/4.JPG",
    username: "user@123",
    caption: "This is a caption",
    likes: 723,
    comments: 23,
    place: "Surat",
  },
  {
    id: 5,
    link: "/Photo/5.JPG",
    username: "user@123",
    caption: "This is a caption",
    likes: 723,
    comments: 23,
    place: "Surat",
  },
  {
    id: 6,
    link: "/Photo/6.JPG",
    username: "user@123",
    caption: "This is a caption",
    likes: 723,
    comments: 23,
    place: "Surat",
  },
  {
    id: 7,
    link: "/Photo/7.JPG",
    username: "user@123",
    caption: "This is a caption",
    likes: 723,
    comments: 23,
    place: "Surat",
  },
  {
    id: 8,
    link: "/Photo/8.JPG",
    username: "user@123",
    caption: "This is a caption",
    likes: 723,
    comments: 23,
    place: "Surat",
  },
  {
    id: 9,
    link: "/Photo/9.JPG",
    username: "user@123",
    caption: "This is a caption",
    likes: 723,
    comments: 23,
    place: "Surat",
  },
];

function Post() {
  return (
    <div>
      <PostHeader />
      <motion.div className="pt-10">
        {
          Posts?.map((post)=>(
            <PostCard key={post.id} post={post} />
          ))
        }
      </motion.div>
    </div>
  );
}

export default Post;
