import {
  SiHtml5,
  SiCsswizardry,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiPython,
  SiTensorflow,
  SiAmazonaws,
  SiNativescript,
} from "react-icons/si";
import { GiFeather } from "react-icons/gi";

const selector = ({ props, size = 18 }: { props: string; size?: number }) => {
  const name = props;
  const icon = (name: string) => {
    switch (name) {
      case "HTML":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-red-400 bg-red-900">
            <SiHtml5 size={size} color="red-400" />
            {name}
          </div>
        );
      case "CSS":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-sky-400 bg-sky-900">
            <SiCsswizardry size={size} color="sky-400" />
            {name}
          </div>
        );
      case "Javascript":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-yellow-400 bg-yellow-900">
            <SiJavascript size={size} color="yellow-400" />
            {name}
          </div>
        );
      case "Nodejs":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-green-400 bg-green-900">
            <SiNodedotjs size={size} color="green-400" />
            {name}
          </div>
        );
      case "Typescript":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-sky-400 bg-sky-900">
            <SiTypescript size={size} color="sky-400" />
            {name}
          </div>
        );
      case "Express":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-white bg-black">
            <SiExpress size={size} color="white" />
            {name}
          </div>
        );
      case "MongoDB":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-emerald-400 bg-emerald-900">
            <SiMongodb size={size} color="emerald-400" />
            {name}
          </div>
        );
      case "PostgreSQL":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-blue-400 bg-blue-900">
            <SiPostgresql size={size} color="blue-400" />
            {name}
          </div>
        );
      case "React":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 bg-cyan-900">
            <SiReact size={size} color="cyan-400" />
            {name}
          </div>
        );
      case "React Native":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 bg-cyan-900">
            <SiReact size={size} color="cyan-400" />
            {name}
          </div>
        );
      case "Redux":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-violet-400 bg-violet-900">
            <SiRedux size={size} color="violet-400" />
            {name}
          </div>
        );
      case "Tailwindcss":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 bg-cyan-900">
            <SiTailwindcss size={size} color="cyan-400" />
            {name}
          </div>
        );
      case "Python":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-blue-400 bg-blue-900">
            <SiPython size={size} color="blue-400" />
            {name}
          </div>
        );
      case "Tensorflow":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-orange-900">
            <SiTensorflow size={size} color="orange-400" />
            {name}
          </div>
        );
      case "EC2":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-orange-900">
            <SiAmazonaws size={size} color="orange-400" />
            {name}
          </div>
        );
      case "S3":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-orange-900">
            <SiAmazonaws size={size} color="orange-400" />
            {name}
          </div>
        );
      case "Feathers.js":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-white">
            <GiFeather size={size} color="orange-400" />
            {name}
          </div>
        );
      case "NativeScript":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-sky-400 bg-stone-50">
            <SiNativescript size={size} color="sky-400" />
            {name}
          </div>
        );
    }
  };

  return <>{icon(name)}</>;
};

export default selector;
