import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Home from "@/resume/Home";
import About from "@/resume/About";
import Contact from "@/resume/Contact";
import Footer from "@/resume/Footer";
import Navbar from "@/resume/Navbar";
import Projects from "@/resume/Projects";
import Timeline from "@/resume/Timeline";
function Resume() {
  const [aboutAnimate, setAboutAnimate] = useState(false);
  const [timeLineAnimate, setTimeLineAnimate] = useState(false);
  const [projectsAnimate, setProjectsAnimate] = useState(false);
  const [contactAnimate, setContactAnimate] = useState(false);

  const aboutNav = useRef<HTMLAnchorElement>(null);
  const timelineNav = useRef(null);
  const projectsNav = useRef(null);
  const aboucontactNav = useRef(null);

  useEffect(() => {
    const listener = () => {
      document.getElementById("aboutnav")?.classList.contains("iscurrent") &&
        setAboutAnimate(true);
      // : setAboutAnimate(false);
      document.getElementById("timelinenav")?.classList.contains("iscurrent") &&
        setTimeLineAnimate(true);
      // : setTimeLineAnimate(false);
      document.getElementById("projectsnav")?.classList.contains("iscurrent") &&
        setProjectsAnimate(true);
      // : setProjectsAnimate(false);
      document.getElementById("contactnav")?.classList.contains("iscurrent") &&
        // ||
        // window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
        setContactAnimate(true);
      // : setContactAnimate(false);
    };
    document.addEventListener("scroll", listener, { passive: true });

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <div>
      <Home />
      <Navbar />
      <About aboutAnimate={aboutAnimate} />
      <Timeline timeLineAnimate={timeLineAnimate} />
      <Projects projectsAnimate={projectsAnimate} />
      <Contact contactAnimate={contactAnimate} />
      <Footer />
    </div>
  );
}

export default Resume;
