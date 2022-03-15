import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
function Resume() {
  const [aboutAnimate, setAboutAnimate] = useState(false);
  const [projectsAnimate, setProjectsAnimate] = useState(false);
  const [contactAnimate, setContactAnimate] = useState(false);
  useEffect(() => {
    const listener = () => {
      // if (about.current?.classList.contains("is-current")) console.log("Test");
      // else
      document.getElementById("aboutnav")?.classList.contains("iscurrent")
        ? setAboutAnimate(true)
        : setAboutAnimate(false);
      document.getElementById("projectsnav")?.classList.contains("iscurrent")
        ? setProjectsAnimate(true)
        : setProjectsAnimate(false);
      document.getElementById("contactnav")?.classList.contains("iscurrent") ||
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
        ? setContactAnimate(true)
        : setContactAnimate(false);
    };
    document.addEventListener("scroll", listener, { passive: true });

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
            className="  group max-w-fit cursor-pointer transition-color duration-500 text-lg bg-transparent hover:bg-[#04c2c9] text-white  hover:text-white p-[14px] border-2 border-solid border-[#fff] hover:border-transparent my-5"
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
      <section id="about" className="  bg-yellow-100 pt-[80px] ">
        <div className="h-[900px] flex-col flex items-center text-center max-w-[1200px] m-auto w-full">
          <div
            className={`opacity-0 ${
              aboutAnimate && "animate-slideInLeft"
            } font-Raleway-Bold text-[30pt] text-[#444649]`}
          >
            ABOUT
          </div>

          <div
            className={` ${
              aboutAnimate && "animate-slideInLeft"
            } opacity-0 bg-[#444649] h-1 w-[70px] mt-1 delay50`}
          ></div>
        </div>
      </section>
      <section id="projects" className=" bg-white pt-[80px]">
        <div className="h-[900px] flex-col flex items-center text-center max-w-[1200px] m-auto w-full">
          <div
            className={`  opacity-0 ${
              projectsAnimate && "animate-slideInLeft"
            } font-Raleway-Bold text-[30pt] text-[#444649]`}
          >
            PROJECTS
          </div>

          <div
            className={` ${
              projectsAnimate && "animate-slideInLeft"
            } opacity-0 bg-[#444649] h-1 w-[70px] mt-1 delay-line`}
          ></div>
        </div>
      </section>
      <section id="contact" className=" bg-[#252934] pt-[80px] pb-[249px]">
        <div className=" flex-col flex items-center text-center relative m-auto w-full">
          <div
            className={`  opacity-0 ${
              contactAnimate && "animate-slideInLeft"
            } font-Raleway-Bold text-[30pt] text-white`}
          >
            CONTACT
          </div>
          <div
            className={`${
              contactAnimate && "animate-slideInRight"
            } opacity-0 bg-white h-1 w-[70px] mt-[25px] mb-[40px] delay25`}
          ></div>
          <h1
            className={`${
              contactAnimate && "animate-slideInRight"
            } text-[#04c2c9] font-bold text-base delay50`}
          >
            Have a question or want to work together?
          </h1>
          <div className=" mx-auto mt-[40px] bg-black w-[500px] h-[240px]"></div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Resume;
