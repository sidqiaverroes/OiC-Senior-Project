import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircleProgress from "./CircleProgress";

export default function Result({ result, handleSeekAgain }) {
  const EXPRESS_URL = process.env.REACT_APP_EXPRESS;

  const [targetProgress, setTargetProgress] = useState(
    result.detection_result[0] * 100
  );
  const [id, setId] = useState("");

  const handleShareClick = async () => {
    console.log(result);
    const response = await fetch(`${EXPRESS_URL}/api/fake`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: result.content,
        detection_result: result.detection_result[0],
      }),
    });
    if (response) {
      const responseData = await response.json();
      console.log(responseData);
      setId(responseData._id);
      setId(responseData._id);
    } else if (!response) {
      alert("notfound");
    }

    if (navigator.share) {
      navigator
        .share({
          title: "The Truth Has Been Revealed!",
          text: "I have checked that this news is fake or not. Go check it out!",
          url: `/result/${id}`,
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
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="lg:text-left text-center text-2xl font-bold text-purple-900">
            Here comes the truth!
          </h1>
          <p className="px-8 lg:px-0 text-center lg:text-left">
            The percentage is the truth of the information you entered.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center lg:justify-start lg:items-start">
          <Link
            to=""
            className=" items-center justify-center px-12 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
          >
            Give Feedback
          </Link>
          <button
            onClick={handleSeekAgain}
            className=" items-center justify-center px-12 py-2 rounded-md shadow-sm text-base font-medium text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-700"
          >
            Seek Again
          </button>
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
