/*
 * Etch-a-Sketch
 * 
 * Insert 16x16 grid of divs into the DOM for the base
 * Allow user to repaint canvas with custom grid size
 * Have grids signify that they have been painted on with background color change
 *  
 */

// default canvas size on page load
const DEFAULT_CANVAS_SIZE = 16;
const DEFAULT_COLOR = "#000000";

// append grid of divs onto an existing div
const gridCanvas = document.querySelector("#gridContainer");

// button event listeners
// document.getElementById("blackBtn").addEventListener("click", changeBackgroundColor);
// document.getElementById("randomBtn").addEventListener("click", changeBackgroundColor);
document.getElementById("resetBtn").addEventListener("click", defaultGrid);


// function creates a div and appends to the parent container
function createDiv() {
    console.log("Generating divs...");
    const newBox = document.createElement("div");
    newBox.classList.add("gridBoxElement");
    newBox.setAttribute("draggable", "false"); // still having major problems with mousedown not triggering
    // listen for mouseover - paint conditions
    newBox.addEventListener("mouseover", changeBackgroundColor);
    gridCanvas.appendChild(newBox);
}

function destroyGrids() {
    gridCanvas.textContent = "";
    console.log("Old divs erased!");
}

// validate user selected size
function validateUserSize(userGridSize) {
    
    if (userGridSize > 100) {
        console.log("User entered " + userGridSize + ", Setting to 100");
        return 100;
    } else if (userGridSize <= 0) {
        console.log("User entered " + userGridSize + ", Setting to 1");
        return 1;
    } else {
        console.log("Setting board to " + userGridSize);
        return userGridSize;
    }
}

// Don't need to loop for rows and columns, just get the total number
function createGrid(userGridSize) {
    destroyGrids();

    let gridSize = validateUserSize(userGridSize);

    console.log("Creating " + gridSize * gridSize + " divs");

    for (i=0; i< gridSize * gridSize; i++) {
        createDiv();
    }

    // reset the canvas row-column alignment
    gridCanvas.setAttribute("style", `display: grid; grid-template-columns: repeat(${gridSize}, auto`);
}

// DON'T WORK CURRENTLY
// function randomize() {
//     return Math.floor(Math.random() * 256);
// }

// function setColorBlack(e) {
//     e.target.style.backgroundColor = DEFAULT_COLOR;
// }

// function setColorRandom(e) {
//     let valueR = randomize();
//     let valueG = randomize();
//     let valueB = randomize();

//     let valueRGB = `rgb(${valueR}, ${valueB}, ${valueG})`;
// }

// takes an event from event listeners attached to each grid in the canvas
function changeBackgroundColor(e) {
    e.target.classList.add("gridBoxElementBlack");
}

// for reset button implementation
function defaultGrid() {
    createGrid(DEFAULT_CANVAS_SIZE);
}

// set initial div grid up
defaultGrid(DEFAULT_CANVAS_SIZE);