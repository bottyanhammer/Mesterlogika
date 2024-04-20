function renderTable() {
    const table = document.querySelector(".table");
    table.innerHTML = "";
    for (let i = 1; i < 56; i++) {
        if (i % 5 !== 0){
            table.innerHTML += `
            <div class="cell" ${i}>
                <div class="puppet"></div>
            </div>`;
        } else {
            table.innerHTML += `
            <div class="result-cell ${i}">
                <div class="spike s1"></div>
                <div class="spike s2"></div>
                <div class="spike s3"></div>
                <div class="spike s4"></div>
            </div>`;
        }

    }
}

renderTable();