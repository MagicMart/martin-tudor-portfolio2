import "./main.css";
import memoryGameCards from "./imgs/memory-game-cards.png";
import arcadeGame from "./imgs/arcade-game.png";
import weatherApp from "./imgs/weather_app.png";
import pixelReact from "./imgs/pixel-react.png";
import gliders from "./imgs/gliders.png";
import memoryCards2 from "./imgs/memoryCards2.png";

const featuredArr = [
    {
        image: memoryCards2,
        alt: "Memory game cards - with React.js",
        link: "https://github.com/MagicMart/memory-game-cards2",
        title: "React - Memory Game Cards"
    },
    {
        image: memoryGameCards,
        alt: "Memory game cards",
        link: "https://magicmart.github.io/memory-game-cards/",
        title: "Memory Game Cards"
    },
    {
        image: arcadeGame,
        alt: "Game action from the arcade game",
        link: "https://magicmart.github.io/martin-arcade-game/",
        title: "Arcade Game"
    },
    {
        image: weatherApp,
        alt: "Still from weather app",
        link: "https://kind-rosalind-4408cd.netlify.com/",
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
            `<img src="${
                elem.image
            }"  style="width:280px;height:186.67px;" alt="${elem.alt}">
         <a href="${elem.link}">  
           <h3>${elem.title}</h3>
          </a>`
        );
        frag.appendChild(div);
    });
    stuff.appendChild(frag);
}

featured(featuredArr);
