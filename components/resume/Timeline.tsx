import React, { memo } from "react";
import { FaBirthdayCake, FaSchool, FaReact, FaSearch } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

type TimeLineProps = {
  timeLineAnimate: boolean;
};
function Timeline({ timeLineAnimate }: TimeLineProps) {
  return (
    <section id="timeline" className="  bg-[#f6f9fc] pt-[80px] ">
      <div className=" flex-col flex items-center text-center md:max-w-[1200px] m-auto w-full">
        <div
          className={`opacity-0 ${
            timeLineAnimate && "animate-slideInLeft"
          } font-Raleway-Bold text-3xl md:text-4xl text-[#444649]`}
        >
          Education & Experience
        </div>

        <div
          className={` ${
            timeLineAnimate && "animate-slideInLeft"
          } opacity-0 bg-[#444649] h-1 w-[300px] mt-1 delay50`}
        ></div>
        <div className="flex flex-col md:w-[50vw] mx-auto my-[5%] px-3">
          <div
            className={`${
              timeLineAnimate && "animate-fadeInDown"
            } opacity-0 delay75 bg-white mb-5 relative flex my-5 mx-0 rounded-xl  
        boxshadow`}
          >
            <div className=" rounded-l-xl bg-[#9251ac] flex items-center justify-center text-4xl text-[#9251ac] p-5">
              <FaSchool className=" hidden md:block  z-10 bg-[#f6a4ec]  p-[7px]  rounded-full  border-[#9251ac] border-solid border-[1px] scale-[1.75]  absolute  left-[-65px] text-4xl " />
              <div
                className={`${
                  timeLineAnimate && "animate-lineMoving"
                } delay100 md:block  translat hidden md:blocke-y-7 opacity-40 w-[2px] h-0 bg-[#9251ac]  absolute left-[-48px] top-[50%] `}
              ></div>
              <div className=" rounded-lg text-[#f6a4ec] font-semibold text-2xl flex-nowrap">
                2017
              </div>
            </div>
            <div className=" text-left p-5 w-full ">
              <div className=" text-2xl leading-6 uppercase font-semibold text-[#9251ac] tracking-wide">
                HIGH SCHOOL (THAILAND)
              </div>
              <div className=" text-left basis-3/5 text-base mt-1">
                <p>Debsirin School Mathematics-Science Program</p>
              </div>
              <br />
              <p className="text-right">2015-2017</p>
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
            <div className="text-left p-5 w-full">
              <div className=" text-2xl leading-6 uppercase font-semibold text-[#24b47e] tracking-wide">
                UNIVERSITY (THAILAND)
              </div>
              <div className=" text-left basis-3/5 text-base mt-1">
                <p>
                  {
                    "Bachelor of Computer Science at Faculty of Science, King Mongkut's Institute of Technology Ladkrabang."
                  }
                </p>
                <br />
                <p className="text-right">2017-2021</p>
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
            <div className=" text-left p-5 w-full">
              <div className=" text-2xl leading-6 uppercase font-semibold text-[#555ac0] tracking-wide">
                {"GEOTALENT (THAILAND)"}
              </div>
              <div className=" text-left basis-3/5 text-base mt-1">
                <p>
                  Developer at GEOTALENT, where I use JavaScript, TypeScript,
                  React, to customize government website for sending a
                  questionnaire to community leaders to get feedback of the
                  community that help government know the problem and implement
                  a solution to solve a community problem
                </p>
                <br />
                <p className="text-right">2021/10 - 2021/12</p>
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
            <div className=" text-left p-5 w-full">
              <div className=" text-2xl leading-6 uppercase font-semibold text-[#9251ac] tracking-wide">
                LOOKING FOR JOB
              </div>
              <div className=" text-left basis-3/5 text-base mt-1">
                <p>
                  I am ready to adapt the skills that I have learned to fit in
                  your job and willing to learn new things.
                </p>
                <br />
                <p className="text-right">2022 - Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Timeline);
