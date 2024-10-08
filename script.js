const gameboard = [];

const body = document.querySelector(`body`)

let lastPlaced = `o`;

drawGameboard();

function drawGameboard() {
    lastPlaced = `o`;
    body.innerHTML = ``;
    const gameboardDOM = document.createElement(`div`)
    gameboardDOM.setAttribute(`class`, `gameboard`)
    body.appendChild(gameboardDOM);
    for (let i = 0; i < 9; i++) {
        gameboard.push(undefined);
        const field = document.createElement(`div`);
        field.setAttribute(`class`, `field`);
        field.setAttribute(`data-index`, `${i}`);
        field.addEventListener(`click`, (e) => {
            placeSymbol(e.target);
        });
        gameboardDOM.appendChild(field);
    }
}

function placeSymbol(e) {
    if (lastPlaced === `o`) {
        if (gameboard[e.dataset.index] !== undefined) {
            alert(`Use an empty field`);
        } else {
            gameboard[e.dataset.index] = `x`;
            e.textContent = `x`
            lastPlaced = `x`;
            setTimeout(checkBoard, 1000);
        }
    } else {
        if (gameboard[e.dataset.index] !== undefined) {
            alert(`Use an empty field`)
        } else {
            gameboard[e.dataset.index] = `o`;
            e.textContent = `o`
            lastPlaced = `o`;
            setTimeout(checkBoard, 1000);
        }
    }
}

function checkBoard() {
    if (
        ((gameboard[0] === gameboard[1]) && (gameboard [1] === gameboard[2]) && (gameboard[0] != undefined)) ||
        ((gameboard[3] === gameboard[4]) && (gameboard [4] === gameboard[5]) && (gameboard[3] != undefined)) ||
        ((gameboard[6] === gameboard[7]) && (gameboard [7] === gameboard[8]) && (gameboard[6] != undefined)) ||
        ((gameboard[0] === gameboard[3]) && (gameboard [3] === gameboard[6]) && (gameboard[0] != undefined)) ||
        ((gameboard[1] === gameboard[4]) && (gameboard [4] === gameboard[7]) && (gameboard[1] != undefined)) ||
        ((gameboard[2] === gameboard[5]) && (gameboard [5] === gameboard[8]) && (gameboard[2] != undefined)) ||
        ((gameboard[0] === gameboard[4]) && (gameboard [4] === gameboard[8]) && (gameboard[0] != undefined)) ||
        ((gameboard[2] === gameboard[4]) && (gameboard [4] === gameboard[6]) && (gameboard[2] != undefined)) 
    ) {
        if (lastPlaced === `x`) {
            alert(`X won`);
            for (let i = 0; i < 9; i++) {
                gameboard[i] = undefined;
            }
            drawGameboard();
        } else {
            alert(`O won`);
            for (let i = 0; i < 9; i++) {
                gameboard[i] = undefined;
            }
            drawGameboard();
        }

    } else if (gameboard.includes(undefined) === false) {
        alert(`It's a draw`)
        for (let i = 0; i < 9; i++) {
            gameboard[i] = undefined;
        }
        lastPlaced = `o`;
        drawGameboard();
    }
}


