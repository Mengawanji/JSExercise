
// Write a program that prints the numbers from 1 to 100.
// But for multiples of 3, print "Fizz" instead of the number,
// for multiples of 5, print "Buzz",
// and for numbers that are multiples of both 3 and 5, print "FizzBuzz".

// --------- solution-------------

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  