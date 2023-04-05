/*
 * Etch-a-Sketch
 * 
 * Insert 16x16 grid of divs into the DOM for the base
 * 
 * 
 */

// append 16x16 grid of divs onto an existing div
const gridCanvas = document.querySelector("#gridContainer");

// function creates a div and appends to the parent container
function createDiv() {
    const newBox = document.createElement("div");
    newBox.classList.add("gridBoxElement");
    // listen for mouseover or mousedown - paint conditions
    newBox.addEventListener("mousedown", changeBackgroundColor);
    newBox.addEventListener("mouseover", changeBackgroundColor);
    gridCanvas.appendChild(newBox);
}

// validate user selected size
function validateUserSize(userGridSize) {
    if (userGridSize > 100) {
        return 100;
    } else if (userGridSize <= 0) {
        return 1;
    } else {
        return userGridSize;
    }
}

// Don't need to loop for rows and columns, just get the total number
function createGrid(userGridSize) {
    let gridSize = validateUserSize(userGridSize);

    for (i=0; i< gridSize * gridSize; i++) {
        createDiv();
    }
}