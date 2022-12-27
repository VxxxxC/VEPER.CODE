import React from "react";
import Selector from '@components/TechIcons'

const VirtualMemories = () => {
  const title = "VirtualMemories";
  const desc = "A simple and clean blog that can store up your thoughts with texts and pics";
  const img =
    "https://user-images.githubusercontent.com/80626616/200232345-76e0b50b-c5e5-4b2e-8328-e7c20bca1f54.gif";

  const features = ["User system", "Create Post"];

  return (
    <>
      <main className="w-[550px] mobile:w-[100%]"> 
      <img id="image" className="my-4 rounded-lg" src={img} />
      <div id="title" className="my-4 text-2xl">{title}</div>

        <div className="flex flex-col items-start">
        <div className="flex my-4 gap-2 justify-evenly items-center">
          <div className="border border-teal-400 px-1 text-teal-300 bg-teal-800 dark:text-teal-800 dark:bg-teal-300">Desc</div>
      <div id="desc" className="text-sm font-sans">{desc}</div>
      </div>

        <div className="flex my-4 gap-2 justify-evenly items-center">
          <div className="border border-sky-400 px-1 text-cyan-300 bg-sky-800 dark:text-cyan-800 dark:bg-sky-300">Feat</div>
      <div
        id="features"
        className="flex items-start justify-center flex-wrap gap-4 text-sm font-sans"
      >
        {features.map((item) => {
          return <li>{item}</li>;
        })}
      </div>
        </div>
        </div>

      <div id="stack" className="flex flex-wrap justify-around py-8 text-sm">
          <Selector props="HTML"/>
          <Selector props="CSS"/>
          <Selector props="Javascript"/>
          <Selector props="Nodejs"/>
          <Selector props="Express"/>
          <Selector props="PostgreSQL"/>
      </div>
      </main>
    </>
  );
};

export default VirtualMemories;
