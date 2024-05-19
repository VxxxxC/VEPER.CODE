import React from "react";
import Selector from "@components/TechIcons";
import MotionDiv from "./motionDiv";
import {
  IoLogoGithub,
  IoHeartOutline,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5/index";
import { MdKeyboardArrowRight } from "react-icons/md/index";
import "./bioContent.css";

const BioContent = () => {
  const btn = () => {
    localStorage.setItem("page", "Project");
  };
  return (
    <>
      <style />
      <MotionDiv delay={0.5}>
        <main
          id="bio"
          className="my-20 px-10 inline-flex flex-col item-start"
          aria-label="bio"
        >
          <div className="mx-[5%] flex justify-between mobile:flex-col mobile:items-center">
            <div className="inline-flex flex-col items-center justify-center">
              <div className="my-2 text-4xl font-bold">Veper Ho</div>
              <div className="my-2 text-sm">
                Codes / Subcultures / Indie Music
              </div>
            </div>
            <img
              className="w-60 h-60 border border-opacity-10 border-white rounded-3xl object-cover"
              src="https://user-images.githubusercontent.com/80626616/210180624-83262f27-2550-4a30-92c8-7a9cddbb3359.jpg"
            />
          </div>
          <div className="mt-8">
            <a href="/project">
              <button
                className="py-2 px-8 border-4 border-double rounded-lg border-teal-800 bg-teal-300 text-teal-900 hover:border-teal-300 hover:bg-teal-800 hover:text-teal-300 font-sans font-bold"
                onClick={btn}
              >
                <div className="flex justify-center items-center gap-4">
                  <p>Portfolio</p>
                  <MdKeyboardArrowRight size={22} />
                </div>
              </button>
            </a>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-black mt-10">
              Bio
              <h1 className="mb-2 h-1 bg-gray-600"></h1>
            </h1>
          </div>
          <h2 className="text-md font-medium my-2 px-5 flex flex-col items-start">
            <table>
              <tbody>
                <tr>
                  <td>1989</td>
                  <td>Born in Hong Kong</td>
                </tr>
                <tr>
                  <td>2021</td>
                  <td>
                    Say goodbye to my 12 years career in aviation engineering
                    industry
                  </td>
                </tr>
                <tr>
                  <td>2021 - 2022</td>
                  <td>Career Transition</td>
                </tr>

                <tr>
                  <td>2022</td>
                  <td>
                    Graduated AI & Programming Micro Master course at Tecky
                    Academy
                  </td>
                </tr>

                <tr>
                  <td>2023 - present</td>
                  <td>
                    <a href="/work" className="underline underline-offset-4">
                      Frontend Developer in BOXS
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </h2>

          <div className="flex flex-col items-start">
            <h1 className="text-xl font-black mt-10">
              Tech I Use
              <h1 className="mb-2 h-1 bg-gray-600"></h1>
            </h1>
          </div>
          <blockquote className="p-5 bg-zinc-400 dark:bg-zinc-700 rounded-lg flex flex-col items-start">
            <li>RESTful API</li>
            <li>AJAX</li>
            <li>Git</li>
            <li>AWS EC2/S3/Cloudfront</li>
            <li>Nginx</li>
            <li>Docker</li>
            <li>DevOps & CI/CD</li>
          </blockquote>
          <fieldset className="border border-zinc-500">
            <legend>Frontend</legend>
            <p>HTML, CSS</p>
            <p>Javascript / Typescript</p>
            <p>React</p>
            <p>React-Native</p>
            <p>Redux</p>
            <p>Redux-Thunk</p>
            <p>Tailwindcss</p>
          </fieldset>
          <fieldset className="border border-zinc-500">
            <legend>Backend</legend>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
          </fieldset>
          <fieldset className="font-black text-lg text-orange-500 border-4 border-teal-400 dark:border-cyan-500">
            <legend>Currently Learning</legend>
            <p>Dart</p>
            <p>Flutter</p>
          </fieldset>

          <div className="flex flex-col items-start">
            <h1 className="text-xl font-black mt-10">
              <IoHeartOutline size={30} />
              <h1 className="mb-2 h-1 bg-gray-600"></h1>
            </h1>
          </div>
          <h2 className="text-md font-bold my-2 flex flex-col items-start">
            <p>indie music</p>
            <p>psychology / philosophy</p>
            <p>climbing 🧗</p>
            <p>coffee ☕️</p>
          </h2>

          <div className="flex flex-col items-start">
            <h1 className="text-xl font-black mt-10">
              Connect
              <h1 className="h-1 bg-gray-600"></h1>
            </h1>
          </div>
          <div className="flex flex-col items-start">
            <a
              className="py-2 px-8 flex justify-center items-center gap-4 rounded-xl font-vr font-bold text-cyan-900 hover:bg-teal-400 dark:text-teal-400 dark:hover:bg-cyan-900"
              href="https://github.com/vxxxxc"
              target="_blank"
            >
              <IoLogoGithub size={30} />
              GitHub
            </a>
            <a
              className="py-2 px-8 flex justify-center items-center gap-4 rounded-xl font-vr font-bold text-cyan-900 hover:bg-teal-400 dark:text-teal-400 dark:hover:bg-cyan-900"
              href="https://www.instagram.com/vepercodes/"
              target="_blank"
            >
              <IoLogoInstagram size={30} />
              Instagram
            </a>

            <a
              className="py-2 px-8 flex justify-center items-center gap-4 rounded-xl font-vr font-bold text-cyan-900 hover:bg-teal-400 dark:text-teal-400 dark:hover:bg-cyan-900"
              href="https://www.linkedin.com/in/veper-ho/"
              target="_blank"
            >
              <IoLogoLinkedin size={30} />
              LinkedIn
            </a>
          </div>
        </main>
      </MotionDiv>
    </>
  );
};

export default BioContent;
