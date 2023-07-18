// import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import ReelCard from "../Components/ReelCard";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import FinalFooter from "../Components/FinalFooter";

const reels = [
  {
    id: 1,
    video: "/Video/1.mp4",
    likes: "1.5M ",
    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
  {
    id: 2,
    video: "/Video/2.mp4",
    likes: "1.5M ",
    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
  {
    id: 3,
    video: "/Video/3.mp4",
    likes: "1.5M ",

    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
  {
    id: 4,
    video: "/Video/4.mp4",
    likes: "1.5M ",
    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
  {
    id: 5,
    video: "/Video/5.mp4",
    likes: "1.5M ",
    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
  {
    id: 6,
    video: "/Video/6.mp4",
    likes: "1.5M ",
    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
  {
    id: 7,
    video: "/Video/7.mp4",
    likes: "1.5M ",
    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
  {
    id: 8,
    video: "/Video/8.mp4",
    likes: "1.5M ",
    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
  {
    id: 9,
    video: "/Video/9.mp4",
    likes: "1.5M ",
    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
  {
    id: 10,
    video: "/Video/10.mp4",
    likes: "1.5M ",
    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
  {
    id: 11,
    video: "/Video/11.mp4",
    likes: "1.5M ",
    comments: "247.5K ",
    shares: "504.6k ",
    username: "user@123",
    caption: "This is a sample caption",
  },
];

function Refreshment() {
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(1);
  
  const stopCurrentVideo = () => {
    setCurrentVideo(null);
  };

  const rows = 2; 

  const [reel, setReels] = useState([...reels.slice(0, rows)]);
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setReels([...reels.slice(0, page * rows)]);
  }, [page]);


  return (
    <div>
      <div className="header top-0 fixed z-20 flex flex-row bg-black p-1 w-full">
        <button className="rounded-xl bg-white py-0 mr-1 lg:ml-[430px] text-black px-2 h-10 text-lg font-semibold ">
          <p>Funny</p>
        </button>
        <button className="rounded-xl bg-white py-0 mr-1 lg:ml-10 text-black px-2 h-10 text-lg font-semibold ">
          <p>Coding</p>
        </button>
        <button className="rounded-xl bg-white py-0 mr-1 lg:ml-10 text-black px-2 h-10 text-lg font-semibold ">
          <p>Cricket</p>
        </button>
        <button className="rounded-xl bg-white py-0 mr-1 lg:mx-10 text-black px-2 h-10 text-lg font-semibold ">
          <p>18+</p>
        </button>
        <button className="rounded-xl bg-white py-0 mr-1 text-black px-2 h-10 text-lg font-semibold "
          onClick={()=>navigate("/reelupload")}
        >
          <p>Upload Reel</p>
        </button>
      </div>
      <motion.div>
        <AnimatePresence>
          {reel.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              stopCurrentVideo={stopCurrentVideo}
              isCurrentVideo={currentVideo === reel.id}
              currentVideo={reels.id}
              setCurrentVideo={setCurrentVideo}
            />
          ))}
        </AnimatePresence>
      </motion.div>
      <FinalFooter/>
    </div>
  );
}

export default Refreshment;
