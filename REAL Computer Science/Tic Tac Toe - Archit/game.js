var currentPlayer;
var player1 = prompt("Enter first player name: ");
var player2 = prompt("Enter second player name: ");
currentPlayer = prompt("Enter 1 for zombie or 2 for sword");
var scorex = 0;
var scorey = 0;

var grid = new Array(3);
grid[0] = new Array(3);
grid[1] = new Array(3);
grid[2] = new Array(3);

//give each box a value
for (var i = 0; i <= 2; i++) {
    for (var j = 0; j <= 2; j++) {
        grid[i][j] = 0;
    }
}

function checkWinner() {

    for (var i = 0; i <= 2; i++) {
        if (grid[i][0] === 1 && grid[i][1] === 1 && grid[i][2] === 1) {
            alert("The winner is player 1");
            scorex = scorex + 1;
        } else if (grid[i][0] === 2 && grid[i][1] === 2 && grid[i][2] === 2) {
            alert("The winner is player 2");
            scorey = scorey + 1;
        }
    }
}









function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function incrementValue2() {
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number2').value = value;
}

function clickBox(x, y) {
    // Checks If Grid Is Already Clicked
    if (grid[x][y] > 0) {
        alert("Spot is already clicked");
    }
    // Clicking Of Boxes
    else {
        if (currentPlayer == 1) {
            document.getElementById("" + x + y).innerHTML = "<img src=\"weapons.png\" width=\"80px\" height=\"80px\">";
            grid[x][y] = 1;
            currentPlayer = 2;
        } else {
            document.getElementById("" + x + y).innerHTML = "<img src=\"zombie.png\" width=\"80px\" height=\"80px\">";
            grid[x][y] = 2;
            currentPlayer = 1;
        }
    }
    checkWinner();
}

if (scorex || scorey === 3) {
    $('#number').val("0");
    $('#number2').val("0");
}

// Reset Game
function reset() {

    for (var i = 0; i <= 2; i++) {
        for (var j = 0; j <= 2; j++) {
            grid[i][j] = 0;
            document.getElementById("" + i + j).innerHTML = "&nbsp;";
        }
    }
    currentPlayer = 1;
}