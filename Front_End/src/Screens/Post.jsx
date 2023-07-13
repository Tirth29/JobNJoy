// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../Components/PostCard";
import PostHeader from "../Components/PostHeader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { otherPost } from "../reducer/Actions/UserAction";

// const Posts = [
//   {
//     id: 1,
//     link: "/Photo/1.JPG",
//     username: "user@123",
//     caption: "This is a caption",
//     likes: 723,
//     comments: 23,
//     place: "Surat",
//   },
//   {
//     id: 2,
//     link: "/Photo/2.JPG",
//     username: "user@123",
//     caption: "This is a caption",
//     likes: 723,
//     comments: 23,
//     place: "Surat",
//   },
//   {
//     id: 3,
//     link: "/Photo/3.JPG",
//     username: "user@123",
//     caption: "This is a caption",
//     likes: 723,
//     comments: 23,
//     place: "Surat",
//   },
//   {
//     id: 4,
//     link: "/Photo/4.JPG",
//     username: "user@123",
//     caption: "This is a caption",
//     likes: 723,
//     comments: 23,
//     place: "Surat",
//   },
//   {
//     id: 5,
//     link: "/Photo/5.JPG",
//     username: "user@123",
//     caption: "This is a caption",
//     likes: 723,
//     comments: 23,
//     place: "Surat",
//   },
//   {
//     id: 6,
//     link: "/Photo/6.JPG",
//     username: "user@123",
//     caption: "This is a caption",
//     likes: 723,
//     comments: 23,
//     place: "Surat",
//   },
//   {
//     id: 7,
//     link: "/Photo/7.JPG",
//     username: "user@123",
//     caption: "This is a caption",
//     likes: 723,
//     comments: 23,
//     place: "Surat",
//   },
//   {
//     id: 8,
//     link: "/Photo/8.JPG",
//     username: "user@123",
//     caption: "This is a caption",
//     likes: 723,
//     comments: 23,
//     place: "Surat",
//   },
//   {
//     id: 9,
//     link: "/Photo/9.JPG",
//     username: "user@123",
//     caption: "This is a caption",
//     likes: 723,
//     comments: 23,
//     place: "Surat",
//   },
// ];

function Post() {
  const dispatch = useDispatch();
  const {loading, otherposts } = useSelector((state) => state.user);
  const [shouldRender, setShouldRender] = useState(false);

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  // console.log(otherposts)
 
  // console.log(Posts);
  useEffect(() => {
    setTimeout(() => {
       dispatch(otherPost());
    }, 1000);
  }, [dispatch]);
  const Posts =  otherposts;

  console.log('Post : ',Posts)
  // const shuffleArray = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     console.log('array i : ',array[i])
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };
  
  

  // var timeout = setTimeout(function() {
  //  const shuffleArray2 = shuffleArray(Posts)
  //  console.log('shuffleArray2 : ',shuffleArray2)
  //   clearTimeout(timeout); // Clear the timeout after function execution
  // }, 3000);
  
  return shouldRender ? (
    <div>
      <PostHeader />
      <motion.div className="pt-10">
        {Posts.map((post,index) => (
            
         <PostCard key={post._id} post={post} />
        
        
        ))}
        
        <div className="w-20 h-20 text-5xl"> Helllloooooo</div>
       
      </motion.div>
    </div>
  ):null;
}

export default Post;
