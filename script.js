const defaultGridSize = 64
const resetButton = document.querySelector("#reset");
const gridSizeButton = document.querySelector("#gridsize")


function getRandomInt(integer) {
    return Math.floor(Math.random() * integer)
}


// function to create the grid of the etch-a-sketch
function gridCreate(gridSize) {
    for (let i = 0; i < gridSize; i++){
        const verticalgrid = document.createElement('div');
        verticalgrid.classList.add("verticalgrid");
        outergrid.appendChild(verticalgrid);
        for (let i = 0; i < gridSize; i++){
            const horizontalgrid = document.createElement('div');
            horizontalgrid.classList.add("horizontalgrid");
            verticalgrid.appendChild(horizontalgrid);
            horizontalgrid.addEventListener("mouseover", (e) => {
                if (!horizontalgrid.classList.contains('hovered')) {
                    horizontalgrid.classList.add("hovered");
                    horizontalgrid.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
                }
            });
        };
    };
};

// defaults grid to 64x64
gridCreate(defaultGridSize)

// resets grid through looping through all elements under class 'hovered'.
resetButton.addEventListener("click", (e) => {
    const resetGrid = document.querySelectorAll(".hovered");
    for (let i = 0; i < resetGrid.length; i++) {
        resetGrid[i].style.backgroundColor = 'white';
    };
});

// allows custom grid size through a prompt
gridSizeButton.addEventListener("click", (e) => {
    const newGridSize = parseInt(prompt("what value?"));
    const outerGrid = document.querySelector("#outergrid");
    // removes all children of main container holding the grid effectively clearing grids
    outerGrid.replaceChildren();
    // uses grid create function with the grid size inputted from the prompt
    gridCreate(newGridSize);
});