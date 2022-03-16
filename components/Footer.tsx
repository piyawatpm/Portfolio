import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
function Footer() {
  
  return (
    <footer className="bg-[#1b242f] pt-[70px] pb-[50px]">
      <div className=" flex flex-row items-center justify-center">
        <a
          className="group mx-4"
          href="https://www.linkedin.com/in/piyawat-mahattanasawat-133763221/"
        >
          <div className=" rounded-2xl justify-center flex items-center bg-[#262f38] cursor-pointer h-[55px] text-[18pt]  w-[55px] overflow-hidden text-center ">
            <FaLinkedinIn className="text-white group-hover:animate-bounce " />
          </div>
        </a>
        <a className="group mx-4" href="https://www.facebook.com/Artpmm/">
          <div className="rounded-2xl justify-center flex items-center bg-[#262f38] cursor-pointer h-[55px] text-[18pt] w-[55px] overflow-hidden text-center">
            <FaFacebookF className="text-white group-hover:animate-bounce " />
          </div>
        </a>
        <a className="group mx-4" href="https://www.instagram.com/pywtart/">
          <div className="rounded-2xl justify-center flex items-center bg-[#262f38] cursor-pointer h-[55px] text-[18pt] w-[55px] overflow-hidden text-center">
            <FaInstagram className="text-white group-hover:animate-bounce " />
          </div>
        </a>
        <a className="group mx-4" href="https://github.com/piyawatpm">
          <div className="rounded-2xl justify-center flex items-center bg-[#262f38] cursor-pointer h-[55px] text-[18pt]  w-[55px] overflow-hidden text-center">
            <FaGithub className="text-white group-hover:animate-bounce " />
          </div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
