// import { cars } from "./modules/cars.js";
// import { contact } from "./modules/contact.js";
// import { greensock } from "./modules/greensock.js";
// import { skills } from "./modules/skills.js";
// import { smoothscroll } from "./modules/smoothscroll.js";




// cars();
// greensock();
// smoothscroll();
// skills();
// contact();


import { Lambourgini, Porsche, Ferrari, Bentley } from "./cars.js";
// import { Lambourgini, Porsche, Ferrari, Bentley } from "./modules/cars.js";

const porsche = new Porsche(
    "Porsche",
    "911 Turbo S",
    2020,
    "red",
    "img/porsche.jpg"
);
const lambo = new Lambourgini(
    "Lambourgini",
    "Huracan",
    2014,
    "yellow",
    "img/lambourgini.jpg"
);
const ferrari = new Ferrari(
    "Ferrari",
    "488 GTB",
    2018,
    "blue",
    "img/ferrari.jpg"
)
const bentley = new Bentley(
    "Bentley",
    "Flying Spur",
    2024,
    "orange",
    "img/bentley.jpg"

)
lambo.titleLink();
ferrari.titleLink();
porsche.titleLink();
bentley.titleLink();

//console.log(lambo);
//console.log(ferrari);
//console.log(porsche);


