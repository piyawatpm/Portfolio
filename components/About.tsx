import React from "react";
import Image from "next/image";
type AboutProps = {
  aboutAnimate: boolean;
};
function About({ aboutAnimate }: AboutProps) {
  return (
    <div className="aboutcontainer flex flex-row w-full justify-center">
      <div className="flex-1  ">
        <div
          className={`image-wrapper ${
            aboutAnimate && " animate-slideInLeft"
          } opacity-0 delay100`}
        >
          <img className="image-1" src="/piyawat2.jpg" />
          <img className="image-2" src="/piyawat2.jpg" />
          <img className="image-3" src="/piyawat2.jpg" />
          <img className="image-4" src="/piyawat2.jpg" />
        </div>
        <div>
          <h1
            className={`${
              aboutAnimate && " animate-slideInLeft"
            } opacity-0 delay125 font-Raleway-Bold text-[#616161] text-3xl mb-6`}
          >
            PIYAWAT MAHATTANASAWAT
          </h1>
          <p
            className={`${
              aboutAnimate && " animate-slideInLeft"
            } opacity-0 delay150 font-Raleway text-[#616161]`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam!
            Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis
            incidunt reprehenderit accusantium id aut architecto harum quidem
            dolorem in!
          </p>
        </div>
      </div>
      <div className="skill flex-1 flex-col flex  justify-between pt-16">
        <Image
          src="/HTML5_Logo.svg"
          className={`${
            aboutAnimate && "animate-slideInRight"
          } delay75 opacity-0`}
          height={100}
          width={60}
        />
        <Image
          src="/CSS3_logo_and_wordmark.svg"
          className={`${
            aboutAnimate && "animate-slideInRight"
          } delay100 opacity-0 `}
          height={100}
          width={60}
        />
        <Image
          src="/Unofficial_JavaScript_logo_2.svg"
          className={`${
            aboutAnimate && "animate-slideInRight"
          } delay125 opacity-0`}
          height={100}
          width={60}
        />
        <Image
          src="/React-icon.svg"
          className={`${
            aboutAnimate && "animate-slideInRight"
          } delay150 opacity-0`}
          height={100}
          width={60}
        />
        <Image
          src="/Nextjs-logo.svg"
          className={`${
            aboutAnimate && "animate-slideInRight"
          } delay175 opacity-0`}
          height={100}
          width={60}
        />
      </div>
    </div>
  );
}

export default About;
