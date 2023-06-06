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
            OiC adalah sebuah aplikasi web yang didesain untuk membantu user
            dalam mengidentifikasi berita palsu atau hoax. Dalam era informasi
            digital yang semakin kompleks, penyebaran berita palsu menjadi
            masalah yang serius, mengancam integritas dan kepercayaan masyarakat
            dalam menerima suatu berita. Aplikasi ini bertujuan untuk memberikan
            solusi praktis bagi user dalam memeriksa keaslian dan kebenaran
            suatu berita sebelum membagikan dan menyebarluaskan berita tersebut.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
