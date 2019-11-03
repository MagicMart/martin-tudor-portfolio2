import "./main.css";
import memoryGameCards from "./imgs/memory-game-cards.png";
import simpleBlogger from "./imgs/simple-blogger.png";
import weatherApp from "./imgs/weather_app.jpg";
import pixelReact from "./imgs/pixel-react.png";
import gliders from "./imgs/gliders.png";
import memoryCards2 from "./imgs/memoryCards2.jpg";
document.querySelector("body").style.visibility = "visible";

const featuredArr = [
    {
        image: memoryCards2,
        alt: "Memory game cards - with React.js",
        link: "https://github.com/MagicMart/memory-game-cards2/",
        title: "React - Memory Game Cards"
    },
    {
        image: memoryGameCards,
        alt: "Memory game cards",
        link: "https://magicmart.github.io/memory-game-cards/",
        title: "Memory Game Cards"
    },
    {
        image: simpleBlogger,
        alt: "Simple Blogger front page",
        link: "https://simple-blogger.netlify.com/",
        title: "Simple Blogger"
    },
    {
        image: weatherApp,
        alt: "Still from weather app",
        link: "https://martin-weather-app.netlify.com/",
        title: "Weather App"
    },
    {
        image: pixelReact,
        alt: "Abstract art created with pixel-react",
        link: "https://github.com/MagicMart/pixel-react",
        title: "Pixel Art Maker"
    },
    {
        image: gliders,
        alt: "A still image from The Game Of life app",
        link: "https://magicmart.github.io/Game-of-Life/",
        title: "Game of Life"
    }
];

function featured(arr) {
    "use strict";
    const stuff = document.getElementById("featured");
    const frag = document.createDocumentFragment();
    arr.forEach(elem => {
        const div = document.createElement("div");
        div.className = "container-padding";
        div.setAttribute("role", "listitem");
        div.insertAdjacentHTML(
            "beforeend",
            `<img src="${elem.image}"  style="width:280px;height:186.67px;" alt="${elem.alt}">
         <a href="${elem.link}">  
           <h3>${elem.title}</h3>
          </a>`
        );
        frag.appendChild(div);
    });
    stuff.appendChild(frag);
}

featured(featuredArr);
