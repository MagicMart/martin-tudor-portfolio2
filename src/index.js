import "./main.css";
import sequence from "./imgs/sequence2.jpg";
import simpleBlogger from "./imgs/simple-blogger.png";
import weatherApp from "./imgs/weather_app.jpg";
import pixelReact from "./imgs/pixel-react.png";
import gliders from "./imgs/gliders.png";
import memoryCards from "./imgs/memoryCards2.jpg";
document.querySelector("body").style.visibility = "visible";

const featuredArr = [
    {
        image: memoryCards,
        alt: "Memory game cards - with React.js",
        link: "https://marts-memory-cards.netlify.com/",
        title: "Memory Game Cards"
    },
    {
        image: sequence,
        alt: "Sequence memory game",
        link: "https://sequence-game.netlify.com/",
        title: "Sequence"
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
        div.className = "featured-card";
        div.setAttribute("role", "listitem");
        div.insertAdjacentHTML(
            "beforeend",
            `<img src="${elem.image}"  style="width:inherit;height:186px;" alt="${elem.alt}">
            <p>
         <a class="button" href="${elem.link}">  
           ${elem.title}
          </a>
          </p>`
        );
        frag.appendChild(div);
    });
    stuff.appendChild(frag);
}

featured(featuredArr);
