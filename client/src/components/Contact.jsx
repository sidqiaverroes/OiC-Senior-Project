import React from "react";
import Copyright from "./Copyright";

function Contact() {
  return (
    <>
      <div
        id="Contact"
        className="flex mt-8 bg-purple-600 rounded-t-3xl justify-center items-center"
      >
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-8 px-4 sm:px-6 lg:px-8 py-24 ">
          <div className="flex flex-col justify-center text-white my-1">
            <h2 className=" text-center md:text-left font-extrabold text-4xl mb-4 md:mb-2">
              <span className=" break-words text-yellow-400">Contact</span> Us
            </h2>
            <p className="text-center md:text-left">
              We'd love to hear from you! If you have any questions, feedback,
              or inquiries, please don't hesitate to reach out to us.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-4">
            <div className="flex flex-col justify-between gap-4">
              <a className="flex flex-row gap-2 py-4 md:px-36 rounded-lg justify-center items-center bg-gray-900 text-white hover:bg-gray-800 cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-xl transition-transform ">
                <i class="fa-solid fa-envelope"></i> <p>Email</p>
              </a>
              <a className="flex flex-row gap-2 py-4 md:px-36 rounded-lg justify-center items-center bg-gray-900 text-white hover:bg-gray-800 cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-xl transition-transform ">
                <i class="fa-brands fa-whatsapp"></i> <p>Whatsapp</p>
              </a>
            </div>

            <div className="flex flex-col justify-between gap-4">
              <a className="flex flex-row gap-2 py-4 md:px-36 rounded-lg justify-center items-center bg-gray-900 text-white hover:bg-gray-800 cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-xl transition-transform">
                <i class="fa-brands fa-github"></i>
                <p>Github</p>
              </a>
              <a className="flex flex-row gap-2 py-4 md:px-36 rounded-lg justify-center items-center bg-gray-900 text-white hover:bg-gray-800 cursor-pointer hover:-translate-y-1 shadow-lg hover:shadow-xl transition-transform">
                <i class="fa-brands fa-instagram"></i>
                <p>Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
}

export default Contact;
