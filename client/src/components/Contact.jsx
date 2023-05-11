import React from "react";
import Copyright from "./Copyright";

function Contact() {
  return (
    <div
      id="Contact"
      className=" mt-8 bg-purple-600 rounded-tr-3xl rounded-tl-3xl"
    >
      <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 gap-16">
        <div className="col-span-1 text-white my-1">
          <h2 className="font-extrabold text-4xl mb-2">
            <span className=" text-yellow-400">Contact</span> Us
          </h2>
          <p>
            Non cursus leo neque convallis mi at fermentum. Urna nunc nibh
            eleifend ipsum aliquam.
          </p>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col justify-between">
            <a className="flex flex-row py-4 rounded-lg justify-center items-center bg-gray-900 text-white hover:bg-gray-800 cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-xl transition-transform ">
              <span className=" bg-yellow-400 rounded-full" />
              Contact 1
            </a>
            <a className="flex flex-row py-4 rounded-lg justify-center items-center bg-gray-900 text-white hover:bg-gray-800 cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-xl transition-transform ">
              <span className=" bg-yellow-400 rounded-full" />
              Contact 3
            </a>
          </div>
          <div className="col-span-1 flex flex-col justify-between">
            <a className="flex flex-row py-4 rounded-lg justify-center items-center bg-gray-900 text-white hover:bg-gray-800 cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-xl transition-transform">
              <span className=" bg-yellow-400 rounded-full" />
              Contact 2
            </a>
            <a className="flex flex-row py-4 rounded-lg justify-center items-center bg-gray-900 text-white hover:bg-gray-800 cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-xl transition-transform">
              <span className=" bg-yellow-400 rounded-full" />
              Contact 4
            </a>
          </div>
        </div>
      </div>

      <Copyright />
    </div>
  );
}

export default Contact;
