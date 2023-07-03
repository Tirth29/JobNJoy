import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [text, setText] = useState("");
  const message =
    "Introducing an innovative social networking app that combines the best features of leading professional and social platforms. Connect with industry peers and discover career opportunities.";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const showNextWord = () => {
      if (currentIndex < message.length) {
        setText((prevText) => prevText + message[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    };

    interval = setInterval(showNextWord, 100); // Adjust the duration between letters appearing here

    return () => clearInterval(interval);
  }, [message]);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <div className="carousel" style={{ height: "40vh" }}>
      <div className="carousel-inner">
        <div className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}>
          <img
            src="Back-End/pic/IMG_3827.jpg"
            className="d-block w-100 bg-slate-600 h-64"
            alt="Slide 1"
          />
        </div>
        <div className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}>
          <img
            src="Back-End/pic/IMG_3943.jpg"
            className="d-block w-100 bg-purple-300 h-64"
            alt="Slide 2"
          />
        </div>
        <div className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}>
          <img
            src="Back-End/pic/IMG_3827.jpg"
            className="d-block w-100 bg-pink-400 h-64"
            alt="Slide 3"
          />
        </div>
      </div>
      <button className="carousel-control-prev" onClick={handlePreviousSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={handleNextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="text-box overflow-y-auto px-3 h-80 mt-5">
        {text && <h1 className="text-center font-mono ">{text}</h1>}
      </div>
      <div className="container mt-4">
        <div className="flex justify-center">
          <Link
            to="/opportunity"
            className="button bg-gradient-to-r px-3 from-violet-400 to-fuchsia-200 rounded-xl shadow-2xl text-center"
          >
            Explore Opportunities
          </Link>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/refreshment"
            className="button bg-gradient-to-r px-3 from-violet-400 to-fuchsia-200 rounded-xl shadow-2xl text-center"
          >
            Explore Refreshment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
