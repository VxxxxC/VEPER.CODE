import React from 'react';
import MotionDiv from './motionDiv';
import { IoLogoGithub, IoHeartOutline } from 'react-icons/io5/index'
import './bioContent.css'

const BioContent = () => {
  return (
    <>
      <style/>
      <MotionDiv delay={0.5}>
      <main
        id="bio"
        className="my-20 px-10 inline-flex flex-col item-start"
        aria-label="bio"
      >
        <div className="mx-[5%] flex justify-between mobile:flex-col mobile:items-center">
          <div className="inline-flex flex-col items-center justify-center">
            <div className="my-2 text-4xl font-black">Veper Ho</div>
            <div className="my-2 text-sm">Codes / Subcultures / Indie Music</div>
          </div>
          <img
            className="w-52 h-52 border border-opacity-10 border-white rounded-3xl object-cover"
            src="https://user-images.githubusercontent.com/80626616/208250986-0afd9988-f1ea-4848-a8f9-ce9fdf23e27f.JPG"
          />
        </div>
        <h1 className="self-start text-xl font-black pt-10 px-5">Bio</h1>
       <h1 className="w-[20%] self-start mb-2 px-5 h-1 bg-gray-600"></h1>
        <h2 className="text-md font-medium my-2 px-5 flex flex-col items-start">
          <table>
            <tbody>
              <tr>
                <td>1989</td>
                <td>Born in Hong Kong</td>
              </tr>
              <tr>
                <td>2021</td>
                <td
                >Say goodbye to my 12 years career in aviation engineering
                  industry</td
                >
              </tr>
              <tr>
                <td>2022</td>
                <td
                >Graduated AI & Programming Micro Master course at Tecky Academy</td
                >
              </tr>
            </tbody>
          </table>
        </h2>

        <h1 className="self-start text-xl font-black pt-10 px-5">Tech I Use</h1>
        <h1 className="w-[20%] self-start mb-2 px-5 h-1 bg-gray-600"></h1>
        <blockquote
          className="py-5 px-10 bg-zinc-400 dark:bg-zinc-700 rounded-lg flex flex-col items-start"
        >
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
        <fieldset
          className="font-black text-lg text-orange-500 border-4 border-teal-400 dark:border-cyan-500"
        >
          <legend>Currently Learning</legend>
          <p>Dart</p>
        </fieldset>

        <h1 className="text-xl font-black pt-10 px-5">
          <IoHeartOutline size={30} />
        </h1>
        <h1 className="w-[20%] self-start mb-2 px-5 h-1 bg-gray-600"></h1>
        <h2 className="text-md font-bold my-2 px-5 flex flex-col items-start">
          <p>indie music</p>
          <p>psychology / philosophy</p>
          <p>climbing 🧗</p>
          <p>coffee ☕️</p>
        </h2>

        <h1 className="self-start text-xl font-black pt-10 px-5">Contact</h1>
        <h1 className="w-[20%] self-start mb-2 px-5 h-1 bg-gray-600"></h1>
        <div className="my-2 px-5 flex flex-col items-start">
          <a className="p-2 flex justify-center items-center rounded-xl font-vr font-bold text-cyan-900 hover:bg-teal-400 dark:text-teal-400 dark:hover:bg-cyan-900"
            href="https://github.com/vxxxxc" target="_blank"
          ><IoLogoGithub size={30} />GitHub</a
          >
          <a className="p-2 flex justify-center items-center rounded-xl font-vr font-bold text-cyan-900 hover:bg-teal-400 dark:text-teal-400 dark:hover:bg-cyan-900"
            href="mailto:vxxxxc@skiff.com">vxxxxc@skiff.com</a>
        </div>
      </main>
      </MotionDiv>
    </>
  )
}

export default BioContent;
