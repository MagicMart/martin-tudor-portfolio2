import "./main.css";

document.querySelector("body").style.visibility = "visible";

const featuredArr = [
    {
        image:
            "https://marts-portfolio.s3.eu-west-2.amazonaws.com/memory-cards.jpg",
        alt: "Memory game cards - with React.js",
        link: "https://marts-memory-cards.netlify.com/",
        title: "Memory Game Cards",
    },
    {
        image:
            "https://marts-portfolio.s3.eu-west-2.amazonaws.com/sequence2.jpg",
        alt: "Sequence memory game",
        link: "https://sequence-game.netlify.com/",
        title: "Sequence",
    },
    {
        image:
            "https://marts-portfolio.s3.eu-west-2.amazonaws.com/simple-blogger.jpg",
        alt: "Simple Blogger front page",
        link: "https://simple-blogger.netlify.com/",
        title: "Simple Blogger",
    },
    {
        image:
            "https://marts-portfolio.s3.eu-west-2.amazonaws.com/weather-app.jpg",
        alt: "Still from weather app",
        link: "https://martin-weather-app.netlify.com/",
        title: "Weather App",
    },
    {
        image:
            "https://marts-portfolio.s3.eu-west-2.amazonaws.com/hacker-news.jpg",
        alt: "Still showing posts from hacker news",
        link: "https://marts-hacker-news.netlify.com/",
        title: "Hacker News",
    },
    {
        image:
            "https://marts-portfolio.s3.eu-west-2.amazonaws.com/game-of-life.jpg",
        alt: "A still image from The Game Of life app",
        link: "https://magicmart.github.io/Game-of-Life/",
        title: "Game of Life",
    },
];

function featured(arr) {
    "use strict";
    const stuff = document.getElementById("featured");
    const frag = document.createDocumentFragment();
    arr.forEach(elem => {
        const div = document.createElement("div");
        div.className = "card";
        div.setAttribute("role", "listitem");
        div.insertAdjacentHTML(
            "beforeend",
            `<img class="card__image" src="${elem.image}"  width="282" height="188" alt="${elem.alt}">   
         <a class="card__button" href="${elem.link}">  
           ${elem.title}
          </a>
         `
        );
        frag.appendChild(div);
    });
    stuff.appendChild(frag);
}

featured(featuredArr);
