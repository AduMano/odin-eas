window.onload = () => {
    // Init
    const compGrid = document.querySelector(".grid");
    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
        "#33FFF1", "#FFC733", "#33FFAC", "#FF5733", "#5733FF",
        "#FF3357", "#57FF33", "#3357FF", "#FF5733", "#5733FF",
        "#33FF57", "#FF33A1", "#33FFAC", "#FFC733", "#33FFF1"
    ];
    const setSizeBtn = document.querySelector("button");

    // Functions
    const setColor = (e) => {
        const elem = e.target;
        if (elem.classList.contains('block')) {
            const selectedColor = colors[Math.floor(Math.random() * colors.length)];
            let opacity = parseFloat(elem.getAttribute("data-opacity")) - 0.1;

            elem.setAttribute("data-opacity", `${opacity}`);
            elem.style.backgroundColor = selectedColor;
            elem.style.opacity = `${opacity}`;
        }
    };

    const setGrid = (size) => {
        const fragment = document.createDocumentFragment();

        // Remove All Child
        compGrid.innerHTML = '';

        // Set Grid
        for (let i = 0; i < (size * size); i++) {
            const block = document.createElement("div");
            block.classList.add("block");
            block.setAttribute("data-opacity", "1");
            block.style.flex = `1 1 calc(100% / ${size})`;

            fragment.appendChild(block);
        }

        compGrid.appendChild(fragment);
    };

    // EVENTS
    setSizeBtn.addEventListener("click", () => {
        // Ask user to enter 1 - 100 size
        let getSize = 0;

        // Get Input and Validate
        while (true) {
            getSize = parseInt(prompt("Enter a number to set a grid n x n (1 - 100): "));

            if (!isNaN(getSize) && (getSize >= 1 && getSize <= 100)) {
                // Set Up Grid
                setTimeout(() => {
                    setGrid(getSize);
                }, 100);
                break;
            } else {
                alert("Please enter between 1 to 100 only");
            }
        }
    });

    compGrid.addEventListener("mouseover", setColor);

    setGrid(16);
};
