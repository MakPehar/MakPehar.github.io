// Tic-Tac-Toe starter code for BHS class

var player = "X";
var board = [];
// Initialize board to a 2D array of empty strings, 3x3
for (var row = 0; row < 3; row++) {
    var cols = [];
    for (var col = 0; col < 3; col++) {
        cols.push("");
    }
    board.push(cols);
}


// Returns winning player if found (X or O)
// If no winner, returns empty string
var checkForWinner = function() {
    var r1 = board[0]; //Setting up row 1
    var r2 = board[1]; //Setting up row 2
    var r3 = board[2]; //Setting up row 3
    //Checking one of the diagonals and checking if they're not empty
    if(r1[0] === r2[1] && r2[1] === r3[2] && r1[0]){
        return r1[0];
    }
    //Checking the other diagonal and checking if they're not empty
    if(r1[2] === r2[1] && r2[1] === r3[0] && r1[2]){
        return r1[2];
    }
    for(var i = 0; i < board.length; i++){
        var row = board[i]; //Initializes a row
        //Checks if three match in a row (and if they're not empty)
        if (row[0] === row[1] && row[1] === row[2] && row[0]){
            return row[0];
        }
        //Checks if it's a match in a column (and if they're not empty)
        if(r1[i] === r2[i] && r2[i] === r3[i] && r1[i]){
            return r1[0];
        }
    }
    return "";
};


// Handles click by current player of row and col
var handleClick = function(row, col) {
    var changerow = board[row]; //The row that the player clicked
    //Checks if the cell is empty and if the game is still going on
    if(changerow[col]==="" && !checkForWinner()){
        changerow[col] = player;
        board[row] = changerow;
        if(player === "X"){
            player = "O";
        }else{
            player="X";
        }
    }
};

var CELL_SIZE = 40;

var func = function(processingInstance) {
    with(processingInstance) {

        mouseClicked = function() {
            var clickedRow = Math.floor(mouseY / CELL_SIZE);
            var clickedCol = Math.floor(mouseX / CELL_SIZE);
            if (clickedRow <= 3 && clickedCol <= 3) {
                handleClick(clickedRow, clickedCol);
            }
        };

        size(400,400);

        draw = function() {
            background(0, 28, 85);
            stroke(0,0,0);

            for (var row = 0; row < board.length; row++) {
                for (var col = 0; col < board[row].length; col++) {
                    var cellX = 0 + col * CELL_SIZE;
                    var cellY = 0 + row * CELL_SIZE;
                    fill(181, 255, 183);
                    rect(cellX, cellY, CELL_SIZE, CELL_SIZE);
                    fill(0, 0, 0);
                    text(board[row][col], cellX + CELL_SIZE / 3, cellY + CELL_SIZE / 2);
                }
            }

            fill(255, 237, 225);
            var winner = checkForWinner();
            if (winner) {
                text("Winner is " + winner, 20, 160);
            } else {
                text("Current player is " + player, 20, 160);
            }
        }
    }
};
var canvas = document.getElementById("mycanvas");
var processingInstance = new Processing(canvas, func);