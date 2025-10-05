function createTable() {
    // Get user inputs
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Convert inputs to numbers
    rn = parseInt(rn);
    cn = parseInt(cn);

    // Validate inputs
    if (isNaN(rn) || isNaN(cn)) {
        alert("Please enter valid numeric values!");
        return;
    }

    if (rn <= 0 || cn <= 0) {
        alert("Number of rows and columns must be greater than 0!");
        return;
    }

    // Get table reference
    let table = document.getElementById("myTable");

    // Clear previous table content if any
    table.innerHTML = "";

    // Create rows and columns
    for (let i = 0; i < rn; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < cn; j++) {
            let cell = document.createElement("td");
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}

