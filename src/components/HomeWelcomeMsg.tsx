import React from 'react'

let text = 'Hi there 👋 Thank you to visit VEPER.CODE 🧑🏻‍💻 To more about me, please have a look at the below 🥳 ';
let i = 0;

function HomeWelcomeMsg() {
   if(i < text.length){
    document.getElementById("welMsg").innerHTML += text.charAt(i);
    i++;

    setTimeout(HomeWelcomeMsg, 100);
  }
}

export default HomeWelcomeMsg
