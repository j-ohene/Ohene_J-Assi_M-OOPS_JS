import {Car, Porsche, Ferrari} from "./cars.js";

const porsche= new Porsche(
    "Porsche", 
    "911 Turbo S",
    2020,
    "red",
    "img/porsche.jpg"
);
const theeCar= new Car(
    "Lambourgini",
    "Huracan",
    2014,
    "yellow",
    "img/lambo.jpeg"
);
const ferrari = new Ferrari(
    'Ferrari', 
    '488 GTB', 
    2018,
    "blue",
    "img/ferrari.jpeg"
)

theeCar.displayDetails();
ferrari.displayDetails();
porsche.displayDetails();