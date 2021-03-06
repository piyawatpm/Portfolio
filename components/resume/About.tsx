import React, { memo } from "react";
import Image from "next/image";
type AboutProps = {
  aboutAnimate: boolean;
};
function About({ aboutAnimate }: AboutProps) {
  return (
    <section id="about" className="py-[80px] pb-[220px] ">
      <div className=" flex-col flex items-center text-center md:max-w-[1200px]  m-auto w-full">
        <div
          className={`opacity-0 ${
            aboutAnimate && "animate-slideInLeft"
          } font-Raleway-Bold text-3xl md:text-4xl text-[#444649]`}
        >
          ABOUT
        </div>

        <div
          className={`${
            aboutAnimate && "animate-slideInLeft"
          } opacity-0 bg-[#444649] h-1 w-[70px] mt-1 delay50`}
        ></div>
        <div className="aboutcontainer flex flex-col md:flex-row w-full justify-center">
          <div className="flex-1  ">
            <div
              className={`image-wrapper ${
                aboutAnimate && " animate-slideInLeft"
              }  opacity-0  delay100 w-[337px] md:w-[537px] h-[350px] md:h-[550px]  relative my-16 mx-auto`}
            >
              <img className="md:opacity-0" src="/piyawat3.jpg" />
              <img
                className="opacity-0 md:opacity-100 image-1"
                src="/piyawat3.jpg"
              />
              <img
                className="opacity-0 md:opacity-100 image-2"
                src="/piyawat3.jpg"
              />
              <img
                className="opacity-0 md:opacity-100 image-3"
                src="/piyawat3.jpg"
              />
              <img
                className="opacity-0 md:opacity-100 image-4"
                src="/piyawat3.jpg"
              />
            </div>
            <div>
              <h1
                className={`${
                  aboutAnimate && " animate-slideInLeft"
                } opacity-0 delay125 font-Raleway-Bold text-[#616161] text-xl md:text-3xl mb-6`}
              >
                PIYAWAT MAHATTANASAWAT
              </h1>
              <p
                className={`${
                  aboutAnimate && " animate-slideInLeft"
                } text-base md:text-xl opacity-0 delay150 font-Raleway text-[#616161]`}
              >
                Hi, this is Art. I am a motivated and enthusiastic frontend
                developer who has always been passionate about coding and eager
                to learn new technologies, excellent in human relations,
                resulting in efficient and effective performances and
                high-quality teamwork. I have extremely motivated to constantly
                develop my skills and grow professionally.
              </p>
            </div>
          </div>
          <div className="skill flex-1 flex-col flex  justify-between pt-16 items-center">
            <div
              className={`opacity-0 ${
                aboutAnimate && "animate-slideInRight"
              } delay75 w-[60px] h-[100px] md:h-[150px] md:w-[90px]`}
            >
              <Image
                src="/HTML5_Logo.svg"
                layout="responsive"
                height={150}
                width={90}
              />
            </div>

            <div
              className={`opacity-0 ${
                aboutAnimate && "animate-slideInRight"
              } delay100 w-[60px] h-[100px] md:h-[150px] md:w-[90px]`}
            >
              <Image
                src="/CSS3_logo_and_wordmark.svg"
                layout="responsive"
                height={150}
                width={90}
              />
            </div>

            <div
              className={`opacity-0 ${
                aboutAnimate && "animate-slideInRight"
              } delay125 w-[60px] h-[100px] md:h-[150px] md:w-[90px]`}
            >
              <Image
                src="/Unofficial_JavaScript_logo_2.svg"
                layout="responsive"
                height={150}
                width={90}
              />
            </div>

            <div
              className={`opacity-0 ${
                aboutAnimate && "animate-slideInRight"
              } delay150 w-[60px] h-[100px] md:h-[150px] md:w-[90px]`}
            >
              <Image
                src="/React-icon.svg"
                layout="responsive"
                height={150}
                width={90}
              />
            </div>

            <div
              className={`opacity-0 ${
                aboutAnimate && "animate-slideInRight"
              } delay175 w-[60px] h-[100px] md:h-[150px] md:w-[90px]`}
            >
              <Image
                src="/Nextjs-logo.svg"
                layout="responsive"
                height={150}
                width={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
