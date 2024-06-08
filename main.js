window.onload = () => {
    
    // Generate 16 x 16 grid
    // Init
    let compGrid = document.querySelector(".grid");
    const colors = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#FF33A1",
        "#A133FF",
        "#33FFF1",
        "#FFC733",
        "#33FFAC",
        "#FF5733",
        "#5733FF",
        "#FF3357",
        "#57FF33",
        "#3357FF",
        "#FF5733",
        "#5733FF",
        "#33FF57",
        "#FF33A1",
        "#33FFAC",
        "#FFC733",
        "#33FFF1"
    ];
    const setSizeBtn = document.querySelector("button");

    // Functions
    const setColor = (e) => {
        let elem = e.target;
        let selectedColor = colors[Math.floor(Math.random() * colors.length)]

        elem.style.backgroundColor = selectedColor;
    }

    const setGrid = (size) => {
        // Remove All Child
        while (compGrid.firstChild) {
            compGrid.removeChild(compGrid.firstChild);
        }

        // Set Grid
        for (let i = 0; i < (size * size); i++) {
            const block = document.createElement("div");
            block.classList.add("block");
            block.style.flex = "1 1 calc(100% / " + size + ")";
            block.addEventListener("mouseover", (e) => {setColor(e)});

            compGrid.appendChild(block);
        }
    }

    // EVENTS
    setSizeBtn.addEventListener("click", () => {
        // Ask user to enter 1 - 100 size
        let getSize = 0;

        // Get Input and Validate
        while (true) {
            getSize = parseInt(prompt("Enter a number to set a grid n x n (1 - 100): "));
            
            if (getSize !== NaN && 
                (getSize >= 1 && getSize <= 100)
            ) {
                break;
            }
            else {
                alert("Please enter between 1 to 100 only");
            }
        }

        // Set Up Grid
        setGrid(getSize);
    });

    setGrid(16);
}