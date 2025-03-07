for (let i = 0; i < 16; i++){
    const verticalgrid = document.createElement('div');
    verticalgrid.classList.add("verticalgrid");
    outergrid.appendChild(verticalgrid);
    for (let i = 0; i < 15; i++){
        const horizontalgrid = document.createElement('div');
        horizontalgrid.classList.add("horizontalgrid");
        verticalgrid.appendChild(horizontalgrid);
    }
}