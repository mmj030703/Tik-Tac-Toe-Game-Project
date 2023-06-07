//* This code has been refactored with the help of ChatGPT.
const cellArray = Array.from(document.querySelectorAll('.cell'));
const gameStatusText = document.querySelector('.game_status_text');
const resetButton = document.querySelector('.reset_btn');
let userInput = ['', '', '', '', '', '', '', '', ''];
let turnIndicator = "X";           //* Indicates whose turn is there between 'X' and '0'.

//* Updates userInput array once user clicks on a cell. 
const updateUserInput = (cell) => {
    const index = cellArray.indexOf(cell);
    userInput[index] = cell.textContent;
}

//* Used to change background and text color of cells which made user win. 
const changeWinningStyle = (indices) => {
    indices.forEach((index) => {
        const cell = cellArray[index];
        cell.style.background = "#0000ffde",
        cell.style.color = "#fff";
    });
}

//* Used to check if there is any winner between 'X' and '0'. 
const checkWinningCondition = (input) => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],    //* Horizontal Cells
        [0, 3, 6], [1, 4, 7], [2, 5, 8],    //* Vertical Cells
        [0, 4, 8], [2, 4, 6]                //* Diagonal Cells
    ];

    for(const combination of winningCombinations) {
        const [ind0, ind1, ind2] = combination;                  //* Destructuring Assignment
        if(userInput[ind0] === input && userInput[ind1] === input && userInput[ind2] === input) {
            gameStatusText.textContent = `${input} Wins.`;
            changeWinningStyle([ind0, ind1, ind2]);
            return true;
        }
    };
    return false;
};


//* Conditions for Game to Draw.
const checkDrawCondition = () => {
    if (!userInput.includes('')) {
        gameStatusText.textContent = 'Game Draw.';
        document.querySelector('.game_grid').classList.add('shake_grid');
    }
}

const onCellClick = (eventObj) => {
    const cell = eventObj.target;

    //* corner cases
    if ((cell.textContent !== '') || (gameStatusText.textContent === "X Wins.") || (gameStatusText.textContent === "0 Wins.") || (gameStatusText.textContent === "Game Draw.")) {
        return;
    }

    cell.textContent = turnIndicator;
    updateUserInput(cell);

    turnIndicator = turnIndicator === 'X' ? '0' : 'X';
    gameStatusText.textContent = `${turnIndicator}'s turn`;

    if (checkWinningCondition('X') || checkWinningCondition('0')) {
        return;
    }
    checkDrawCondition();
}

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
    document.querySelector('.game_grid').classList.remove('shake_grid');
}

cellArray.forEach((cell) => {
    cell.addEventListener('click', onCellClick);
});

resetButton.addEventListener('click', reset);
