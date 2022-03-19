import React from "react";
import { FaBirthdayCake, FaSchool, FaReact, FaSearch } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

type TimeLineProps = {
  timeLineAnimate: boolean;
};
function Timeline({ timeLineAnimate }: TimeLineProps) {
  return (
    <div className="flex flex-col md:w-[50vw] mx-auto my-[5%]">
      <div
        className={`${
          timeLineAnimate && "animate-fadeInDown"
        } opacity-0 delay75  bg-white mb-5 relative flex my-5 mx-0 rounded-xl  
        boxshadow`}
      >
        <div className=" rounded-l-xl bg-[#9251ac] flex items-center justify-center text-4xl text-[#9251ac] p-5">
          <FaSchool className=" hidden md:block  z-10 bg-[#f6a4ec]  p-[7px]  rounded-full  border-[#9251ac] border-solid border-[1px] scale-[1.75]  absolute  left-[-65px] text-4xl " />
          <div
            className={`${
              timeLineAnimate && "animate-lineMoving"
            } delay100 hidden md:block  translat hidden md:blocke-y-7 opacity-40 w-[2px] h-0 bg-[#9251ac]  absolute left-[-48px] top-[50%] `}
          ></div>
          <div className=" rounded-lg text-[#f6a4ec] font-semibold text-2xl flex-nowrap">
            2017
          </div>
        </div>
        <div className=" text-left p-5">
          <div className=" text-2xl leading-6 uppercase font-semibold text-[#9251ac] tracking-wide">
            HIGH SCHOOL
          </div>
          <div className=" text-left basis-3/5 text-base mt-1">
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
        className={`${
          timeLineAnimate && "animate-fadeInUp"
        } delay140 opacity-0 bg-white mb-5 relative flex my-5 mx-0 rounded-xl  
        boxshadow`}
      >
        <div className=" rounded-l-xl bg-[#24b47e] flex items-center justify-center text-4xl text-[#24b47e] p-5">
          <IoMdSchool className="  z-10 bg-[#aff1b6]  p-[7px]  rounded-full  border-[#24b47e] border-solid border-[1px] scale-[1.75]  absolute  left-[-65px] text-4xl " />
          <div
            className={`${
              timeLineAnimate && "animate-lineMoving"
            } delay170  translate-y-7 opacity-40 hidden md:block w-[2px] h-0 bg-[#24b47e] absolute left-[-48px] top-[50%] `}
          ></div>
          <div className=" rounded-lg text-[#aff1b6] font-semibold text-2xl flex-nowrap">
            2021
          </div>
        </div>
        <div className="text-left p-5">
          <div className=" text-2xl leading-6 uppercase font-semibold text-[#24b47e] tracking-wide">
            UNIVERSITY
          </div>
          <div className=" text-left basis-3/5 text-base mt-1">
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
        className={`${
          timeLineAnimate && "animate-fadeInUp"
        } delay210 opacity-0 bg-white mb-5 relative flex my-5 mx-0 rounded-xl  
        boxshadow`}
      >
        <div className=" rounded-l-xl bg-[#555ac0] flex items-center justify-center text-4xl text-[#555ac0] p-5">
          <FaReact className="  z-10 bg-[#87bbfe]  p-[7px]  rounded-full  border-[#555ac0] border-solid border-[1px] scale-[1.75]  absolute  left-[-65px] text-4xl " />
          <div
            className={`${
              timeLineAnimate && "animate-lineMoving"
            } delay240  translate-y-7 opacity-40 hidden md:block w-[2px] h-0 bg-[#555ac0] absolute left-[-48px] top-[50%] `}
          ></div>
          <div className=" rounded-lg text-[#87bbfe] font-semibold text-2xl flex-nowrap">
            2021
          </div>
        </div>
        <div className=" text-left p-5">
          <div className=" text-2xl leading-6 uppercase font-semibold text-[#555ac0] tracking-wide">
            {"GEOTALENT (THAILAND)"}
          </div>
          <div className=" text-left basis-3/5 text-base mt-1">
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
        className={`${
          timeLineAnimate && "animate-fadeInUp"
        } delay280 opacity-0 bg-white mb-5 relative flex my-5 mx-0 rounded-xl  
        boxshadow`}
      >
        <div className=" rounded-l-xl bg-[#9251ac] flex items-center justify-center text-4xl text-[#9251ac] p-5">
          <FaSearch className="  z-10 bg-[#f6a4ec]  p-[7px]  rounded-full  border-[#9251ac] border-solid border-[1px] scale-[1.75]  absolute  left-[-65px] text-4xl " />

          <div className=" rounded-lg text-[#f6a4ec] font-semibold text-2xl flex-nowrap">
            2022
          </div>
        </div>
        <div className=" text-left p-5">
          <div className=" text-2xl leading-6 uppercase font-semibold text-[#9251ac] tracking-wide">
            LOOKING FOR JOB
          </div>
          <div className=" text-left basis-3/5 text-base mt-1">
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
