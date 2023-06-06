const cellArray = document.querySelectorAll('.cell');
const gameStatusText = document.querySelector('.game_status_text');
const resetButton = document.querySelector('.reset_btn');
let userInput = ['', '', '', '', '', '', '', '', ''];
let turnIndicator = "X";

const updateUserInput = (cell) => {
    if(cell.classList.contains('cell1')) {
        userInput[0] = cell.textContent;

    }
    else if(cell.classList.contains('cell2')) {
        userInput[1] = cell.textContent;
    }
    else if(cell.classList.contains('cell3')) {
        userInput[2] = cell.textContent;
    }
    else if(cell.classList.contains('cell4')) {
        userInput[3] = cell.textContent;
    }
    else if(cell.classList.contains('cell5')) {
        userInput[4] = cell.textContent;
    }
    else if(cell.classList.contains('cell6')) {
        userInput[5] = cell.textContent;
    }
    else if(cell.classList.contains('cell7')) {
        userInput[6] = cell.textContent;
    }
    else if(cell.classList.contains('cell8')) {
        userInput[7] = cell.textContent;
    }
    else if(cell.classList.contains('cell9')) {
        userInput[8] = cell.textContent;
    }
}

const onCellClick = (eventObj) => {
    const cell = eventObj.target;

    if((cell.textContent !== '') || (gameStatusText.textContent === "X Wins.") || (gameStatusText.textContent === "0 Wins.") || (gameStatusText.textContent === "Game Draw.")) {
        return;
    }

    if(turnIndicator === 'X') {
        cell.textContent = 'X';
        turnIndicator = '0';
        gameStatusText.textContent = "0's turn";
    }
    else {
        cell.textContent = '0';
        turnIndicator = 'X';
        gameStatusText.textContent = "X's turn";
    }
    
    updateUserInput(cell);
    checkWinner();
}

const changeStyle = (cells) => {
    cells.forEach((cell) => {
        Object.assign(cell.style, {
            background: "#0000ffde",
            color: "#fff"
        });
    });
}

const checkWinner = () => {
    //* Conditions for X to win. 
    if((userInput[0] === 'X' && userInput[1] === 'X' && userInput[2] === 'X') || (userInput[3] === 'X' && userInput[4] === 'X' && userInput[5] === 'X') || (userInput[6] === 'X' && userInput[7] === 'X' && userInput[8] === 'X')) {
        gameStatusText.textContent = 'X Wins.';
        if(userInput[0] === 'X' && userInput[1] === 'X' && userInput[2] === 'X') {
            changeStyle([document.querySelector('.cell1'), document.querySelector('.cell2'), document.querySelector('.cell3')]);
        }
        if(userInput[3] === 'X' && userInput[4] === 'X' && userInput[5] === 'X') {
            changeStyle([document.querySelector('.cell4'), document.querySelector('.cell5'), document.querySelector('.cell6')]);
        }
        if(userInput[6] === 'X' && userInput[7] === 'X' && userInput[8] === 'X') {
            changeStyle([document.querySelector('.cell7'), document.querySelector('.cell8'), document.querySelector('.cell9')]);
        }
    }
    if((userInput[0] === 'X' && userInput[3] === 'X' && userInput[6] === 'X') || (userInput[1] === 'X' && userInput[4] === 'X' && userInput[7] === 'X') || (userInput[2] === 'X' && userInput[5] === 'X' && userInput[8] === 'X')) {
        gameStatusText.textContent = 'X Wins.';
        if(userInput[0] === 'X' && userInput[3] === 'X' && userInput[6] === 'X') {
            changeStyle([document.querySelector('.cell1'), document.querySelector('.cell4'), document.querySelector('.cell7')]);
        }
        if(userInput[1] === 'X' && userInput[4] === 'X' && userInput[7] === 'X') {
            changeStyle([document.querySelector('.cell2'), document.querySelector('.cell5'), document.querySelector('.cell8')]);
        }
        if(userInput[2] === 'X' && userInput[5] === 'X' && userInput[8] === 'X') {
            changeStyle([document.querySelector('.cell3'), document.querySelector('.cell6'), document.querySelector('.cell9')]);
        }
    }
    if((userInput[0] === 'X' && userInput[4] === 'X' && userInput[8] === 'X') || (userInput[2] === 'X' && userInput[4] === 'X' && userInput[6] === 'X')) {
        gameStatusText.textContent = 'X Wins.';
        if(userInput[0] === 'X' && userInput[4] === 'X' && userInput[8] === 'X') {
            changeStyle([document.querySelector('.cell1'), document.querySelector('.cell5'), document.querySelector('.cell9')]);
        }
        if(userInput[2] === 'X' && userInput[4] === 'X' && userInput[6] === 'X') {
            changeStyle([document.querySelector('.cell3'), document.querySelector('.cell5'), document.querySelector('.cell7')]);
        }
    }

    //* Conditions for 0 to win. 
    if((userInput[0] === '0' && userInput[1] === '0' && userInput[2] === '0') || (userInput[3] === '0' && userInput[4] === '0' && userInput[5] === '0') || (userInput[6] === '0' && userInput[7] === '0' && userInput[8] === '0')) {
        gameStatusText.textContent = '0 Wins.';
        if(userInput[0] === '0' && userInput[1] === '0' && userInput[2] === '0') {
            changeStyle([document.querySelector('.cell1'), document.querySelector('.cell2'), document.querySelector('.cell3')]);
        }
        if(userInput[3] === '0' && userInput[4] === '0' && userInput[5] === '0') {
            changeStyle([document.querySelector('.cell4'), document.querySelector('.cell5'), document.querySelector('.cell6')]);
        }
        if(userInput[6] === '0' && userInput[7] === '0' && userInput[8] === '0') {
            changeStyle([document.querySelector('.cell7'), document.querySelector('.cell8'), document.querySelector('.cell9')]);
        }
    }
    if((userInput[0] === '0' && userInput[3] === '0' && userInput[6] === '0') || (userInput[1] === '0' && userInput[4] === '0' && userInput[7] === '0') || (userInput[2] === '0' && userInput[5] === '0' && userInput[8] === '0')) {
        gameStatusText.textContent = '0 Wins.';
        if(userInput[0] === '0' && userInput[3] === '0' && userInput[6] === '0') {
            changeStyle([document.querySelector('.cell1'), document.querySelector('.cell4'), document.querySelector('.cell7')]);
        }
        if(userInput[1] === '0' && userInput[4] === '0' && userInput[7] === '0') {
            changeStyle([document.querySelector('.cell2'), document.querySelector('.cell5'), document.querySelector('.cell8')]);
        }
        if(userInput[2] === '0' && userInput[5] === '0' && userInput[8] === '0') {
            changeStyle([document.querySelector('.cell3'), document.querySelector('.cell6'), document.querySelector('.cell9')]);
        }
    }
    if((userInput[0] === '0' && userInput[4] === '0' && userInput[8] === '0') || (userInput[2] === '0' && userInput[4] === '0' && userInput[6] === '0')) {
        gameStatusText.textContent = '0 Wins.';
        if(userInput[0] === '0' && userInput[4] === '0' && userInput[8] === '0') {
            changeStyle([document.querySelector('.cell1'), document.querySelector('.cell5'), document.querySelector('.cell9')]);
        }
        if(userInput[2] === '0' && userInput[4] === '0' && userInput[6] === '0') {
            changeStyle([document.querySelector('.cell3'), document.querySelector('.cell5'), document.querySelector('.cell7')]);
        }
    }

    //* Conditions for Game to Draw.
    if(!userInput.includes('')) {
        gameStatusText.textContent = 'Game Draw.';
    } 
}

cellArray.forEach((cell) => {
    cell.addEventListener('click', onCellClick);
});

const reset = () => {
    cellArray.forEach((cell) => {
        cell.textContent = '';
        Object.assign(cell.style, {
            background: "#ddd7d7",
            color: "#000"
        });
    });
    gameStatusText.textContent = "X's turn";
    userInput = ['', '', '', '', '', '', '', '', ''];
    turnIndicator = 'X';
}

resetButton.addEventListener('click', reset);