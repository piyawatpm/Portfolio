import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Home from "../../components/Home";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";
import Timeline from "../../components/Timeline";
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
