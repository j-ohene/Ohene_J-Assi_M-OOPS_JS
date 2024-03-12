class Car {
    constructor(
        make, 
        model,
         year,
         colour,
         image) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.colour=colour;
        this.image=image;
         }    
         displayDetails() {
            const container= document.querySelector("#container");
            const ul = document.createElement("ul");
            const model = document.createElement("li");
            const year = document.createElement("li");
            const colour = document.createElement("li");
            const carImage = document.querySelector("#carImage");
        
                model.textContent = `Model: ${this.model}`;
                year.textContent = `Year: ${this.year}`;
                colour.textContent = `Colour: ${this.colour}`;
    
        
                ul.appendChild(model);
                ul.appendChild(year);
                ul.appendChild(colour);
        
                container.innerHTML = ''; // Clear container
                container.appendChild(ul);
                
                 carImage.src = this.image;
                 container.appendChild(carImage);
                
            }
        }
        class Porsche extends Car {
        constructor( 
        make, 
        model,
        year,
        colour,
        image){
        super( make, 
            model,
            year,
            colour,
            image)
                }
                
                }

class Ferrari extends Car{
    constructor( 
        make, 
        model,
         year,
         colour,
         image){
            super( make, 
                model,
                 year,
                 colour,
                 image)
         }
    }

    export{Car,Porsche, Ferrari};        
        

