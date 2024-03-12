import {Lambourgini, Porsche, Ferrari, Bentley} from "./cars.js";

const porsche= new Porsche(
    "Porsche", 
    "911 Turbo S",
    2020,
    "red",
    "img/porsche.jpg"
);
const lambo= new Lambourgini(
    "Lambourgini",
    "Huracan",
    2014,
    "yellow",
    "img/lambo.jpeg"
);
const ferrari = new Ferrari(
    "Ferrari", 
    "488 GTB", 
    2018,
    "blue",
    "img/ferrari.jpeg"
)
const bentley = new Bentley(
    "Bentley",
    "Flying Spur",
    2024,
    "orange"
    
)
lambo.titleLink();
ferrari.titleLink();
porsche.titleLink();
bentley.titleLink();

//console.log(lambo);
//console.log(ferrari);
//console.log(porsche);