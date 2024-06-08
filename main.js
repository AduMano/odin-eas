window.onload = () => {
    
    // Generate 16 x 16 grid
    // Init
    let compGrid = document.querySelector(".grid");

    // Functions
    const setColor = (e) => {
        let elem = e.target;
        elem.style.backgroundColor = "green";
    }

    const setGrid = (size) => {
        for (let i = 0; i < (size * size); i++) {
            const block = document.createElement("div");
            block.classList.add("block");
            block.style.flex = "1 1 calc(100% / " + size + ")";
            block.addEventListener("mouseover", (e) => {setColor(e)});

            compGrid.appendChild(block);
        }

    }

    setGrid(16);
}