
function renderTable() {
    const table = document.querySelector(".table");
    table.innerHTML = "";
    table.innerHTML = `
    <div class='head'>
        <div class='cell'>
            <div class='puppet head-p1'></div>
        </div>
        <div class='cell'>
            <div class='puppet head-p2'></div>
        </div>
        <div class='cell'>
            <div class='puppet head-p3'></div>
        </div>
        <div class='cell'>
            <div class='puppet head-p4'></div>
        </div>
        <div class='cell'>
            <button class="result-button" type="button">Értékel</button>
        </div>
    </div>`;
    for (let i = 1; i < 11; i++) {
        table.innerHTML += `
        <div class='row row${i}'>
            <div class='cell'>
                <div class='puppet p1'></div>
            </div>
            <div class='cell'>
                <div class='puppet p2'></div>
            </div>
            <div class='cell'>
                <div class='puppet p3'></div>
            </div>
            <div class='cell'>
                <div class='puppet p4'></div>
            </div>
            <div class="result-cell result${i}">
                <div class="spike s1"></div>
                <div class="spike s2"></div>
                <div class="spike s3"></div>
                <div class="spike s4"></div>
            </div>
        </div>`;
    }
    const container = document.querySelector(".container");
    container.innerHTML += `
    <div class="buttons">
    <button type="button" class="start">Kezdés</button>
    <button type="button" class="end">Kilépés</button>
    </div`;
}

renderTable();

const colors = ["rgb(248,51,60)", "rgb(34, 139, 34)", "rgb(252,171,16)","rgb(43,158,179)", "rgb(0,0,255)","rgb(255, 105, 180)"];

function shuffleArray(array){
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        // Elemek cseréje az i és j indexek között:
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomizeColor(array, count){
    shuffleArray(array);
    return array.slice(0, count);
}

const randomColors = getRandomizeColor(colors, 4);
const headPuppets = document.querySelectorAll(".head .puppet");

for (let i = 0; i < headPuppets.length; i++) {
    headPuppets[i].style.backgroundColor = randomColors[i];
}
