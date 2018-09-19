const featuredArr = [
  {
    image: "imgs/robin.png",
    alt: "European Robin",
    link: "https://codepen.io/MagicMart/full/LOLjJB/",
    title: "Animal Trading Card"
  },
  {
    image: "imgs/art.png",
    alt: "The word 'ART' drawn with the Pixel Art Maker",
    link: "https://codepen.io/MagicMart/pen/baENwe",
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
