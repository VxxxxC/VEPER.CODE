import React from "react";
import Braille from "./Braille-AI";
import MotionDiv from "@components/motionDiv";
import ParkAndCharge from "./ParkAndCharge";
import VirtualMemories from "./Virtual-Memories";
import Unipiece from "./Uni-piece";

const ProjectPost = () => {
  return (
    <>
      <MotionDiv delay={0.5}>
        <ParkAndCharge />
      </MotionDiv>
      <div className="mt-10">
      <div className="h-[1px] w-[100%] bg-gray-700"/>
      <div className="py-8 text-lg flex ">Academy</div>
      </div>
      <MotionDiv delay={0.5}>
        <Unipiece/>
      <Braille />
        <VirtualMemories/>
      </MotionDiv>
      </>
  );
};

export default ProjectPost;
