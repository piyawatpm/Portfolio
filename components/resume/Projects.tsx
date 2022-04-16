import React, { memo } from "react";
type ProjectsProps = {
  projectsAnimate: boolean;
};
function Projects({ projectsAnimate }: ProjectsProps) {
  return (
    <section id="projects" className=" bg-white pt-[80px]">
      <div className="h-[900px] flex-col flex items-center text-center md:max-w-[1200px] m-auto w-full">
        <div
          className={`  opacity-0 ${
            projectsAnimate && " animate-slideInRight"
          } font-Raleway-Bold text-3xl md:text-4xl text-[#444649]`}
        >
          PROJECTS
        </div>

        <div
          className={` ${
            projectsAnimate && "animate-slideInRight"
          } delay50 opacity-0 bg-[#444649] h-1 w-[70px] mt-1 delay-line mb-24`}
        ></div>
      </div>
    </section>
  );
}

export default memo(Projects);
