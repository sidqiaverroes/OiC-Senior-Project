import React from "react";
import { Link } from "react-router-dom";

export default function Seek() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 py-24">
      <div className="flex flex-col justify-center items-center h-96">
        <h2 className=" text-2xl font-bold text-purple-900">
          Input The Information You Want to Seek The Truth
        </h2>
        <p>Fill in one of the input</p>

        <div className="my-4 w-full h-full">
          <textarea
            placeholder="Paste your text here"
            className=" w-full h-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          ></textarea>
        </div>

        <div className="flex flex-row w-1/2 items-center justify-between">
          <p>Link / URL :</p>
          <input className=" w-4/5 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"></input>
        </div>

        <div className="flex flex-row mt-6 gap-6">
          <button className=" items-center justify-center px-12 py-2 rounded-md shadow-sm text-base font-medium text-purple-600 border border-purple-600 hover:bg-purple-700 hover:text-white">
            Clear All
          </button>
          <Link
            to="/result"
            className=" items-center justify-center px-12 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700"
          >
            See Result
          </Link>
        </div>
      </div>
    </div>
  );
}
