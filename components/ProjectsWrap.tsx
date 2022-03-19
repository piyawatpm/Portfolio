import React, { useState } from "react";
type ProjectProps = {};
function ProjectsWrap() {
  const [filter, setFilter] = useState(1);
  console.log(filter);
  
  return (
    <div>
      <div className="filterwrap relative">
      <div
        className={`font-bold font-[13pt] flex flex-row justify-center items-center`}
      >
        <div
          className={`  ${filter === 1 && "active"} mx-6 px-10 cursor-pointer`}
        >
          ALL
        </div>
        <div
          className={`  ${filter === 2 && "active"} mx-6 px-10 cursor-pointer`}
        >
          REACT
        </div>
     
      </div>
      <div className="floatbar "> </div>
      </div>
    </div>
  );
}

export default ProjectsWrap;
