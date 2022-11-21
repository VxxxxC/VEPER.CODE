import { SITE_TITLE } from "../config";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Menu, Transition } from "@headlessui/react";
import ThemeToggle from "./ThemeToggle";

function HeaderComponent() {
  const headerItems = ["Home", "Project", "About"];
  const [click, setClick] = useState("Home");

  useEffect(() => {
    console.log("width : ", window.innerWidth);
    console.log("height : ", window.innerHeight);
  }, []);

  const mobile = window.innerWidth < 1000;

  return mobile ? (
    <Menu>
      <Menu.Button className="p-3 rounded-xl border border-gray-300 hover:bg-white hover:text-black">
        <IoMenu />
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="w-[200px] p-2 flex flex-col justify-center rounded-xl dark:bg-black bg-white dark:text-white text-black bg-opacity-30">
          {headerItems.map((item) => {
            const checkClick = item === click;

            return (
              <Menu.Item>
                {({ active }) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`${
                      checkClick
                        ? "dark:bg-white dark:text-black bg-black text-white rounded-xl"
                        : ""
                    } cursor-pointer p-5`}
                  >
                    <button onClick={() => setClick(item)}>{item}</button>
                  </a>
                )}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  ) : (
    <div className="w-[100px] flex flex-col">
      {headerItems.map((item) => {
        const checkClick = item === click;
        return (
          <a
            key={item}
            className={`${
              checkClick
                ? "dark:bg-white dark:text-black bg-black text-white rounded-xl"
                : ""
            } cursor-pointer p-5`}
            href={`#${item.toLowerCase()}`}
          >
            <button onClick={() => setClick(item)}>{item}</button>
          </a>
        );
      })}
    </div>
  );
}

export default HeaderComponent;
