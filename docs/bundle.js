!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);var r,n,i;a(1);r=[{image:"./imgs/memory-game-cards.png",alt:"Memory game cards",link:"https://magicmart.github.io/memory-game-cards/",title:"Memory Game Cards"},{image:"./imgs/arcade-game.png",alt:"Game action from the arcade game",link:"https://magicmart.github.io/martin-arcade-game/",title:"Arcade Game"},{image:"./imgs/robin.png",alt:"European Robin",link:"https://codepen.io/MagicMart/full/LOLjJB/",title:"Animal Trading Card"},{image:"./imgs/pixel-react.png",alt:"Abstract art created with pixel-react",link:"https://github.com/MagicMart/pixel-react",title:"Pixel Art Maker"},{image:"./imgs/gliders.png",alt:"A still image from The Game Of life app",link:"https://magicmart.github.io/Game-of-Life/",title:"Game of Life"}],n=document.getElementById("featured"),i=document.createDocumentFragment(),r.forEach(function(e){var t=document.createElement("div");t.classList="col-4 featured container-padding",t.insertAdjacentHTML("beforeend",'<img src="'.concat(e.image,'" class="row" alt="').concat(e.alt,'">\n         <a href="').concat(e.link,'" class="row">  \n           <h3>').concat(e.title,"</h3>\n          </a>")),i.appendChild(t)}),n.appendChild(i)},function(e,t,a){}]);