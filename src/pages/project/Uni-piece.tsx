import React from "react";
import Selector from "@components/TechIcons";

const Unipiece = () => {
  const title = "Unipiece";
  const desc =
    "An E-commerce online marketplace, focusing on local handcrafted product and artist";
  const img =
    "https://user-images.githubusercontent.com/80626616/200284360-bf0be878-b53c-4f25-9233-20187a964903.gif";

  const features = [
    "User system",
    "Marketplace Explore",
    "Artist Profile",
    "Product Detail",
  ];

  return (
    <>
      <main className="w-[550px] mobile:w-[100%]">
        <img id="image" className="my-4 rounded-lg" src={img} />
        <div id="title" className="my-4 text-2xl">
          {title}
        </div>
        <div>
          <div className="inline border border-teal-800 dark:border-teal-400 px-2 font-bold text-teal-800 bg-teal-400 dark:text-teal-300 dark:bg-teal-900">
            Site
          </div>
          <a
            className="mx-2 text-pink-600 hover:underline"
            href="https://unipiece.full-stack.app/"
          >
            https://unipiece.full-stack.app/
          </a>
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
          <Selector props="React" />
          <Selector props="Tailwindcss" />
          <Selector props="Nodejs" />
          <Selector props="Express" />
          <Selector props="PostgreSQL" />
          <Selector props="EC2" />
          <Selector props="S3" />
        </div>
      </main>
    </>
  );
};

export default Unipiece;
