const gridSize = 64
const resetButton = document.querySelector("#reset");


for (let i = 0; i < gridSize; i++){
    const verticalgrid = document.createElement('div');
    verticalgrid.classList.add("verticalgrid");
    outergrid.appendChild(verticalgrid);
    for (let i = 0; i < (gridSize - 1); i++){
        const horizontalgrid = document.createElement('div');
        horizontalgrid.classList.add("horizontalgrid");
        verticalgrid.appendChild(horizontalgrid);
        horizontalgrid.addEventListener("mouseover", (e) => {
            horizontalgrid.classList.add("hovered");
        });
    }
}

resetButton.addEventListener("click", (e) => {
    const resetGrid = document.querySelectorAll(".hovered");
    for (let i = 0; i < resetGrid.length; i++) {
        resetGrid[i].classList.remove("hovered");
    };
});
