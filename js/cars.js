class Lambourgini {
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

         titleLink(){
            const nameCont = document.querySelector("#names");
            const ul = document.createElement("ul");
            const make = document.createElement("li");
               
            make.textContent= `${this.make}`;
                
            nameCont.appendChild(ul);
            ul.appendChild(make);

            
            //consulted youtube
            make.addEventListener('click',()=>{
                this.displayDetails();
            })
            //is there a way to integrate an event litener for display details and titleLink?
            
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
        
                container.innerHTML = ''; 
                container.appendChild(ul);
                
                 carImage.src = this.image;
                 container.appendChild(carImage);
                
            }
        }
        class Porsche extends Lambourgini {
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

class Ferrari extends Lambourgini{
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

    export{Lambourgini,Porsche, Ferrari};        
        

