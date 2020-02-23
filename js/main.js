/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

let board;
let turn = 'X';
let win;

const squares = Array.from(document.querySelectorAll('#board div'));

//events        
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


//functions

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function(square) { // eye event
    
        return square === event.target;
    });
    if(board[idx] === '' &&  win != 'X' && win != 'O')        
    {
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    }
    win = getWinner();
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `That's a tie!` : win ? `${win} wins the game!` : `${turn}'s turn`;
    };

// webgazer.setGazeListener(function(data, elapsedTime) {
//     if (data == null) {
//         return;
//     }
//     var xprediction = data.x; //these x coordinates are relative to the viewport
//     var yprediction = data.y; //these y coordinates are relative to the viewport
//     console.log(elapsedTime); //elapsed time is based on time since begin was called
// }).begin()
// //img
 
// function fakeClick(x, y) {
//     document.addEventListener("keypress",fakeClick() );
            
//     console.log("key press");
//     let elem = document.elementFromPoint(x, y);
            
//     }
init();