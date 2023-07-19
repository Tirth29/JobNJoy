// import { motion } from "framer-motion";
// import ReactPlayer from "react-player";
// // import v1 from "../Video/1.mp4"
// const ReelCard = (reel) => {
//   return (
//     <>
//       <div className="w-full h-[600px] overflow-x-auto overflow-y-hidden wrap">
//         <div className="flex flex-row gap-10 p-10">
//           <motion.div className="card relative ">
{
  /* <video width="700" height="500" controls>
  <source src={reel.video} type="video/mp4" />
</video>; */
}
//             <ReactPlayer
//               className="react-player fixed-bottom"
//               url={reel.video}
//               width="100%"
//               height="600"
//               controls={true}
//             />
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ReelCard;

// import { motion, AnimatePresence } from "framer-motion";
// import ReactPlayer from "react-player";

// const ReelCard = ({ reel }) => {
//   return (
//     <div className="w-full h-[600px] overflow-hidden relative">
//       <div className="flex flex-row gap-10 p-10">
//         <AnimatePresence>
//           <motion.div
//             key={reel.video}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 100 }}
//             transition={{ duration: 0.5 }}
//             className="card relative"
//           >
//             <ReactPlayer
//               className="react-player fixed-bottom"
//               url={reel.video}
//               width="100%"
//               height="700px"
//               controls={true}
//               // playing={true}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ReelCard;
// import { useEffect, useRef } from "react";
// const playerRef = useRef(null);
// const cardRef = useRef(null);

// useEffect(() => {
//   const observer = new IntersectionObserver(handleIntersection, {
//     threshold: 0.5, // Adjust the threshold as needed
//   });

//   observer.observe(cardRef.current);

//   return () => {
//     observer.disconnect();
//   };
// }, []);

// const handleIntersection = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       playerRef.current?.seekTo(0); // Reset video to start
//       playerRef.current?.pause(); // Pause when out of view
//     } else {
//       playerRef.current?.play(); // Start playing when in view
//     }
//   });
// };
// import ReactPlayer from "react-player";

// const handleVideoClick = () => {
//   if (isCurrentVideo) {
//     setIsPlaying(!isPlaying);
//   } else {
//     setIsPlaying(true);
//     setCurrentVideo(reel.id);
//   }
// };

// const handleVideoClick = () => {
//   if (isCurrentVideo) {
//     setIsPlaying(!isPlaying);
//   } else {
//     setIsPlaying(true);
//     setCurrentVideo(reel.id);
//   }
// };

// const videoRef = useRef();
// const [stop, setStop] = useState(false);

// const handleVideo = () => {
//     setStop(!stop);
//     if (stop === true) {
//         videoRef.current.pause();
//     } else {
//         videoRef.current.play();
//     }
// };

// const [playing, setPlaying] = useState(false);
// const videoRef = useRef(null);
//
//   useEffect(() => {
//   let video = document.querySelector("video");
//   let observer = new IntersectionObserver(
//     (entry) => {
//       if (entry.intersectionRatio != 0.5 && !playing) {
//         videoRef.current.pause();
//         setPlaying(true);
//       } else if (playing) {
//         videoRef.current.play();
//         setPlaying(false);
//       }
//     },
//   );
//   observer.observe(video);
// }, [playing]);

// const handleVideoPress = () => {
//   if (playing) {
//     videoRef.current.pause();
//     setPlaying(false);
//   } else {
//     videoRef.current.play();
//     setPlaying(true);
//   }
// };

// import {
//   AiFillHeart,
//   AiOutlineHeart,
//   AiOutlineSend,
//   AiOutlineComment,
//   AiOutlineProfile,
// } from "react-icons/ai";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
// const ReelCard = ({ reel, isCurrentVideo, setCurrentVideo }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isBookmarked, setIsBookMarked] = useState(false);

//   const LikeReel = () => {
//     setIsBookMarked(!isBookmarked);
//   };

//   return (
//     <div className="w-full h-[800px] overflow-hidden  scroll-smooth bg-purple-400">
//       <div
//         className="flex flex-row"
//         // onClick={handleVideoPress}
//       >
//         <AnimatePresence>
//           <motion.div key={reel.id} className="card relative ">
//             <div className="flex flex-column relative">
//               {/* <ReactPlayer
//                 className="react-player rounded-xl"
//                 url={reel.video}
//                 width="300px"
//                 height="580px"
//                 // controls={true}
//                 playing={isPlaying}
//               /> */}
//               {/* <video
//               width="100%"
//               height="700px"
//               controls={false}
//               autoPlay={isPlaying}
//             >
//               <source src={reel.video} type="video/mp4" />
//             </video> */}
//               <video
//                 className="w-full h-auto border border-gray-200 rounded-lg dark:border-gray-700"
//                 controls
//               >
//                 <source src={reel.video} type="video/mp4" />
//               </video>
//               <div className="buttonGroup pt-40 flex flex-col absolute right-0">
//                 <button className="text-4xl my-1" onClick={LikeReel}>
//                   {isBookmarked ? (
//                     <AiFillHeart className="text-red-600" />
//                   ) : (
//                     <AiOutlineHeart />
//                   )}
//                   <p className="text-sm">{reel.likes}</p>
//                 </button>
//                 <button className="text-4xl my-1">
//                   <AiOutlineComment />
//                   <p className="text-sm">{reel.comments}</p>
//                 </button>
//                 <button className="text-4xl my-1">
//                   <AiOutlineSend />
//                   <p className="text-sm">{reel.shares}</p>
//                 </button>
//               </div>
//             </div>
//             <div className="pt-0">
//               <button className="text-4xl flex flex-row" onClick={LikeReel}>
//                 <AiOutlineProfile />
//                 <p className="text-xl font-bold">{reel.username}</p>
//               </button>
//               <p className="text-base font-normal">{reel.caption}</p>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ReelCard;

import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineSend,
  AiOutlineComment,
  AiOutlineProfile,
} from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { like } from "../reducer/Actions/UserAction";

const ReelCard = ({ reel }) => {


  const dispatch = useDispatch()
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();
  const [isBookmarked, setIsBookMarked] = useState(false);

  console.log('reel : ',reel)
  const LikeReel = () => {
   if(!isBookmarked){
      dispatch(like(reel._id))
      
   }
  };

  const startVideo = () => {
    setIsPlaying(true);
    videoRef.current.play();
    console.log("startVideo");
  };

  const pauseVideo = () => {
    setIsPlaying(false);
    videoRef.current.pause();
    console.log("pause");
  };

  return (
    <div className="w-full h-[800px] lg:w-96 lg:mx-[530px] overflow-scroll scroll-smooth bg-black">
      <div className="flex flex-row">
        <AnimatePresence>
          <motion.div key={reel._id} className="card relative">
            <div className="flex flex-column relative ">
              <button onClick={isPlaying ? pauseVideo : startVideo} className="">
                <video
                  ref={videoRef}
                  className="w-full h-auto border border-gray-200 rounded-lg dark:border-gray-700"
                  // controls
                  // onClickCapture={isPlaying ? pauseVideo : startVideo}
                >
                  <source src={reel.reel.url} type="video/mp4" />
                </video>
              </button>
              <div className="buttonGroup mt-52 flex flex-col absolute right-0 bg-white/50 rounded-2xl">
                <button className="text-4xl my-1" onClick={LikeReel}>
                  {isBookmarked ? (
                    <AiFillHeart className="text-red-600" />
                  ) : (
                    <AiOutlineHeart />
                  )}
                  <p className="text-sm">{reel.likes.length}</p>
                </button>
                <button className="text-4xl my-1">
                  <AiOutlineComment />
                  <p className="text-sm">{reel.comments}</p>
                </button>
                <button className="text-4xl my-1">
                  <AiOutlineSend />
                  <p className="text-sm">{reel.shares}</p>
                </button>
              </div>
            </div>
            <div className="pt-0">
              <button className="text-4xl flex flex-row" onClick={LikeReel}>
                <AiOutlineProfile />
                <p className="text-xl font-bold">{reel.username}</p>
              </button>
              <p className="text-base font-normal">{reel.caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ReelCard;
