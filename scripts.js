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

    // reset the canvas row-column alignment
    gridCanvas.setAttribute("style", `display: grid; grid-template-columns: repeat(${gridSize}, auto`);
}

// determine if grid is mouseover'ed
function isMouseover(e) {
    if (e.type === "mouseover") {
        console.log("mouseover");
        return true;
    } else {
        return false;
    }
}
// determine if a grid is mousedown'ed
// CURRENTLY NOT WORKING
function isMousedown(e) {
    if (e.type === "mousedown") {
        console.log("mousedown");
        return true;
    } else {
        return false;
    }
}

// takes an event from event listeners attached to each grid in the canvas
function changeBackgroundColor(e) {
    
    if (isMouseover(e) === true) {
        if (isMousedown(e) === true) {
            e.classList.add("gridBoxElementPainted");
        } 
    }
}

createGrid(DEFAULT_CANVAS_SIZE);