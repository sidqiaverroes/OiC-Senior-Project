import React from "react";

function About() {
  return (
    <div
      id="About"
      className="flex h-auto bg-white justify-center items-center"
    >
      <div className="max-w-7xl m-4 md:m-0 px-4 sm:px-6 lg:px-8 flex gap-8 lg:flex-row py-20">
        <div className="flex flex-col gap-4 px-12 py-16 md:px-48 md:py-24 text-white text-center bg-purple-900 rounded-xl hover:-translate-y-2 transition-transform shadow-lg hover:shadow-xl">
          <p className="font-extrabold  text-3xl">
            <span className=" text-yellow-500">What is</span> OiC?
          </p>
          <p className="">
            OiC is a web application designed to help users identify fake news
            or hoaxes. In an era of increasingly complex digital information,
            the spread of fake news is a serious problem, threatening the
            integrity and trust of the public in receiving news. This
            application aims to provide practical solutions for users in
            checking the authenticity and correctness of a news before sharing
            and disseminating the news.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
