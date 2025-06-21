// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// ------------------Solution----------------------

let size = 8;
let board = "";

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    // Alternate between '#' and ' ' depending on the sum of row and column
    if ((row + col) % 2 === 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n"; // Newline at the end of each row
}

console.log(board);