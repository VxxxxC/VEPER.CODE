import React from "react";
import Selector from "@components/TechIcons";
import { SiIos } from "react-icons/si";

const ParkAndCharge = () => {
  const title = "Park & Charge";
  const desc = "A Real-time Hong Kong car park parking slot update mobile app";

  const features = [
    "18 Districts Selection",
    "MapView embedded",
    "CarPark location drop-pin",
    "Real-time update parking slot vacancy",
    "Animated Zoom-in",
  ];

  return (
    <>
      <main className="w-[450px] mobile:w-[100%] mobile:flex mobile:flex-col">
        <div
          id="imageContainer"
          className="mobile:flex-col mobile:items-center flex justify-center"
        >
          <img
            id="image"
            className="my-4 rounded-lg hover:object-scale-down object-contain h-[720px] w-[400px]"
            src={
              "https://user-images.githubusercontent.com/80626616/206899424-6b30d18c-4c2d-4010-a21d-b5399269470d.gif"
            }
          />
          <img
            id="image"
            className="my-4 rounded-lg hover:object-scale-down object-contain h-[720px] w-[400px]"
            src={
              "https://user-images.githubusercontent.com/80626616/217342259-49979720-d127-4ce7-97f7-d1dc23847753.gif"
            }
          />
        </div>
        <div id="title" className="my-4 text-2xl">
          {title}
        </div>

        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <div className="border border-amber-300 dark:border-amber-800 px-2 font-bold text-amber-300 bg-amber-700 dark:text-amber-700 dark:bg-amber-300">
              Platform
            </div>
            <a
              className="mx-2 p-2 rounded-full bg-white text-black hover:bg-black hover:text-white duration-700"
              href="https://apps.apple.com/app/id1659625087"
              target="_blank"
            >
              <SiIos size={30} />
            </a>
          </div>
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
              className="p-4 flex flex-wrap gap-4 text-sm font-sans"
            >
              {features.map((item) => {
                return <li>{item}</li>;
              })}
            </div>
          </div>
        </div>

        <div id="stack" className="flex flex-wrap justify-around py-8 text-sm">
          <Selector props="Typescript" />
          <Selector props="React Native" />
          <Selector props="Redux" />
          <Selector props="Nodejs" />
          <Selector props="Express" />
          <Selector props="MongoDB" />
          <Selector props="EC2" />
        </div>
      </main>
    </>
  );
};

export default ParkAndCharge;
