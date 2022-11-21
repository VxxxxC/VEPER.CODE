import React from "react";
import { IoArrowBack } from 'react-icons/io5'

function BlogReturnButton() {
  return (
    <a href="/#blog">
      <IoArrowBack size={46} className="p-2 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white bg-opacity-30 rounded-xl"/>
      </a>
  );
}

export default BlogReturnButton;
