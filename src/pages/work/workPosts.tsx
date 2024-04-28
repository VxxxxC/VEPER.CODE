import React from "react";
import MotionDiv from "@components/motionDiv";
import Boxs from "./boxs"

const WorkPosts = () => {
    const works = [<Boxs/>]
  return (
    <>
        {
            works.map(work => (
                <div className={`grid gap-5 ${works.length > 1 ? 'grid-cols-[1fr,1fr]' : 'grid-cols-[1fr]'}`}>
                <MotionDiv delay={0.5}>
                    <div>{work}</div>
                    <div className="w-full h-[1px] bg-gray-600"/>
                </MotionDiv>
                </div>
            ))
        }
    </>
  );
};

export default WorkPosts;