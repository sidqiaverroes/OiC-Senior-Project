import React from "react";

function About() {
  return (
    <div className="flex h-auto bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 lg:flex-row py-20">
        <div className="flex flex-col gap-4 px-48 py-24 text-white text-center bg-purple-900 rounded-xl hover:-translate-y-2 transition-transform">
          <p className="font-extrabold  text-3xl">
            <span className=" text-yellow-500">What is</span> OiC?
          </p>
          <p className="">
            Quam ultrices dignissim sed sit in non pellentesque urna risus.
            Nulla pharetra pretium quam neque bibendum nibh mi molestie.
            Elementum tristique ante nisi cursus blandit. Augue condimentum
            semper praesent sagittis venenatis velit. Ut feugiat vitae magna
            sollicitudin cursus neque laoreet consectetur tellus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
