import React from "react";
import Typewriter from "typewriter-effect";

let text1 = "Hi there!! Thank you to visit VEPER.CODES";
let text2 = "I am a Developer base in Hong Kong";
let text3 = "To more about me, please have a look at the below :)";

function HomeWelcomeMsg() {
  return (
    <Typewriter
      options={{
        cursor: "",
        strings: [text1, text2, text3],
        delay: 60,
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export default HomeWelcomeMsg;
