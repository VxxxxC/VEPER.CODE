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
  SiDart,
  SiFlutter,
  SiSolidity,
  SiBlender,
  SiNuxtdotjs,
  SiVuedotjs,
  SiRust,
} from "react-icons/si";
import { GiFeather } from "react-icons/gi";

const selector = ({
  props,
  size = 18,
  showName = true,
}: {
  props: string;
  size?: number;
  showName?: boolean;
}) => {
  const name = props;
  const icon = (name: string) => {
    switch (name) {
      case "HTML":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-red-400 bg-red-900">
            <SiHtml5 size={size} color="red-400" />
            {showName ? name : null}
          </div>
        );
      case "CSS":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-sky-400 bg-sky-900">
            <SiCsswizardry size={size} color="sky-400" />
            {showName ? name : null}
          </div>
        );
      case "Javascript":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-yellow-400 bg-yellow-900">
            <SiJavascript size={size} color="yellow-400" />
            {showName ? name : null}
          </div>
        );
      case "Nodejs":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-green-400 bg-green-900">
            <SiNodedotjs size={size} color="green-400" />
            {showName ? name : null}
          </div>
        );
      case "Typescript":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-sky-400 bg-sky-900">
            <SiTypescript size={size} color="sky-400" />
            {showName ? name : null}
          </div>
        );
      case "Express":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-white bg-black">
            <SiExpress size={size} color="white" />
            {showName ? name : null}
          </div>
        );
      case "MongoDB":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-emerald-400 bg-emerald-900">
            <SiMongodb size={size} color="emerald-400" />
            {showName ? name : null}
          </div>
        );
      case "PostgreSQL":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-blue-400 bg-blue-900">
            <SiPostgresql size={size} color="blue-400" />
            {showName ? name : null}
          </div>
        );
      case "React":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 bg-cyan-900">
            <SiReact size={size} color="cyan-400" />
            {showName ? name : null}
          </div>
        );
      case "React Native":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 bg-cyan-900">
            <SiReact size={size} color="cyan-400" />
            {showName ? name : null}
          </div>
        );
      case "Redux":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-violet-400 bg-violet-900">
            <SiRedux size={size} color="violet-400" />
            {showName ? name : null}
          </div>
        );
      case "Tailwindcss":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 bg-cyan-900">
            <SiTailwindcss size={size} color="cyan-400" />
            {showName ? name : null}
          </div>
        );
      case "Python":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-blue-400 bg-blue-900">
            <SiPython size={size} color="blue-400" />
            {showName ? name : null}
          </div>
        );
      case "Tensorflow":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-orange-900">
            <SiTensorflow size={size} color="orange-400" />
            {showName ? name : null}
          </div>
        );
      case "EC2":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-orange-900">
            <SiAmazonaws size={size} color="orange-400" />
            {showName ? name : null}
          </div>
        );
      case "S3":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-orange-900">
            <SiAmazonaws size={size} color="orange-400" />
            {showName ? name : null}
          </div>
        );
      case "Feathers.js":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-white">
            <GiFeather size={size} color="orange-400" />
            {showName ? name : null}
          </div>
        );
      case "Rust":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-transparent">
            <SiRust size={size} color="orange-400" />
            {showName ? name : null}
          </div>
        );
      case "NativeScript":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-sky-400 bg-stone-50">
            <SiNativescript size={size} color="sky-400" />
            {showName ? name : null}
          </div>
        );
      case "Dart":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-sky-600 bg-transparent">
            <SiDart size={size} color="sky-700" />
            {showName ? name : null}
          </div>
        );
      case "Flutter":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-sky-600 bg-transparent">
            <SiFlutter size={size} color="sky-700" />
            {showName ? name : null}
          </div>
        );
      case "Solidity":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-gray-500 bg-transparent">
            <SiSolidity size={size} color="gray-700" />
            {showName ? name : null}
          </div>
        );
      case "Blender":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-transparent">
            <SiBlender size={size} color="orange-400" />
            {showName ? name : null}
          </div>
        );
      case "Nuxt":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-emerald-400 bg-white">
            <SiNuxtdotjs size={size} color="emerald-400" />
            {showName ? name : null}
          </div>
        );
      case "Vue":
        return (
          <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-emerald-400 bg-white">
            <SiVuedotjs size={size} color="emerald-400" />
            {showName ? name : null}
          </div>
        );
    }
  };

  return <>{icon(name)}</>;
};

export default selector;
