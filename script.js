let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

 let mainEl = document.getElementById ("main-title");

 mainEl.textContent = "Hi, I'm the Dom welcome !"

  // Part 2

let bodyEl = document.querySelector ("body");
bodyEl.style.backgroundColor = "lightblue";

  // Part 3

let favEl = document.querySelector("#favorite-things");
// console.log (favEl);
favEl.lastElementChild.remove();


  // Part 4

let specTitleEl = document.querySelectorAll(".special-title");
  specTitleEl.forEach (title =>{
    title.style.fontSize = "2rem";
  })

  // Part 5

let itemToBeRemoved = document.querySelector("#past-races :nth-child(4)");
itemToBeRemoved.parentNode.removeChild(itemToBeRemoved);


  // Part 6
let pastRacesEl = document.getElementById ("past-races");
let itemToBeAdded = document.createElement ("li");
itemToBeAdded.textContent = "columbus";
pastRacesEl.appendChild (itemToBeAdded);


  // Part 7

 let mainElement = document.querySelector (".main");

let divEl = document.createElement ("div");
divEl.classList.add ("blog-post");
divEl.classList.add ("purple");


let h2El = document.createElement ("h1");
h2El.textContent = "Columbus";

let pEl =document.createElement ("p");
pEl.textContent = "I ADDED OPTION TURBO TO MY CAR ";

divEl.appendChild (h2El);
divEl.appendChild (pEl);
mainElement.appendChild (divEl);


  // Part 8
let quoteTitleEl = document.getElementById ("quote-title");

quoteTitleEl.addEventListener ("click", (evt) =>{
  randomQuote();

})

  // Part 9



document.querySelectorAll (".blog-post").forEach (blog => {

     // first event 
     blog.addEventListener ('mouseout', (evt) => {
      evt.stopPropagation();
      evt.currentTarget.classList.toggle ("purple");
       
     })


    // second event

    blog.addEventListener ('mouseenter', (evt) => {
      evt.stopPropagation();
      evt.currentTarget.classList.toggle ("red");

      

     })


})


});
