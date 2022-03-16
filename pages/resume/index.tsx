import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProjectsWrap from "../../components/ProjectsWrap";
import Timeline from "../../components/Timeline";
function Resume() {
  const [aboutAnimate, setAboutAnimate] = useState(false);
  const [timeLineAnimate, setTimeLineAnimate] = useState(false);
  const [projectsAnimate, setProjectsAnimate] = useState(false);
  const [contactAnimate, setContactAnimate] = useState(false);
  useEffect(() => {
    const listener = () => {
      // if (about.current?.classList.contains("is-current")) console.log("Test");
      // else
      document.getElementById("aboutnav")?.classList.contains("iscurrent")
        ? setAboutAnimate(true)
        : setAboutAnimate(false);
      document.getElementById("timelinenav")?.classList.contains("iscurrent")
        ? setTimeLineAnimate(true)
        : setTimeLineAnimate(false);
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
      <section id="timeline" className="  bg-[#f6f9fc] pt-[80px] ">
        <div className=" flex-col flex items-center text-center max-w-[1200px] m-auto w-full">
          <div
            className={`opacity-0 ${
              timeLineAnimate && "animate-slideInLeft"
            } font-Raleway-Bold text-[30pt] text-[#444649]`}
          >
            TIMELINE
          </div>

          <div
            className={` ${
              timeLineAnimate && "animate-slideInLeft"
            } opacity-0 bg-[#444649] h-1 w-[70px] mt-1 delay50`}
          ></div>
          
          <Timeline />
        </div>
      </section>
      <section id="projects" className=" bg-white pt-[80px]">
        <div className="h-[900px] flex-col flex items-center text-center max-w-[1200px] m-auto w-full">
          <div
            className={`  opacity-0 ${
              projectsAnimate && " animate-slideInRight"
            } font-Raleway-Bold text-[30pt] text-[#444649]`}
          >
            PROJECTS
          </div>

          <div
            className={` ${
              projectsAnimate && "animate-slideInRight"
            } delay50 opacity-0 bg-[#444649] h-1 w-[70px] mt-1 delay-line mb-24`}
          ></div>
          <ProjectsWrap />
        </div>
      </section>
      <section id="contact" className=" bg-[#252934]  pb-[200px] ">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="svgcolor-light bt-[#252934] text-white mb-32"
          width="100%"
          height="75"
        >
          <path d="M 0 0 L 50 100 L 100 0 Z" fill="white" stroke="white" />
        </svg>

        <div className=" mt-7 flex-col flex items-center text-center relative  w-full">
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

          <div
            className={`${
              contactAnimate && " animate-popIn"
            } delay50 opacity-0 flex flex-col justify-between min-w-[500px] mt-4`}
          >
            <input
              type="text"
              placeholder="Name"
              required
              className=" text-white px-4 py-3 text-[12pt] bg-[#1e242c] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Enter Email"
              className="text-white px-4 py-3 text-[12pt] bg-[#1e242c] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <textarea
              rows={4}
              className="text-white px-4 py-3 text-[12pt] bg-[#1e242c] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Your Message"
              defaultValue={""}
            />

            <button className=" ml-auto mt-3 max-w-fit cursor-pointer transition-color duration-500 text-lg bg-transparent hover:bg-[#04c2c9] text-white  hover:text-white p-2 px-4 border-2 border-solid border-[#fff] hover:border-transparent">
              SUBMIT
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Resume;
