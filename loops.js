

// Write a program that takes a number and prints a staircase up to that level
// eg 4
// *
// **
// ***
// ****

// --------- solution-------------

let i = 0;
while (i < 4) {
  console.log('*'.repeat(i + 1));
  i++; 
}


// Write a program to check if a number is odd or even

// --------- solution-------------

let refNum = prompt ('What is your ref num?');

if (refNum % 2 == 0) {
    console.log('even num');
}else {
    console.log('odd num');
}

// Write a program to print the sum of numbers from 0 - n, n being the number entered: eg 10 -> ??

// --------- solution-------------


let enterNum =prompt("Enter a number:");

let sum = 0;

for (let i = 0; i <= enterNum; i++) {
    console.log(sum += i);
}



  