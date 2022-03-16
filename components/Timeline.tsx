import React from "react";
import { FaLinkedinIn, FaBirthdayCake } from "react-icons/fa";
function Timeline() {
  return (
    <div className="flex flex-col w-[50vw] mx-auto my-[5%]">
      <div
        className="animate-fadeInDown  bg-white mb-5 relative flex my-5 mx-0 rounded-xl  
        boxshadow"
      >
        <div className=" rounded-l-xl bg-[#9251ac] flex items-center justify-center text-4xl text-[#9251ac] p-5">
          <FaBirthdayCake className=" z-10 bg-[#f6a4ec]  p-[7px]  rounded-full  border-[#9251ac] border-solid border-[1px] scale-[1.75]  absolute  left-[-65px] text-4xl " />
          <div className="animate-lineMoving translate-y-7 w-4 h-0 bg-black absolute left-[-55px] top-[50%] "></div>
          <div className=" rounded-lg text-[#f6a4ec] font-semibold text-2xl flex-nowrap">
            1999
          </div>
        </div>
        <div className=" p-5">
          <div className=" text-2xl leading-6 uppercase font-semibold text-[#9251ac] tracking-wide">
            BORN
          </div>
          <div className=" text-left basis-3/5">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
              corporis incidunt reprehenderit accusantium id aut architecto
              harum quidem dolorem in!i was born in bangkok thailand
            </p>
          </div>
        </div>
      </div>
      <div
        className="animate-fadeInart delay100 bg-white mb-5 relative flex my-5 mx-0 rounded-xl  
        boxshadow"
      >
        <div className=" rounded-l-xl bg-[#9251ac] flex items-center justify-center text-4xl text-[#9251ac] p-5">
          <FaBirthdayCake className=" z-10 bg-[#f6a4ec]  p-[7px]  rounded-full  border-[#9251ac] border-solid border-[1px] scale-[1.75]  absolute  left-[-65px] text-4xl " />
          {/* <div className="animate-lineMoving translate-y-7 w-4 h-0 bg-black absolute left-[-55px] top-[50%] "></div> */}
          <div className=" rounded-lg text-[#f6a4ec] font-semibold text-2xl flex-nowrap">
            1999
          </div>
        </div>
        <div className=" p-5">
          <div className=" text-2xl leading-6 uppercase font-semibold text-[#9251ac] tracking-wide">
            BORN
          </div>
          <div className=" text-left basis-3/5">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam
              corporis incidunt reprehenderit accusantium id aut architecto
              harum quidem dolorem in!i was born in bangkok thailand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
