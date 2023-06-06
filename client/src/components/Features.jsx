import React from "react";
import FeatureImg1 from "../assets/Feature-1.png";
import FeatureImg2 from "../assets/Feature-2.png";

function Features() {
  return (
    <div id="Features" className="flex h-auto bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex lg:flex-row py-20">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className=" max-w-lg flex flex-col gap-2 text-purple-900 md:pr-32">
            <p className=" text-gray-800 font-bold text-center md:text-left">
              Our Features
            </p>
            <p className="font-extrabold text-center md:text-left text-4xl break-words">
              What Things Do We Provide?
            </p>
          </div>

          <div className="flex flex-col m-8 md:m-0 md:flex-row gap-8 text-black">
            <div className=" max-w-xs flex flex-col bg-purple-600 p-8 rounded-3xl justify-center items-center text-white text-center hover:-translate-y-2 shadow-lg hover:shadow-xl transition-transform">
              <div className=" overflow-hidden w-48 h-48 rounded-full bg-purple-900">
                <img
                  src={FeatureImg1}
                  alt="feature 1"
                  className=" object-contain"
                ></img>
              </div>
              <p className="font-bold text-xl my-2 pt-2">Feature 1</p>
              <p className="text-sm">
                Felis consequat morbi quis turpis aenean. Velit blandit feugiat
                in viverra ut pellentesque pretium neque. Eget habitant
                consectetur eget non scelerisque.
              </p>
            </div>

            <div className=" max-w-xs flex flex-col bg-yellow-400 p-8 rounded-3xl justify-center items-center text-purple-900 text-center hover:-translate-y-2 shadow-lg hover:shadow-xl transition-transform">
              <div className=" overflow-hidden w-48 h-48 rounded-full bg-orange-500">
                <img
                  src={FeatureImg2}
                  alt="feature 2"
                  className="object-cover object-top h-96"
                ></img>
              </div>
              <p className="font-bold text-xl my-2 pt-2">Feature 2</p>
              <p className="text-sm">
                Felis consequat morbi quis turpis aenean. Velit blandit feugiat
                in viverra ut pellentesque pretium neque. Eget habitant
                consectetur eget non scelerisque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
