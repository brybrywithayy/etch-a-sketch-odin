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

// append grid of divs onto an existing div
const gridCanvas = document.querySelector("#gridContainer");

// function creates a div and appends to the parent container
function createDiv() {
    const newBox = document.createElement("div");
    newBox.classList.add("gridBoxElement");
    newBox.setAttribute("draggable", "false"); // still having major problems with mousedown not triggering
    // listen for mouseover or mousedown - paint conditions
    newBox.addEventListener("mousedown", changeBackgroundColor);
    gridCanvas.appendChild(newBox);
}

function destroyGrids() {
    gridCanvas.textContent = "";
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
    destroyGrids();

    let gridSize = validateUserSize(userGridSize);

    for (i=0; i< gridSize * gridSize; i++) {
        createDiv();
    }

    // reset the canvas row-column alignment
    gridCanvas.setAttribute("style", `display: grid; grid-template-columns: repeat(${gridSize}, auto`);
}

// takes an event from event listeners attached to each grid in the canvas
function changeBackgroundColor(e) {
    
    if (e.type === "mouseover") {
        if (e.onmousedown) {
            e.target.classList.add("gridBoxElementPainted");
            e.target.classList.remove("gridBoxElement");
        }
    }
}

createGrid(DEFAULT_CANVAS_SIZE);