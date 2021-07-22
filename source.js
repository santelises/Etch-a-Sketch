const reset = document.querySelector(".btn");
const grid = document.querySelector(".grid");
const root = document.documentElement;
let count = 0; 

function newGrid(){
    let gridWidth = 16;
    grid.textContent = "";
    console.log(count);
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
        square.addEventListener("mouseover", changeColor);
        reset.addEventListener("click", newGrid); 
    }
}
//helper functions 

function changeColor(){
    this.style.backgroundColor = randomColor();
}

let userMessage = "Enter desired grid width between 2 and 100";

function getInput(){
    let dimension;
    let userInput = prompt(userMessage);
    let toNum = parseInt(userInput);
    // console.log(toNum);
    if (isNaN(toNum) || toNum < 2 || toNum > 100){
        // console.log("not good")
        userMessage = "Invalid input. Try Again: Enter desired grid width between 2 and 100";
        getInput();
    }
    else{
        dimension = userInput;
        return dimension;
    }
}

function randomColor(){
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);

    let color = `rgb(${r}, ${g}, ${b})`;

    return color;

}


window.onload = newGrid();

