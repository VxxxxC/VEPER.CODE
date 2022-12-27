import { SiHtml5, SiCsswizardry, SiJavascript, SiNodedotjs, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiReact, SiTailwindcss, SiPython, SiTensorflow, SiAmazonaws } from 'react-icons/si';

const selector = ({ props }: { props : string }) => {

  const name = props;
  const icon = (name:string) => {
  switch (name) {
    case "HTML" :
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-red-400 bg-red-900"><SiHtml5 size={18} color='red-400'/>{name}</div>;
    case "CSS" :
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-sky-400 bg-sky-900"><SiCsswizardry size={18} color='sky-400'/>{name}</div>;
    case "Javascript" :
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-yellow-400 bg-yellow-900"><SiJavascript size={18} color='yellow-400'/>{name}</div>;
    case "Nodejs":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-green-400 bg-green-900"><SiNodedotjs size={18} color='green-400'/>{name}</div>;
    case "Typescript":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-sky-400 bg-sky-900"><SiTypescript size={18} color='sky-400'/>{name}</div>;
    case "Express":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-white bg-black"><SiExpress size={18} color='white'/>{name}</div>;
    case "MongoDB":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-emerald-400 bg-emerald-900"><SiMongodb size={18} color='emerald-400'/>{name}</div>;
    case "PostgreSQL":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-blue-400 bg-blue-900"><SiPostgresql size={18} color='blue-400'/>{name}</div>;
    case "React":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 bg-cyan-900"><SiReact size={18} color='cyan-400'/>{name}</div>;
    case "React Native":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 bg-cyan-900"><SiReact size={18} color='cyan-400'/>{name}</div>;
    case "Tailwindcss":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-cyan-400 bg-cyan-900"><SiTailwindcss size={18} color='cyan-400'/>{name}</div>;
    case "Python":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-blue-400 bg-blue-900"><SiPython size={18} color='blue-400'/>{name}</div>;
    case "Tensorflow":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-orange-900"><SiTensorflow size={18} color='orange-400'/>{name}</div>;
    case "EC2" :
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-orange-900"><SiAmazonaws size={18} color='orange-400'/>{name}</div>;
    case "S3":
      return <div className="w-[140px] font-sans rounded-3xl m-2 py-1 gap-2 flex justify-center items-center text-orange-400 bg-orange-900"><SiAmazonaws size={18} color='orange-400'/>{name}</div>;
    }
  }

  return(
  <>
  {icon(name)}
  </>
  )
};

export default selector;
