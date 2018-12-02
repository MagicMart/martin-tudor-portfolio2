"use strict";

const featuredArr = [
    {
        image: "imgs/memory-game-cards.png",
        alt: "Memory game cards",
        link: "https://magicmart.github.io/memory-game-cards/",
        title: "Memory Game Cards"
    },
    {
        image: "imgs/arcade-game.png",
        alt: "Game action from the arcade game",
        link: "https://magicmart.github.io/martin-arcade-game/",
        title: "Arcade Game"
    },
    {
        image: "imgs/robin.png",
        alt: "European Robin",
        link: "https://codepen.io/MagicMart/full/LOLjJB/",
        title: "Animal Trading Card"
    },
    {
        image: "imgs/pixel-react.png",
        alt: "Abstract art created with pixel-react",
        link: "https://github.com/MagicMart/pixel-react",
        title: "Pixel Art Maker"
    },
    {
        image: "imgs/gliders.png",
        alt: "A still image from The Game Of life app",
        link: "https://magicmart.github.io/Game-of-Life/",
        title: "Game of Life"
    }
];

function featured(arr) {
    const stuff = document.getElementById("featured");
    const frag = document.createDocumentFragment();
    arr.forEach(elem => {
        const div = document.createElement("div");
        div.classList = "col-4 featured container-padding";
        div.insertAdjacentHTML(
            "beforeend",
            `<img src="${elem.image}" class="row" alt="${elem.alt}">
         <a href="${elem.link}" class="row">  
           <h3>${elem.title}</h3>
          </a>`
        );
        frag.appendChild(div);
    });
    stuff.appendChild(frag);
}

featured(featuredArr);
