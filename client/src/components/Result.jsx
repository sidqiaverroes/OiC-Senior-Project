import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircleProgress from "./CircleProgress";

export default function Result() {
  const [targetProgress, setTargetProgress] = useState(70);

  const handleInputChange = (event) => {
    setTargetProgress(Number(event.target.value));
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share Title",
          text: "Check out this website!",
          url: "https://www.example.com",
        })
        .then(() => console.log("Share successful."))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      console.log("Web Share API not supported.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 py-40 justify-center items-center">
      <div className="mb-12 lg:mb-0 lg:mt-2 lg:mr-24">
        <CircleProgress targetProgress={targetProgress} />
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <input type="text" onChange={handleInputChange}></input>
          <h1 className="lg:text-left text-center text-2xl font-bold text-purple-900">
            Do we help you a lot?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            cursus.
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <Link
            to=""
            className=" items-center justify-center px-12 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
          >
            Give Feedback
          </Link>
          <Link
            to="/seek"
            className=" items-center justify-center px-12 py-2 rounded-md shadow-sm text-base font-medium text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-700"
          >
            Seek Again
          </Link>
          <Link
            onClick={handleShareClick}
            className=" items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-700"
          >
            <i class="fa-solid fa-share"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
