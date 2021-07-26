const reset = document.querySelector(".btn");
const grid = document.querySelector(".grid");
const root = document.documentElement;
const pen = document.getElementsByName("color-option");
pen.forEach(radio => 
    radio.addEventListener('click', function(){
        color = radio.value;
    }));
let color = "blue";
let count = 0; 


function newGrid(){
    

    let gridWidth = 16;
    grid.textContent = "";
    if (count === 0){
        count++;
    }
    else {
        gridWidth = getInput();
    }
    let sWidth = 500/gridWidth - 2; 
    for (let i =0; i < gridWidth*gridWidth; i++){
        const square = document.createElement('div');
        square.classList.add("square");
        grid.appendChild(square);
        square.style.width = sWidth + "px";
        square.style.height = sWidth + "px";
        square.dataset.lightness = 100;
        
        
        square.addEventListener("mouseover", selection);
        reset.addEventListener("click", newGrid); 
    }
}
//helper functions 

function selection(){
    colorTheme = color;
    switch(colorTheme){
        case('blue'):
            currentColor = "blue";
            break;
        case("random"):
            currentColor = generateColor();
            break;
        case("grey-scale"):
            currentColor = greyScale(this);
            break;
    }
    this.style.backgroundColor = currentColor;

}

function generateColor(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function greyScale(e){
    let lightness = e.dataset.lightness;   
    if (lightness > 0){
        lightness -= 10; 
        e.dataset.lightness = lightness;
    }
    return `hsl(0, 0%, ${lightness}%)`
}

let userMessage = "Enter desired grid width between 2 and 100";

function getInput(){
    let dimension;
    let userInput = prompt(userMessage);
    let toNum = parseInt(userInput);
    if (isNaN(toNum) || toNum < 2 || toNum > 100){
        userMessage = "Invalid input. Try Again: Enter desired grid width between 2 and 100";
        getInput();
    }
    else{
        dimension = userInput;
        return dimension;
    }
}

window.onload = newGrid();

