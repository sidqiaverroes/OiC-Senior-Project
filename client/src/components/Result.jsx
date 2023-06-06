import React from "react";
import { Link } from "react-router-dom";

export default function Result() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row gap-16 py-40 justify-center items-center">
      <div className="flex flex-col rounded-full bg-yellow-400 w-60 h-60 justify-center items-center p-2    ">
        <div className="flex flex-col rounded-full bg-purple-600 w-full h-full justify-center items-center">
          <h1 className=" text-white font-black text-6xl">80%</h1>
          <p className=" text-yellow-400">message</p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold text-purple-900">
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
            to=""
            className=" items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-700"
          >
            <i class="fa-solid fa-share"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
