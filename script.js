const gridSize = 64



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

