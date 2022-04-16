import React from "react";

function Home() {
  const bgColor = "bg-gray-800";
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className=" absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150 scroll-py-11">
        {/* background */}

        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-5 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-1 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-4 ${bgColor} rounded hover:opacity-50 `}
        ></div>

        <div
          className={` col-span-3 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-4 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-3 ${bgColor} rounded hover:opacity-50 `}
        ></div>

        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-3 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-1 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-4 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>

        <div
          className={` col-span-3 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-4 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-3 ${bgColor} rounded hover:opacity-50 `}
        ></div>

        <div
          className={` col-span-5 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-3 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>

        <div
          className={` col-span-4 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-7 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-1 ${bgColor} rounded hover:opacity-50 `}
        ></div>

        <div
          className={` col-span-5 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-3 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>

        <div
          className={` col-span-3 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-6 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-1 ${bgColor} rounded hover:opacity-50 `}
        ></div>

        <div
          className={` col-span-2 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-5 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-1 ${bgColor} rounded hover:opacity-50 `}
        ></div>
        <div
          className={` col-span-4 ${bgColor} rounded hover:opacity-50 `}
        ></div>
      </div>
      <div id="content" className=" relative text-center">
        <div className="font-Raleway text-2xl sm:text-5xl text-white text-center py-10">
          {"Hello, I'm "}
          <span className="  font-Raleway-Bold text-[#04c2c9]">{process.env.NEXT_PUBLIC_YOUR_NAME}</span>
          <br />
          {"I'm a front-end web developer"}
        </div>

        <a
          href="#about"
          className="group max-w-fit cursor-pointer transition-color duration-500 text-base sm:text-lg bg-transparent hover:bg-[#04c2c9] text-white  hover:text-white p-[14px] border-2 border-solid border-[#fff] hover:border-transparent my-5"
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
  );
}

export default Home;
