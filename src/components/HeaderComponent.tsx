import { SITE_TITLE } from "../config";
import React, { useState } from "react";

function HeaderComponent() {
  const headerItems = ["Home", "Blog", "About"];
  const [click, setClick] = useState('Home');
 
  return (
      <nav className="w-[100%] text-center m-[1px] gap-4 flex flex-col rounded-3xl">

        {headerItems.map((item) => {
          const checkClick = item === click
          return <a key={item} className={`${checkClick ? "bg-gray-500 text-white" : ""}  cursor-pointer rounded-2xl p-5 transition duration-200`} href={`#${item.toLowerCase()}`}>
 <button onClick={()=>setClick(item)}>{item}</button></a>;
        })}
      </nav>
  );
}

export default HeaderComponent;
