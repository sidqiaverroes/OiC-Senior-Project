import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function ResultDetails() {
  const EXPRESS_URL = process.env.REACT_APP_EXPRESS;

  const [data, setData] = useState("");
  const { id } = useParams();

  const handleGetDetails = async () => {
    try {
      const response = await fetch(`${EXPRESS_URL}/api/fake/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setData(responseData);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    handleGetDetails();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16 py-40 justify-center items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 p-8 rounded-lg shadow-lg border border-1 border-purple-300 bg-white">
            <h1 className="lg:text-left text-center text-2xl font-bold text-purple-900">
              OiC Detection Result
            </h1>
            <p className="lg:px-0 text-center lg:text-left font-bold">
              Content:
            </p>
            <p className="lg:px-0 text-center lg:text-left">{data.content}</p>
            <p className=" lg:px-0 text-center lg:text-left font-bold">
              The truth value:
            </p>
            <p className="lg:px-0 text-center lg:text-left">
              {data.detection_result * 100}% the content is not fake.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center lg:justify-start lg:items-start">
            <Link
              to="/seek"
              className=" items-center justify-center px-12 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
            >
              Seek Now
            </Link>
            <Link
              to="/"
              className=" items-center justify-center px-12 py-2 rounded-md shadow-sm text-base font-medium text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-700"
            >
              Give Feedback
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
