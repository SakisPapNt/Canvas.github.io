let color = "black";
let click = true;
let TextBoard2= document.querySelector('.TextBoard2');
let TextBoard1= document.querySelector('.TextBoard1');
let TextBoard3= document.querySelector('.TextBoard3');

function Canvas(size,containerId) {
  let board = document.querySelector(`#${containerId}`);
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

Canvas(16,'sketch-container2');
Canvas(16,'sketch-container1');
Canvas(16,'sketch-container3');


function changeSizeBoard(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";

  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

function SelectBoard(containerId){
    let input = document.querySelector("input").value;
    if(containerId==="sketch-container2" && input >= 2 && input <= 100){
        changeSizeBoard(input)
        TextBoard2.innerHTML=`Size of Board 1: ${input}`;
        Canvas(input,"sketch-container2");
        
    }else if(containerId==="sketch-container1" && input >= 2 && input <= 100){
        TextBoard1.innerHTML=`Size of Board 2: ${input}`;

        changeSizeBoard(input)
        Canvas(input,"sketch-container1")
    }else if(containerId==="sketch-container3" && input >= 2 && input <= 100){
        changeSizeBoard(input)
        TextBoard3.innerHTML=`Size of Board 3: ${input}`;
        Canvas(input,"sketch-container3")
    }
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard(containerId) {
  let board = document.querySelector(`#${containerId}`);
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

function resetAll() {
    let containers = document.querySelectorAll(".sketch-container");
    containers.forEach((container) => {
      let squares = container.querySelectorAll("div");
      squares.forEach((div) => (div.style.backgroundColor = "white"));
    });
  }

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode_coloring").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode_coloring").textContent = "Mode: Not Coloring";
    }
  }
});