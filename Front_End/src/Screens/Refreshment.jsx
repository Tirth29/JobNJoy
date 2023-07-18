import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allReel } from "../reducer/Actions/UserAction";
import { Form, useNavigate } from "react-router-dom";
import FinalFooter from "../Components/FinalFooter";
import ReelCard from "../Components/ReelCard";

function Refreshment() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentVideo, setCurrentVideo] = useState(1);
  const rows = 2;

  const { loading, allreels } = useSelector((state) => state.user);
  const [shouldRender, setShouldRender] = useState(false);
  const [reels, setReels] = useState([]);
  const [page, setPage] = useState(1);

  const [Category, setCategory] = useState("all");

  useEffect(() => {
    dispatch(allReel());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Function to shuffle the array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

useEffect(() => {
  const shuffleTimer = setInterval(() => {
    const shuffledReels = shuffleArray(allreels).slice(0, rows);
    setReels(shuffledReels);
  }, 1000);

  return () => clearInterval(shuffleTimer);
}, [allreels, rows]);

  

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Funny_id = "649eaf4c200d188b6bce8276";
  const Coding_id = "649eb264a025b7eaae238863";
  const Cricket_id = "649eb26fa025b7eaae238866";
  const Eighteen_id = "649eb27da025b7eaae238869";

  const handleCategoryReel = (category) => {
    // setCategory(category);
    if(category === "funny")
    {
      setCategory(Funny_id);
    }
    if(category === "coding")
    {
      setCategory(Coding_id);
    }
    if(category === "18+")
    {
      setCategory(Eighteen_id);
    }
    if(category === "cricket")
    {
      setCategory(Cricket_id);
    }
  };

  const filteredReels =
   Category === "all"
      ? allreels
      : allreels.filter((reel) => reel.category === Category);

  // const formDate = new FormData();
  // formDate.append("category", Category);
console.log(Category);
  return shouldRender ? (
    <div>
      <div className="header top-0 fixed z-20 flex flex-row bg-black p-1 w-full">
        <button
          className={`rounded-xl bg-white py-0 mr-1 lg:ml-[430px] text-black px-2 h-10 text-lg font-semibold ${
            Category === "all" ? "bg-blue-500" : ""
          }`}
          onClick={() =>setCategory("all")}
        >
          <p>All</p>
        </button>
        <button
          className={`rounded-xl bg-white py-0 mr-1 lg:ml-[430px] text-black px-2 h-10 text-lg font-semibold ${
            Category === Funny_id ? "bg-blue-500" : ""
          }`}
          onClick={() => handleCategoryReel("funny")}
        >
          <p>Funny</p>
        </button>
        <button
          className={`rounded-xl bg-white py-0 mr-1 lg:ml-10 text-black px-2 h-10 text-lg font-semibold ${
            Category === Coding_id ? "bg-blue-500" : ""
          }`}
          onClick={() => handleCategoryReel("coding")}
        >
          <p>Coding</p>
        </button>
        <button
          className={`rounded-xl bg-white py-0 mr-1 lg:ml-10 text-black px-2 h-10 text-lg font-semibold ${
            Category === Cricket_id ? "bg-blue-500" : ""
          }`}
          onClick={() => handleCategoryReel("cricket")}
        >
          <p>Cricket</p>
        </button>
        <button
          className={`rounded-xl bg-white py-0 mr-1 lg:mx-10 text-black px-2 h-10 text-lg font-semibold ${
            Category === Eighteen_id ? "bg-blue-500" : ""
          }`}
          onClick={() => handleCategoryReel("18+")}
        >
          <p>18+</p>
        </button>

        <button
          className="rounded-xl bg-white py-0 mr-1 text-black px-2 h-10 text-lg font-semibold"
          onClick={() => navigate("/reelupload")}
        >
          <p>Upload Reel</p>
        </button>
      </div>
      <div>
        {filteredReels.map((reel) => (
          <ReelCard
            key={reel}
            reel={reel}
            isCurrentVideo={currentVideo === reel.id}
          />
        ))}
      </div>

      <FinalFooter />
    </div>
  ) : null;
}

export default Refreshment;
