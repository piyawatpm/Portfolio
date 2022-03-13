import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Navbar";

function Resume() {
  return (
    <div>
      <section className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
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
          <div className="text-5xl font-['Raleway'] text-white text-center py-5">
            {"Hello, I'm"}
            <span className="font-['Raleway-semibold'] text-[#04c2c9]">
              Piyawat M.
            </span>
            <br />
            {"i'm a front-end web developer"}
          </div>
          <div>
            <button className=" transition-color duration-300 text-xl bg-transparent hover:bg-[#04c2c9] text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent ">
              View My Work
            </button>
          </div>
        </div>
      </section>

      <Navbar />
      <section id="about">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0 h-[1500px]">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-[900px]"></div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </section>
      <section id="about">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0 h-[1500px]">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-[900px]"></div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </section>
      <section id="about">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0 h-[1500px]">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-[900px]"></div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </section>
    </div>
  );
}

export default Resume;
