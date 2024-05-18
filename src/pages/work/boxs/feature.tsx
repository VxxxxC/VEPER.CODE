import React from "react";

const feature = () => {
  const content = [
    { title: "title", content: "content" },
    { title: "title", content: "content" },
    { title: "title", content: "content" },
    { title: "title", content: "content" },
  ];

  return (
    <>
      {content.map((item, index) => {
        return (
          <div className="grid grid-cols-2 mobile:grid-cols-1">
            <div> {item.title + index} </div>
            <div> {item.content + index} </div>
          </div>
        );
      })}
    </>
  );
};

export default feature;
