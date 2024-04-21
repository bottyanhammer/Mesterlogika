
// Játéktábla renerelése:
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

// Kezdő véletlen-színek kiválasztása:
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


// Kezdő véletlen-szíenk megjelenítése:
const randomColors = getRandomizeColor(colors, 4);
const headPuppets = document.querySelectorAll(".head .puppet");

for (let i = 0; i < headPuppets.length; i++) {
    headPuppets[i].style.backgroundColor = randomColors[i];
    console.log(headPuppets[i]);
}

// Tippelés kattintásokkal: Bárhol tippelhet, de csak a soron következőben fogadom el!
// Változóban figyelem, hogy hol tartunk.
const tippPuppets = document.querySelectorAll(".row .puppet");
let j = 0;

tippPuppets.forEach(puppet => {
    puppet.addEventListener("click", (event) => {
        if (j <= colors.length-1)
        {
            event.target.style.backgroundColor = `${colors[j]}`;
        } else {
            j = 0;
            event.target.style.backgroundColor = `${colors[j]}`;
        }
        j++;
    })
});

function isFillColor(buttons) {
    const isFill = Array.from(buttons).find(button => button.style.backgroundColor === "");
    if (isFill) {
        return false;
    } else {
        return true;
    }
}

function renderResultSpikes(tippC, bvList) {
    const resultPuppets = document.querySelectorAll(`.result${tippC} .spike`);
    if (bvList.length > 0) {
        for (let i = 0; i < bvList.length; i++) {
            if (bvList[i] === "b") {
                resultPuppets[i].style.backgroundColor = `white`;
            } else {
                resultPuppets[i].style.backgroundColor = `black`;
            }
        }
    }
}

function evaluation(buttons, hideColors, bvList) {
    if (isFillColor(buttons)) {
        // Értékelés itt!******************************
        //console.log(Array.from(buttons));
        for (let item of buttons) {
            const found = Array.from(hideColors).find(hbutton => hbutton.style.backgroundColor === item.style.backgroundColor);
            if (found) {
                if (found.classList[1].slice(-1) === item.classList[1].slice(-1)) {
                    bvList.push("b");
                } else {
                    bvList.push("w");
                }
            }
        }

        renderResultSpikes(tippCount, bvList);
        tippCount++;
    } else {
        alert("Kevés a bábu!")
        return;
    }
}

const resultButton = document.querySelector(".result-button");
let tippCount = 1;
resultButton.addEventListener("click", (event) => {
    const currentButtons = document.querySelectorAll(`.row${tippCount} .puppet`);
    console.log(currentButtons)
let blackWhiteList = [];
    evaluation(currentButtons, headPuppets, blackWhiteList);
    console.log(blackWhiteList);
    
});