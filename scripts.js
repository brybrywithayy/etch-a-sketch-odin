/*
 * Etch-a-Sketch
 * 
 * Insert 16x16 grid of divs into the DOM for the base
 * 
 * 
 */

// append 16x16 grid of divs onto an existing div
const container = document.querySelector("#gridContainer");

// function creates a div and appends to the parent container
function createDiv() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("divGrid");
    container.appendChild(newDiv);
}

// loop iterates and creates rows and columns of divs
for (i=0; i<16; i++) {
    for (j=0; j<16; j++) {
        createDiv();
    }
}