import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import DownArrow from "../../src/image/down-arrow.svg";
function Resume() {
  const [aboutAnimate, setAboutAnimate] = useState(false);

  useEffect(() => {
    const listener = () => {
      // if (about.current?.classList.contains("is-current")) console.log("Test");
      // else
      document.getElementById("aboutnav")?.classList.contains("iscurrent")
        ? setAboutAnimate(true)
        : setAboutAnimate(false);
    };
    document.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div>
      <section
        id="home"
        className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden"
      >
        {/* scroll-mt-12 */}
        <div className=" absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150 scroll-py-11">
          {/* background */}
          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-5 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-1 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-4 bg-gray-800 rounded hover:opacity-50 "></div>

          <div className=" col-span-3 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-4 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-3 bg-gray-800 rounded hover:opacity-50 "></div>

          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-3 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-1 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-4 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>

          <div className=" col-span-3 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-4 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-3 bg-gray-800 rounded hover:opacity-50 "></div>

          <div className=" col-span-5 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-3 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>

          <div className=" col-span-4 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-7 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-1 bg-gray-800 rounded hover:opacity-50 "></div>

          <div className=" col-span-5 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-3 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>

          <div className=" col-span-3 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-6 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-1 bg-gray-800 rounded hover:opacity-50 "></div>

          <div className=" col-span-2 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-5 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-1 bg-gray-800 rounded hover:opacity-50 "></div>
          <div className=" col-span-4 bg-gray-800 rounded hover:opacity-50 "></div>
        </div>
        <div id="content" className=" relative text-center">
          <div className=" font-Raleway text-5xl text-white text-center py-10">
            {"Hello, I'm "}
            <span className="  font-Raleway-Bold text-[#04c2c9]">
              Piyawat M.
            </span>
            <br />
            {"I'm a front-end web developer"}
          </div>

          <a
            href="#about"
            className="  group max-w-fit cursor-pointer transition-color duration-500 text-lg bg-transparent hover:bg-[#04c2c9] text-white  hover:text-white p-[14px] border border-white hover:border-transparent my-5"
          >
            View My Work
            <svg
              className="w-6 h-6 dark:text-white rotate-[270deg]  inline mx-2  mb-1  group-hover:rotate-[360deg] transform transition duration-500 scale-75 bold"
              fill="none"
              stroke="currentColor"
              viewBox="1 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      <Navbar />
      <section
        id="about"
        className=" bg-white pt-[80px] items-center justify-center text-center"
      >
        <div className="h-[900px]">
          <div
            className={`  opacity-0 ${
              aboutAnimate && "animate-slideInLeft"
            } font-Raleway-Bold text-[30pt] text-[#444649]`}
          >
            ABOUT
          </div>
        </div>
      </section>
      <section id="projects" className=" bg-green-400">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0 h-[1500px]">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-[900px]"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </section>
      <section id="contact" className=" bg-blue-500">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0 h-[1500px]">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-[900px]"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </section>
    </div>
  );
}

export default Resume;
