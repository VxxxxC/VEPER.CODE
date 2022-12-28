import React from "react";
import Selector from "@components/TechIcons";

const Braille = () => {
  const title = "Braille AI";
  const desc = "A simple trained AI model to recognizing and predict alphabet";
  const img =
    "https://user-images.githubusercontent.com/80626616/200264614-ea2979e7-43b8-4b9c-92ae-da2205863968.gif";

  const features = ["Picture upload", "Real-time camera detection"];

  return (
    <>
      <main className="w-[550px] mobile:w-[100%]">
        <img id="image" className="my-4 rounded-lg" src={img} />
        <div id="title" className="my-4 text-2xl">
          {title}
        </div>

        <div className="flex flex-col items-start">
          <div className="flex my-4 gap-2 justify-evenly items-center">
            <div className="border border-teal-400 px-1 text-teal-300 bg-teal-800 dark:text-teal-800 dark:bg-teal-300">
              Desc
            </div>
            <div id="desc" className="text-sm font-sans">
              {desc}
            </div>
          </div>

          <div className="flex my-4 gap-2 justify-evenly items-center">
            <div className="border border-sky-400 px-1 text-cyan-300 bg-sky-800 dark:text-cyan-800 dark:bg-sky-300">
              Feat
            </div>
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
          <Selector props="Typescript" />
          <Selector props="CSS" />
          <Selector props="Nodejs" />
          <Selector props="Express" />
          <Selector props="Python" />
          <Selector props="Tensorflow" />
        </div>
      </main>
    </>
  );
};

export default Braille;
